/* 紅藍椅 GN 教學播放器：手動閱讀＋自動導覽。
   單一時間軸：audio.currentTime 驅動字幕與重點標示；換頁時舊回呼以 token 失效。 */
(function () {
  "use strict";
  var N = window.NARRATION || {};
  var $ = function (s) { return document.querySelector(s); };
  var audio = new Audio(); audio.preload = "auto";
  var S = { mode: "manual", state: "idle", token: 0, sub: true, muted: false, tx: false,
            sid: null, holdTimer: 0, holdRemain: 0, holdStart: 0, raf: 0, advance: false, programmatic: false };
  var els = { sub: $("#sub"), stat: $("#stat"), tx: $("#tx"), play: $("#b-play"), replay: $("#b-replay"),
              bsub: $("#b-sub"), mute: $("#b-mute"), btx: $("#b-tx"), manual: $("#b-manual") };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function status(t) { els.stat.textContent = t || ""; }
  function sidOf(sl) { return sl && sl.getAttribute("data-sid"); }
  function total() { return Reveal.getTotalSlides(); }

  /* ---- 畫面：字幕與標示 ---- */
  function clearCue() {
    els.sub.textContent = "";
    document.querySelectorAll(".cue-on").forEach(function (n) { n.classList.remove("cue-on"); });
    S.curSeg = -1;
  }
  function applyCue(i, seg) {
    if (i === S.curSeg) return;
    S.curSeg = i;
    document.querySelectorAll(".cue-on").forEach(function (n) { n.classList.remove("cue-on"); });
    var sl = Reveal.getCurrentSlide();
    if (sl && seg.target) {
      var t = sl.querySelector('[data-cue="' + seg.target + '"]');
      if (t) t.classList.add("cue-on");
    }
    els.sub.textContent = S.sub ? seg.text : "";
  }
  function tick() {
    var d = N[S.sid];
    if (d && S.state !== "idle") {
      var t = audio.currentTime, idx = -1;
      for (var i = 0; i < d.segs.length; i++) { if (t >= d.segs[i].t0 && t < d.segs[i].t1 + 0.02) idx = i; }
      if (idx < 0 && t >= d.duration - 0.05) idx = d.segs.length - 1;
      if (idx >= 0) applyCue(idx, d.segs[idx]);
    }
    S.raf = requestAnimationFrame(tick);
  }
  function setLabels() {
    var auto = S.mode === "auto";
    els.play.textContent = !auto ? "開始導覽" : (S.state === "paused" ? "繼續" : "暫停");
    els.play.classList.toggle("on", auto && S.state !== "paused");
    els.replay.textContent = auto ? "重播本頁" : "朗讀本頁";
    els.manual.classList.toggle("on", !auto);
  }
  function renderTx() {
    var d = N[S.sid];
    els.tx.hidden = !S.tx;
    if (S.tx) els.tx.innerHTML = d ? d.segs.map(function (s) { return "<p>" + s.text + "</p>"; }).join("") : "<p>（本頁沒有旁白）</p>";
  }

  /* ---- 播放控制 ---- */
  function stopAudio() { try { audio.pause(); } catch (e) {} audio.removeAttribute("src"); try { audio.load(); } catch (e) {} }
  function cancelHold() { clearTimeout(S.holdTimer); S.holdTimer = 0; }
  function invalidate() { S.token++; cancelHold(); }

  function speak(advance) {
    invalidate(); var my = S.token;
    S.advance = !!advance; S.sid = sidOf(Reveal.getCurrentSlide()); clearCue(); renderTx();
    var d = N[S.sid];
    if (!d) { status("本頁沒有旁白"); S.state = "playing"; setLabels(); if (S.advance) afterEnd(my, true); else S.state = "idle"; return; }
    audio.onended = function () { if (my === S.token) afterEnd(my, false); };
    audio.onerror = function () {
      if (my !== S.token) return;
      S.state = "paused"; setLabels(); status("載入旁白失敗：" + d.audio + "。已停在這一頁，可重播、換頁或切回手動。");
    };
    audio.src = d.audio; audio.muted = S.muted; audio.currentTime = 0;
    S.state = "playing"; setLabels(); status(S.muted ? "無聲播放中" : "播放中");
    var p = audio.play();
    if (p && p.catch) p.catch(function (err) {
      if (my !== S.token) return;
      S.state = "paused"; setLabels();
      if (err && err.name === "NotAllowedError")
        status("瀏覽器擋住了自動播放。按「繼續」重試，或按「手動」改為自行閱讀。");
      else
        status("無法載入或播放旁白（" + d.audio + "，" + (err && err.name) + "）。已停在這一頁，可重播、換頁或切回手動。");
    });
  }
  function afterEnd(my, noAudio) {
    if (my !== S.token) return;
    if (!S.advance) { S.state = "idle"; status("本頁播放完畢"); setLabels(); return; }
    var wait = noAudio ? 2500 : 1400;
    var sl = Reveal.getCurrentSlide(); if (sl && sl.classList.contains("chapter")) wait = 1200;
    holdThen(my, wait);
  }
  function holdThen(my, ms) {
    cancelHold(); S.holdRemain = ms; S.holdStart = Date.now(); S.state = "hold";
    S.holdTimer = setTimeout(function () { if (my === S.token) goNext(); }, ms);
  }
  function goNext() {
    var idx = Reveal.getIndices().h;
    if (idx + 1 >= total()) { finish(); return; }
    S.programmatic = true; Reveal.slide(idx + 1, 0);
  }
  function finish() {
    invalidate(); S.mode = "manual"; S.state = "idle"; stopAudio(); clearCue(); setLabels();
    status("導覽結束（最後一頁，不循環）。按「重新開始」可從頭再來。");
  }
  function startTour() { S.mode = "auto"; setLabels(); speak(true); }
  function pause() {
    if (S.state === "playing") { audio.pause(); S.state = "paused"; status("已暫停"); }
    else if (S.state === "hold") { S.holdRemain -= Date.now() - S.holdStart; cancelHold(); S.state = "paused"; S.wasHold = true; status("已暫停"); }
    setLabels();
  }
  function resume() {
    if (S.state !== "paused") return;
    var my = S.token;
    if (S.wasHold) { S.wasHold = false; holdThen(my, Math.max(200, S.holdRemain)); setLabels(); status("播放中"); return; }
    if (!audio.getAttribute("src")) { speak(S.mode === "auto"); return; }
    S.state = "playing"; setLabels(); status(S.muted ? "無聲播放中" : "播放中");
    var p = audio.play(); if (p && p.catch) p.catch(function () { S.state = "paused"; setLabels(); status("仍無法播放，請再按一次「繼續」或切回手動。"); });
  }
  function toManual(msg) {
    invalidate(); S.mode = "manual"; S.state = "idle"; stopAudio(); clearCue(); setLabels(); status(msg || "手動閱讀");
  }
  function restart() {
    invalidate(); stopAudio(); clearCue(); S.mode = "auto"; S.state = "idle";
    if (Reveal.getIndices().h === 0) { speak(true); } else { S.programmatic = true; Reveal.slide(0, 0); }
    Reveal.getIndices(); setLabels();
  }

  /* ---- Reveal 事件 ---- */
  function pg() { var i = Reveal.getIndices().h + 1; $("#pg").textContent = i + " / " + total(); }
  function onSlide() {
    pg(); renderTx();
    if (S.programmatic) { S.programmatic = false; if (S.mode === "auto") speak(true); return; }
    if (S.mode === "auto") toManual("你手動換了頁，導覽已切回手動。要繼續請按「開始導覽」。");
    else { invalidate(); stopAudio(); S.state = "idle"; clearCue(); status(""); }
    S.sid = sidOf(Reveal.getCurrentSlide());
  }
  function hiddenPause() { if (S.mode === "auto" && (S.state === "playing" || S.state === "hold")) { pause(); status("已暫停（分頁在背景／總覽）。按「繼續」接著播。"); } }

  Reveal.initialize({ hash: true, width: 1920, height: 1080, margin: 0.02, minScale: 0.2, controls: false, progress: true,
    slideNumber: false, transition: "none", center: false, keyboard: true, overview: true }).then(function () {
    S.sid = sidOf(Reveal.getCurrentSlide()); pg(); renderTx(); setLabels(); tick();
    Reveal.on("slidechanged", onSlide);
    Reveal.on("overviewshown", hiddenPause);
    Reveal.on("paused", hiddenPause);
  });
  document.addEventListener("visibilitychange", function () { if (document.hidden) hiddenPause(); });

  function bind(id, fn) { $(id).addEventListener("click", function (ev) { fn(); if (ev.detail > 0) ev.currentTarget.blur(); }); }
  bind("#b-prev", function () { Reveal.prev(); });
  bind("#b-next", function () { Reveal.next(); });
  bind("#b-play", function () {
    if (S.mode !== "auto") startTour();
    else if (S.state === "paused") resume(); else pause();
  });
  bind("#b-replay", function () { S.mode === "auto" ? speak(true) : speak(false); });
  bind("#b-restart", restart);
  bind("#b-manual", function () { toManual("手動閱讀"); });
  bind("#b-sub", function () { S.sub = !S.sub; els.bsub.setAttribute("aria-pressed", S.sub); els.bsub.classList.toggle("on", S.sub);
    if (!S.sub) els.sub.textContent = ""; else S.curSeg = -1; });
  bind("#b-mute", function () { S.muted = !S.muted; audio.muted = S.muted; els.mute.setAttribute("aria-pressed", S.muted); els.mute.classList.toggle("on", S.muted); });
  bind("#b-tx", function () { S.tx = !S.tx; els.btx.setAttribute("aria-pressed", S.tx); els.btx.classList.toggle("on", S.tx); renderTx(); });
  els.bsub.classList.add("on");
  window.__course = { S: S, N: N, audio: audio };   // 驗證用
})();
