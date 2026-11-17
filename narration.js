window.NARRATION = {
 "cover": {
  "audio": "audio/cover.mp3",
  "duration": 16.512,
  "segs": [
   {
    "text": "大家好，歡迎來到紅藍椅的幾何節點教學。",
    "target": "h1",
    "t0": 0.0,
    "t1": 4.49
   },
   {
    "text": "這一課，我會帶你從一個空白的新檔案開始，一步一步，做出整張紅藍椅。",
    "target": "sub",
    "t0": 4.49,
    "t1": 11.222
   },
   {
    "text": "這份教學從準備環境，一路做到整椅驗收，一共七章。",
    "target": "meta",
    "t0": 11.222,
    "t1": 16.512
   }
  ]
 },
 "guide": {
  "audio": "audio/guide.mp3",
  "duration": 28.44,
  "segs": [
   {
    "text": "先說一下這堂課怎麼跟。每一頁，我們只做一件事：先跟著做，再看結果，卡住了就回頭查。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 9.816
   },
   {
    "text": "畫面上的截圖，都是 Blender 四點五的真實畫面，想看清楚一點，可以點圖開原圖。",
    "target": "li:1",
    "t0": 9.816,
    "t1": 17.094
   },
   {
    "text": "單位我們用毫米，所以所有的數字，都可以直接照著填，不用換算。",
    "target": "li:2",
    "t0": 17.094,
    "t1": 23.461
   },
   {
    "text": "每一章最後都有驗收，確認都對了，再往下一章。",
    "target": "li:3",
    "t0": 23.461,
    "t1": 28.44
   }
  ]
 },
 "compare": {
  "audio": "audio/compare.mp3",
  "duration": 83.712,
  "segs": [
   {
    "text": "在開始動手之前，先整體比較一下，傳統建模和幾何節點，到底差在哪裡。傳統是一件一件做，幾何節點，則是用規則來做。",
    "target": "tr:0",
    "t0": 0.0,
    "t1": 12.29
   },
   {
    "text": "先看做一件。傳統做法是新增一個方塊，再到側欄改尺寸、位置跟角度；幾何節點是在一個點上放方塊，尺寸、位置、角度，都由這個點的資料決定。",
    "target": "tr:1",
    "t0": 12.29,
    "t1": 27.055
   },
   {
    "text": "如果要做十七件，傳統要重複十七次；幾何節點，只要十七個點，加上一條規則。",
    "target": "tr:2",
    "t0": 27.055,
    "t1": 34.998
   },
   {
    "text": "要改尺寸的時候，傳統得回到那一件去改；幾何節點只要改資料表裡的一格，全部就會一起更新。",
    "target": "tr:3",
    "t0": 34.998,
    "t1": 43.149
   },
   {
    "text": "上色和黃色端面也不一樣。傳統要一件一件指定材質，端面還得進編輯模式選面；幾何節點是依款式編號，一次選好。",
    "target": "tr:4",
    "t0": 43.149,
    "t1": 54.477
   },
   {
    "text": "修改歷史方面，傳統改了網格就改了，只能靠復原；節點是非破壞性的，隨時可以調整、停用、重接。",
    "target": "tr:5",
    "t0": 54.477,
    "t1": 64.282
   },
   {
    "text": "單件微調，傳統可以直接進編輯模式拉點；節點就不行，要改資料或加節點，真的需要的時候，才實體化。",
    "target": "tr:6",
    "t0": 64.282,
    "t1": 73.826
   },
   {
    "text": "當然也有代價，就是學習成本比較高，要懂資料怎麼流動，節點圖也容易亂，所以我們一路上，都會把排版整理好。",
    "target": "tr:7",
    "t0": 73.826,
    "t1": 83.712
   }
  ]
 },
 "GN00": {
  "audio": "audio/GN00.mp3",
  "duration": 17.112,
  "segs": [
   {
    "text": "第零章，準備環境。這一章的目標，是把 Blender 設成毫米單位，這樣後面每個欄位，都能直接填數字。",
    "target": "goal",
    "t0": 0.0,
    "t1": 10.063
   },
   {
    "text": "做完之後，尺寸要顯示毫米，單位縮放是零點零零一，而且檔案要先存好。",
    "target": "check",
    "t0": 10.063,
    "t1": 17.112
   }
  ]
 },
 "00-01": {
  "audio": "audio/00-01.mp3",
  "duration": 12.408,
  "segs": [
   {
    "text": "先打開 Blender 四點五，從 File 選單，選 New，再選 General。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.623
   },
   {
    "text": "你會看到中間是一個預設的方塊，右上角是大綱，右下角是屬性編輯器。",
    "target": "li:1",
    "t0": 5.623,
    "t1": 12.408
   }
  ]
 },
 "00-02": {
  "audio": "audio/00-02.mp3",
  "duration": 11.592,
  "segs": [
   {
    "text": "接著，在右下角的屬性編輯器裡，點左邊那一排圖示中間的 Scene。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.079
   },
   {
    "text": "裡面有好幾個面板，我們要找的，是 Units，也就是單位。",
    "target": "li:1",
    "t0": 6.079,
    "t1": 11.592
   }
  ]
 },
 "00-03": {
  "audio": "audio/00-03.mp3",
  "duration": 17.184,
  "segs": [
   {
    "text": "把 Units 這個面板展開。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 2.928
   },
   {
    "text": "預設是公制，單位縮放是一，長度單位是公尺。",
    "target": "li:1",
    "t0": 2.928,
    "t1": 7.771
   },
   {
    "text": "也就是說，Blender 預設一個單位，就是一公尺。如果你輸入四百五十，它就會當成四百五十公尺。",
    "target": "diff",
    "t0": 7.771,
    "t1": 17.184
   }
  ]
 },
 "00-04": {
  "audio": "audio/00-04.mp3",
  "duration": 23.76,
  "segs": [
   {
    "text": "把長度單位改成 Millimeters，也就是毫米。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.204
   },
   {
    "text": "單位縮放，輸入零點零零一。",
    "target": "li:1",
    "t0": 4.204,
    "t1": 7.654
   },
   {
    "text": "其他的，維持公制和角度就好。",
    "target": "li:2",
    "t0": 7.654,
    "t1": 11.339
   },
   {
    "text": "這樣設定之後，一個 Blender 單位，剛好等於一毫米，連沒有單位的欄位，也能直接填毫米。如果只改長度單位，那些欄位還是得填公尺。",
    "target": "diff",
    "t0": 11.339,
    "t1": 23.76
   }
  ]
 },
 "00-05": {
  "audio": "audio/00-05.mp3",
  "duration": 10.896,
  "segs": [
   {
    "text": "現在把滑鼠移到三維視圖上，按 N 鍵打開側欄，切到 Item 分頁。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.209
   },
   {
    "text": "你會看到尺寸變成兩毫米，原本是兩公尺。",
    "target": "li:1",
    "t0": 6.209,
    "t1": 10.896
   }
  ]
 },
 "00-06": {
  "audio": "audio/00-06.mp3",
  "duration": 14.016,
  "segs": [
   {
    "text": "再把側欄切到 View 分頁。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 3.006
   },
   {
    "text": "Clip Start 填一，Clip End 填五萬。",
    "target": "li:1",
    "t0": 3.006,
    "t1": 6.339
   },
   {
    "text": "因為在毫米單位下，預設的一千，只有一公尺，整張椅子稍微拉遠一點，就會被切掉。",
    "target": "diff",
    "t0": 6.339,
    "t1": 14.016
   }
  ]
 },
 "00-07": {
  "audio": "audio/00-07.mp3",
  "duration": 30.048,
  "segs": [
   {
    "text": "最後，點視窗上方的 Geometry Nodes 分頁。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.321
   },
   {
    "text": "這裡有四個區域：左上是試算表，中間上方是三維視圖，下方是節點編輯器，右邊是大綱跟屬性。",
    "target": "li:1",
    "t0": 4.321,
    "t1": 13.318
   },
   {
    "text": "接著用 File、Save As，把檔案存成 RB 底線 GN。先存檔，萬一當機，才不會白做。",
    "target": "li:2",
    "t0": 13.318,
    "t1": 22.211
   },
   {
    "text": "提醒一下，單位設定是跟著檔案走的，每次新增檔案，都會回到公尺，要重新設定。",
    "target": "diff",
    "t0": 22.211,
    "t1": 30.048
   }
  ]
 },
 "GN01": {
  "audio": "audio/GN01.mp3",
  "duration": 20.304,
  "segs": [
   {
    "text": "第一章，我們用兩種方法，做同一塊藍色座板。傳統做法，和幾何節點的做法，並排比較。",
    "target": "goal",
    "t0": 0.0,
    "t1": 9.633
   },
   {
    "text": "做完之後，兩塊座板的外形、位置、傾斜角度，要一模一樣，而且你要說得出來，各自要改尺寸的時候，該動哪裡。",
    "target": "check",
    "t0": 9.633,
    "t1": 20.304
   }
  ]
 },
 "01-01": {
  "audio": "audio/01-01.mp3",
  "duration": 9.168,
  "segs": [
   {
    "text": "先切到 Layout 工作區，選取那個預設的方塊。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.464
   },
   {
    "text": "滑鼠放在三維視圖，按 N，打開 Item 分頁。",
    "target": "li:1",
    "t0": 4.464,
    "t1": 9.168
   }
  ]
 },
 "01-02": {
  "audio": "audio/01-02.mp3",
  "duration": 10.776,
  "segs": [
   {
    "text": "選取方塊之後，按 F2，輸入 Seat 底線 Traditional，按 Enter。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.662
   },
   {
    "text": "這時候，大綱和視圖左上角，都會顯示新的名字。",
    "target": "li:1",
    "t0": 5.662,
    "t1": 10.776
   }
  ]
 },
 "01-03": {
  "audio": "audio/01-03.mp3",
  "duration": 17.352,
  "segs": [
   {
    "text": "在 Item 分頁的 Dimensions，X 填三百六十，Y 填四百五十，Z 填十二。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.586
   },
   {
    "text": "注意看，傳統做法是改物件的縮放，所以 Scale 變成了一百八十、兩百二十五、六；網格本身，其實還是兩毫米的小方塊。",
    "target": "diff",
    "t0": 6.586,
    "t1": 17.352
   }
  ]
 },
 "01-04": {
  "audio": "audio/01-04.mp3",
  "duration": 10.344,
  "segs": [
   {
    "text": "Location，X 填零，Y 填一百七十八點三，Z 填兩百七十五點二。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.691
   },
   {
    "text": "Rotation 的 X，填負十一點六七度。",
    "target": "li:1",
    "t0": 6.691,
    "t1": 10.344
   }
  ]
 },
 "01-05": {
  "audio": "audio/01-05.mp3",
  "duration": 15.96,
  "segs": [
   {
    "text": "滑鼠在三維視圖，按 Control A，選 Scale。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.425
   },
   {
    "text": "Scale 就回到一，尺寸不變。",
    "target": "li:1",
    "t0": 4.425,
    "t1": 7.641
   },
   {
    "text": "傳統做法常常要套用縮放，不然縮放會影響後面的修改。幾何節點就沒有這一步。",
    "target": "diff",
    "t0": 7.641,
    "t1": 15.96
   }
  ]
 },
 "01-06": {
  "audio": "audio/01-06.mp3",
  "duration": 14.256,
  "segs": [
   {
    "text": "屬性編輯器切到 Material 分頁，按 New，名字改成 RB 底線 Blue。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.131
   },
   {
    "text": "Base Color 設成藍色。",
    "target": "li:1",
    "t0": 6.131,
    "t1": 8.722
   },
   {
    "text": "三維視圖要用 Solid 著色，顏色選 Material，才看得到顏色。",
    "target": "li:2",
    "t0": 8.722,
    "t1": 14.256
   }
  ]
 },
 "01-07": {
  "audio": "audio/01-07.mp3",
  "duration": 20.472,
  "segs": [
   {
    "text": "接下來，換幾何節點的做法。先切到 Geometry Nodes 工作區。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.795
   },
   {
    "text": "從 Add、Mesh、Plane，新增一個平面，按 F2，改名成 Seat 底線 GN。",
    "target": "li:1",
    "t0": 6.795,
    "t1": 13.175
   },
   {
    "text": "你會看到下方的節點編輯器，出現一個 New 按鈕，代表這個物件，還沒有幾何節點。",
    "target": "li:2",
    "t0": 13.175,
    "t1": 20.472
   }
  ]
 },
 "01-08": {
  "audio": "audio/01-08.mp3",
  "duration": 14.136,
  "segs": [
   {
    "text": "按一下節點編輯器的 New。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 3.019
   },
   {
    "text": "會出現 Group Input，連到 Group Output，意思是把原本的形狀，原封不動地輸出。",
    "target": "li:1",
    "t0": 3.019,
    "t1": 9.49
   },
   {
    "text": "右邊的屬性，也會自動多一個幾何節點修改器。",
    "target": "li:2",
    "t0": 9.49,
    "t1": 14.136
   }
  ]
 },
 "01-09": {
  "audio": "audio/01-09.mp3",
  "duration": 19.2,
  "segs": [
   {
    "text": "滑鼠在節點編輯器裡，按 Shift A，搜尋 Cube。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.685
   },
   {
    "text": "把 Cube 的 Mesh，拉到 Group Output 的 Geometry，原本的連線就會被取代。",
    "target": "li:1",
    "t0": 4.685,
    "t1": 10.31
   },
   {
    "text": "傳統做法是改物件，這裡是接一個，會產生方塊的節點。原本的平面，已經被丟掉了。",
    "target": "diff",
    "t0": 10.31,
    "t1": 19.2
   }
  ]
 },
 "01-10": {
  "audio": "audio/01-10.mp3",
  "duration": 11.232,
  "segs": [
   {
    "text": "Cube 節點的 Size，X 填三百六十，Y 填四百五十，Z 填十二。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.131
   },
   {
    "text": "尺寸直接寫在節點裡，物件本身的 Scale，仍然是一。",
    "target": "diff",
    "t0": 6.131,
    "t1": 11.232
   }
  ]
 },
 "01-11": {
  "audio": "audio/01-11.mp3",
  "duration": 21.408,
  "segs": [
   {
    "text": "再按 Shift A，搜尋 Transform Geometry，把它插在 Cube 和 Group Output 中間。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.701
   },
   {
    "text": "Translation 填零、一百七十八點三、兩百七十五點二；Rotation 的 X，填負十一點六七度。",
    "target": "li:1",
    "t0": 5.701,
    "t1": 13.683
   },
   {
    "text": "欄位只會顯示到整數，所以 Y 看起來是一百七十八，雙擊一下，就能看到完整的數字。",
    "target": "li:2",
    "t0": 13.683,
    "t1": 21.408
   }
  ]
 },
 "01-12": {
  "audio": "audio/01-12.mp3",
  "duration": 24.552,
  "segs": [
   {
    "text": "最後，按 Shift A，搜尋 Set Material，放在 Transform Geometry 後面。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.974
   },
   {
    "text": "Material 選 RB 底線 Blue。",
    "target": "li:1",
    "t0": 5.974,
    "t1": 9.034
   },
   {
    "text": "三維視圖就會看到藍色的座板，位置和傾角，跟傳統做法一樣。",
    "target": "li:2",
    "t0": 9.034,
    "t1": 14.998
   },
   {
    "text": "傳統做法要換材質，得先選物件再換；這裡的材質，只是節點的一個欄位，之後還能依條件，分別上色。",
    "target": "diff",
    "t0": 14.998,
    "t1": 24.552
   }
  ]
 },
 "01-13": {
  "audio": "audio/01-13.mp3",
  "duration": 28.704,
  "segs": [
   {
    "text": "最後來比對一下。切到右視圖，也就是 View、Viewpoint、Right，或是按數字鍵盤的三。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 8.696
   },
   {
    "text": "先把幾何節點的座板隱藏，看傳統的座板；再反過來看。",
    "target": "li:1",
    "t0": 8.696,
    "t1": 14.334
   },
   {
    "text": "兩個的位置和傾角都一樣，座板往後，下傾十一點六七度。",
    "target": "li:2",
    "t0": 14.334,
    "t1": 20.258
   },
   {
    "text": "兩種做法，得到同一個結果，差別只在怎麼改：傳統改物件的欄位，幾何節點改節點的欄位。",
    "target": "diff",
    "t0": 20.258,
    "t1": 28.704
   }
  ]
 },
 "GN02": {
  "audio": "audio/GN02.mp3",
  "duration": 16.224,
  "segs": [
   {
    "text": "第二章，一個點放一個方塊。這一章我們要弄懂 Instance on Points：點在哪裡，實例就在哪裡。",
    "target": "goal",
    "t0": 0.0,
    "t1": 8.93
   },
   {
    "text": "做完之後，點的數量會從一個變成兩個，而且方塊的中心，剛好就在點的位置。",
    "target": "check",
    "t0": 8.93,
    "t1": 16.224
   }
  ]
 },
 "02-01": {
  "audio": "audio/02-01.mp3",
  "duration": 22.08,
  "segs": [
   {
    "text": "照第一章的做法，新增一個平面，取名 Demo 底線 Points，按 New 建立節點群組。再按 Shift A，搜尋 Mesh Line，把它的 Mesh 接到 Group Output。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 11.6
   },
   {
    "text": "把 Count 改成一。",
    "target": "li:2",
    "t0": 11.6,
    "t1": 13.761
   },
   {
    "text": "Mesh Line 本來會產生一排點，Count 是一，就只剩一個點。我們要的是點，不是形狀。",
    "target": "diff",
    "t0": 13.761,
    "t1": 22.08
   }
  ]
 },
 "02-02": {
  "audio": "audio/02-02.mp3",
  "duration": 21.912,
  "segs": [
   {
    "text": "按 Shift A，加入 Instance on Points，把 Mesh Line 的 Mesh，接到它的 Points。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.506
   },
   {
    "text": "再加一個 Cube，Size 填一百、一百、一百，Mesh 接到 Instance on Points 的 Instance。",
    "target": "li:1",
    "t0": 5.506,
    "t1": 12.394
   },
   {
    "text": "最後把 Instances，接到 Group Output。",
    "target": "li:2",
    "t0": 12.394,
    "t1": 15.948
   },
   {
    "text": "Instance on Points 不會改動點，它只是在每一個點的位置，放一份複本。",
    "target": "diff",
    "t0": 15.948,
    "t1": 21.912
   }
  ]
 },
 "02-03": {
  "audio": "audio/02-03.mp3",
  "duration": 14.64,
  "segs": [
   {
    "text": "把 Mesh Line 的 Start Location，X 填三百。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 3.839
   },
   {
    "text": "你會看到，方塊跟著移到三百毫米的位置。",
    "target": "li:1",
    "t0": 3.839,
    "t1": 8.253
   },
   {
    "text": "要注意，方塊本身沒有被移動，是點被移動了，實例只是跟著點走。",
    "target": "diff",
    "t0": 8.253,
    "t1": 14.64
   }
  ]
 },
 "02-04": {
  "audio": "audio/02-04.mp3",
  "duration": 18.84,
  "segs": [
   {
    "text": "先把 Start Location 改回零，Count 改成二，Offset 的 X 填四百，第二個點就會出現在四百。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 7.368
   },
   {
    "text": "再把 Spreadsheet 切到 Evaluated，Instances。",
    "target": "li:2",
    "t0": 7.368,
    "t1": 11.417
   },
   {
    "text": "在 Instances 分頁裡，一列就是一個實例。之後整張椅子，就是十七列。",
    "target": "diff",
    "t0": 11.417,
    "t1": 18.84
   }
  ]
 },
 "GN03": {
  "audio": "audio/GN03.mp3",
  "duration": 21.696,
  "segs": [
   {
    "text": "第三章，用屬性控制尺寸和角度。我們要讓每個點，自己帶著尺寸和角度，座板和背板，各自長成正確的樣子。",
    "target": "goal",
    "t0": 0.0,
    "t1": 11.456
   },
   {
    "text": "做完之後，座板和背板的尺寸、位置、傾角，都要是對的：座板負十一點六七度，背板負二十六點五六五度。",
    "target": "check",
    "t0": 11.456,
    "t1": 21.696
   }
  ]
 },
 "03-01": {
  "audio": "audio/03-01.mp3",
  "duration": 21.96,
  "segs": [
   {
    "text": "切到 Scripting 工作區，在 Text Editor 按 Open，選 make_data 點 py。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.662
   },
   {
    "text": "把檔案開頭的 STAGE，改成 demo2。",
    "target": "li:1",
    "t0": 5.662,
    "t1": 9.139
   },
   {
    "text": "然後按 Run Script。",
    "target": "li:2",
    "t0": 9.139,
    "t1": 11.586
   },
   {
    "text": "要手動輸入十七列資料，實在太花時間，所以我們用腳本。重點是，你要看懂每個點，帶了哪些資料。",
    "target": "diff",
    "t0": 11.586,
    "t1": 21.96
   }
  ]
 },
 "03-02": {
  "audio": "audio/03-02.mp3",
  "duration": 26.424,
  "segs": [
   {
    "text": "回到 Geometry Nodes 工作區，選取 RB 底線 Demo2。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.581
   },
   {
    "text": "Spreadsheet 選 Original，Mesh，Vertex。",
    "target": "li:1",
    "t0": 4.581,
    "t1": 8.279
   },
   {
    "text": "每一列就是一個點：position 是中心，size 底線 mm 是尺寸，rot 底線 x 底線 deg 是 X 軸的傾角，variant 是款式。",
    "target": "li:2",
    "t0": 8.279,
    "t1": 17.641
   },
   {
    "text": "資料就是點上的屬性，一個點，就是一個構件。之後的節點，只是在讀這些屬性。",
    "target": "diff",
    "t0": 17.641,
    "t1": 26.424
   }
  ]
 },
 "03-03": {
  "audio": "audio/03-03.mp3",
  "duration": 20.64,
  "segs": [
   {
    "text": "選好 RB 底線 Demo2，按 New，加 Instance on Points，Cube 的 Size 填一、一、一。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 7.159
   },
   {
    "text": "Group Input 接 Points，Cube 接 Instance，Instances 接 Group Output。",
    "target": "li:1",
    "t0": 7.159,
    "t1": 12.198
   },
   {
    "text": "還沒有讀屬性之前，兩個方塊都只有一毫米大。位置是對的，可是大小還沒有對。",
    "target": "diff",
    "t0": 12.198,
    "t1": 20.64
   }
  ]
 },
 "03-04": {
  "audio": "audio/03-04.mp3",
  "duration": 17.352,
  "segs": [
   {
    "text": "按 Shift A，搜尋 Named Attribute，資料型態選 Vector，Name 輸入 size 底線 mm。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.378
   },
   {
    "text": "把 Attribute 接到 Instance on Points 的 Scale。",
    "target": "li:1",
    "t0": 6.378,
    "t1": 9.894
   },
   {
    "text": "Named Attribute 是用名字，去讀點上的屬性，名字要跟 Spreadsheet 的欄位，一個字都不能差。",
    "target": "diff",
    "t0": 9.894,
    "t1": 17.352
   }
  ]
 },
 "03-05": {
  "audio": "audio/03-05.mp3",
  "duration": 24.96,
  "segs": [
   {
    "text": "再加一個 Named Attribute，型態選 Float，Name 輸入 rot 底線 x 底線 deg。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.753
   },
   {
    "text": "接到 Combine XYZ 的 X，再接 Euler to Rotation，輸出接到 Instance on Points 的 Rotation。",
    "target": "li:1",
    "t0": 5.753,
    "t1": 12.277
   },
   {
    "text": "這裡是新手最常見的錯誤。Euler to Rotation 要的是弧度，我們的資料是度，所以負十一點六七，被當成負十一點六七弧度，板子就歪到很奇怪的角度。",
    "target": "diff",
    "t0": 12.277,
    "t1": 24.96
   }
  ]
 },
 "03-06": {
  "audio": "audio/03-06.mp3",
  "duration": 20.136,
  "segs": [
   {
    "text": "在 rot 底線 x 底線 deg 和 Combine XYZ 中間，加一個 Math 節點，運算選 To Radians。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.743
   },
   {
    "text": "這樣座板就會往後下傾十一點六七度，背板往後傾二十六點五六五度。",
    "target": "li:1",
    "t0": 6.743,
    "t1": 13.11
   },
   {
    "text": "Blender 的欄位顯示的是度，可是節點裡面，全都是弧度，這是最容易卡住的地方。",
    "target": "diff",
    "t0": 13.11,
    "t1": 20.136
   }
  ]
 },
 "GN04": {
  "audio": "audio/GN04.mp3",
  "duration": 15.888,
  "segs": [
   {
    "text": "第四章，載入十七件的資料。我們要一次載入整張椅子的資料，看到椅子的形狀。",
    "target": "goal",
    "t0": 0.0,
    "t1": 8.201
   },
   {
    "text": "做完之後，要有十七個點，屬性名稱正確，椅子的形狀出現，不過還沒有顏色。",
    "target": "check",
    "t0": 8.201,
    "t1": 15.888
   }
  ]
 },
 "04-01": {
  "audio": "audio/04-01.mp3",
  "duration": 11.592,
  "segs": [
   {
    "text": "在 Scripting 工作區的 Text Editor，打開 make_data 點 py，STAGE 維持 full。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.987
   },
   {
    "text": "按 Run Script，主控台會印出，建立 RB 底線 Chair，十七個點。",
    "target": "li:1",
    "t0": 5.987,
    "t1": 11.592
   }
  ]
 },
 "04-02": {
  "audio": "audio/04-02.mp3",
  "duration": 25.968,
  "segs": [
   {
    "text": "回到 Geometry Nodes 工作區，選取 RB 底線 Chair，Spreadsheet 選 Original，Mesh，Vertex。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 7.12
   },
   {
    "text": "一共十七列。你可以抽查，第十六個是座板，尺寸三百六十、四百五十、十二，角度負十一點六七；第十七個是背板。",
    "target": "li:1",
    "t0": 7.12,
    "t1": 19.047
   },
   {
    "text": "這些數字，都來自你的 004 底線 Material 點 blend，每一件的世界座標尺寸和中心。",
    "target": "diff",
    "t0": 19.047,
    "t1": 25.968
   }
  ]
 },
 "04-03": {
  "audio": "audio/04-03.mp3",
  "duration": 23.28,
  "segs": [
   {
    "text": "選取 RB 底線 Chair，Properties 切到 Modifiers，Add Modifier，Geometry Nodes，Node Group 選 RedBlueChair，就是第三章做好的那個。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 9.581
   },
   {
    "text": "椅子就出現了，十七個灰色的方塊，只是還沒有顏色。",
    "target": "li:1",
    "t0": 9.581,
    "t1": 14.842
   },
   {
    "text": "同一個節點群組，從兩個點換成十七個點，一個節點都不用改。這就是資料驅動。",
    "target": "diff",
    "t0": 14.842,
    "t1": 23.28
   }
  ]
 },
 "GN05": {
  "audio": "audio/GN05.mp3",
  "duration": 18.984,
  "segs": [
   {
    "text": "第五章，方塊款式和 Pick Instance。顏色和黃色端面，由每個點的 variant 一次決定，不用一件一件上色。",
    "target": "goal",
    "t0": 0.0,
    "t1": 9.985
   },
   {
    "text": "做完之後，十七個實例都要正確：紅色背板、藍色座板、黑色框架，黃色端面也在對的位置。",
    "target": "check",
    "t0": 9.985,
    "t1": 18.984
   }
  ]
 },
 "05-01": {
  "audio": "audio/05-01.mp3",
  "duration": 20.256,
  "segs": [
   {
    "text": "先在 Material 分頁，建四個材質：黑、藍、紅、黃，名字照圖上的，數值也照著填。再做一個新的節點群組，Cube 接 Set Material，材質選 RB 底線 Black，輸出接 Group Output。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 16.131
   },
   {
    "text": "先單獨做一款方塊，確認材質有上。",
    "target": "diff",
    "t0": 16.131,
    "t1": 20.256
   }
  ]
 },
 "05-02": {
  "audio": "audio/05-02.mp3",
  "duration": 20.472,
  "segs": [
   {
    "text": "按 Shift A，搜尋 Normal，接到 Separate XYZ。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.477
   },
   {
    "text": "X 接 Math，運算選 Absolute，再接 Compare，型態 Float，Greater Than，B 填零點五。",
    "target": "li:1",
    "t0": 4.477,
    "t1": 11.508
   },
   {
    "text": "法線，就是這個面朝向哪裡。X 的絕對值大於零點五，就是朝向正負 X 的兩個端面。",
    "target": "diff",
    "t0": 11.508,
    "t1": 20.472
   }
  ]
 },
 "05-03": {
  "audio": "audio/05-03.mp3",
  "duration": 19.152,
  "segs": [
   {
    "text": "再加一個 Set Material，材質選 RB 底線 Yellow，Selection 接 Compare 的 Result。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.844
   },
   {
    "text": "它的 Geometry 接前一個 Set Material，輸出接 Group Output。",
    "target": "li:1",
    "t0": 5.844,
    "t1": 10.506
   },
   {
    "text": "Set Material 的 Selection，決定要對哪些面上色。傳統做法要進編輯模式，一面一面去選。",
    "target": "diff",
    "t0": 10.506,
    "t1": 19.152
   }
  ]
 },
 "05-04": {
  "audio": "audio/05-04.mp3",
  "duration": 32.712,
  "segs": [
   {
    "text": "用同樣的做法，做七款：零是全黑，一是正負 X 兩端黃，二是正負 Y 兩端黃，三是頂端黃，四是負 Y 一端黃，五是藍，六是紅。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 12.576
   },
   {
    "text": "再按 Shift A，搜尋 Geometry to Instance，把七款接進去。要由上往下，先連第六款，最後才連第零款。",
    "target": "li:1",
    "t0": 12.576,
    "t1": 22.55
   },
   {
    "text": "Geometry to Instance 的多重輸入，是反向編號，先連的，反而是最後一號。連對了，編號才會是零到六。",
    "target": "diff",
    "t0": 22.55,
    "t1": 32.712
   }
  ]
 },
 "05-05": {
  "audio": "audio/05-05.mp3",
  "duration": 26.496,
  "segs": [
   {
    "text": "加 Instance on Points，Points 接 Group Input，Instance 接 Geometry to Instance。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.818
   },
   {
    "text": "勾選 Pick Instance，Instance Index 接一個 Integer 的 Named Attribute，名字是 variant。",
    "target": "li:1",
    "t0": 5.818,
    "t1": 11.886
   },
   {
    "text": "Rotation 接 Euler to Rotation，Scale 接 size 底線 mm。",
    "target": "li:2",
    "t0": 11.886,
    "t1": 16.313
   },
   {
    "text": "Pick Instance，就是讓每個點，從七款裡面，挑自己的那一款。傳統做法，是十七個物件各自指派材質。",
    "target": "diff",
    "t0": 16.313,
    "t1": 26.496
   }
  ]
 },
 "05-06": {
  "audio": "audio/05-06.mp3",
  "duration": 22.464,
  "segs": [
   {
    "text": "如果顏色錯位，背板和座板變黑，橫桿變藍，柱子變紅，就是連線順序顛倒了。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 7.745
   },
   {
    "text": "把連線拆掉，重新由上往下，先連第六款，最後連第零款。",
    "target": "li:1",
    "t0": 7.745,
    "t1": 13.982
   },
   {
    "text": "這個錯誤，不會有任何警告，只能從畫面看出來。所以下一章，我們要逐項核對。",
    "target": "diff",
    "t0": 13.982,
    "t1": 22.464
   }
  ]
 },
 "GN06": {
  "audio": "audio/GN06.mp3",
  "duration": 18.576,
  "segs": [
   {
    "text": "第六章，整椅驗收。我們要確認做出來的椅子，和原本的檔案一致，也順便認識 Realize Instances。",
    "target": "goal",
    "t0": 0.0,
    "t1": 9.269
   },
   {
    "text": "做完之後，外廓是六百六十乘八百二十三乘八百六十三毫米，有十七個實例，三個視圖的外形也都正確。",
    "target": "check",
    "t0": 9.269,
    "t1": 18.576
   }
  ]
 },
 "06-01": {
  "audio": "audio/06-01.mp3",
  "duration": 15.36,
  "segs": [
   {
    "text": "用滑鼠中鍵拖曳，旋轉視圖，看看整張椅子。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.037
   },
   {
    "text": "紅色的背板往後傾，藍色的座板往後下傾，框架是黑色，黃色的端面，在橫桿、側下桿、前柱和扶手的末端。",
    "target": "li:1",
    "t0": 5.037,
    "t1": 15.36
   }
  ]
 },
 "06-02": {
  "audio": "audio/06-02.mp3",
  "duration": 13.296,
  "segs": [
   {
    "text": "游標在三維視圖，按數字鍵盤一看正視圖，按三看右視圖。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 6.196
   },
   {
    "text": "正視圖的寬度，大約六百六十毫米；右視圖可以清楚看到背板和座板的傾斜。",
    "target": "li:1",
    "t0": 6.196,
    "t1": 13.296
   }
  ]
 },
 "06-03": {
  "audio": "audio/06-03.mp3",
  "duration": 7.824,
  "segs": [
   {
    "text": "按數字鍵盤七，看俯視圖。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 3.644
   },
   {
    "text": "兩側的框架左右對稱，扶手向前伸出。",
    "target": "li:1",
    "t0": 3.644,
    "t1": 7.824
   }
  ]
 },
 "06-04": {
  "audio": "audio/06-04.mp3",
  "duration": 14.4,
  "segs": [
   {
    "text": "游標在三維視圖，按 N，切到 Item 分頁。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.594
   },
   {
    "text": "你會發現，Dimensions 是零毫米。",
    "target": "li:1",
    "t0": 4.594,
    "t1": 8.253
   },
   {
    "text": "這不是錯誤，因為實例不是物件自己的網格，所以物件的 Dimensions 量不到。",
    "target": "diff",
    "t0": 8.253,
    "t1": 14.4
   }
  ]
 },
 "06-05": {
  "audio": "audio/06-05.mp3",
  "duration": 21.48,
  "segs": [
   {
    "text": "按 Shift A，搜尋 Realize Instances，插在 Instance on Points 和 Group Output 中間。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 5.961
   },
   {
    "text": "Dimensions 就變成六百六十、八百二十三、八百六十三毫米。",
    "target": "li:1",
    "t0": 5.961,
    "t1": 11.717
   },
   {
    "text": "這和原檔的外廓一致，欄位只是顯示到整數。需要進編輯模式，或是匯出的時候，才需要實體化。",
    "target": "diff",
    "t0": 11.717,
    "t1": 21.48
   }
  ]
 },
 "06-06": {
  "audio": "audio/06-06.mp3",
  "duration": 16.992,
  "segs": [
   {
    "text": "選取 Realize Instances 節點，按 M 把它停用。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 4.399
   },
   {
    "text": "Spreadsheet 選 Evaluated，Instances，一共十七列。",
    "target": "li:1",
    "t0": 4.399,
    "t1": 9.086
   },
   {
    "text": "平常就保持實例，檔案小，運算也快。要編輯或匯出，才實體化。",
    "target": "diff",
    "t0": 9.086,
    "t1": 16.992
   }
  ]
 },
 "todo": {
  "audio": "audio/todo.mp3",
  "duration": 14.016,
  "segs": [
   {
    "text": "到這裡，第零章到第六章都完成了。還沒有做的，是新手試走，和旁白的人工實聽。",
    "target": "li:0",
    "t0": 0.0,
    "t1": 8.93
   },
   {
    "text": "所以現在，還不能說新手可以完整復刻整張紅藍椅。",
    "target": "li:1",
    "t0": 8.93,
    "t1": 14.016
   }
  ]
 }
};
