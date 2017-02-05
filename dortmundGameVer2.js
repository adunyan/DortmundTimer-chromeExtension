
//オブジェクトから格納する関数
var dates = [];
var opponents = [];
var hours = [];
var minutes = [];
var imgs = [];
//現在の時間取得
var now = new Date();
var nowMonth = now.getMonth() + 1;
var nowDate = now.getDate();
var nowHour = now.getHours();
var nowMinute = now.getMinutes();
var nowSecond = now.getSeconds();
//計算用
var allMinutes = [];
var nowAllMinutes;
nowAllMinutes = nowDate * 24;//[hour]
nowAllMinutes = (nowAllMinutes + nowHour) * 60 + nowMinute;//[minute]

//表示用
var diff;
var dateLeft;
var hourLeft;
var minuteLeft;
var secondLeft;
var num;

(function(){//今月の試合日程をとりあえず格納
  dates = schedule[nowMonth];
  var datesKey = Object.keys(dates);

  for(var i = 0; i < datesKey.length; i++){
    hours[i] = dates[ datesKey[i] ][0];
    minutes[i] = dates[ datesKey[i] ][1];
    opponents[i] = dates[ datesKey[i] ][2];
    imgs[i] = dates[ datesKey[i] ][3];

    allMinutes[i] = datesKey[i] * 24;//[hour]
    allMinutes[i] = ( allMinutes[i] + hours[i] ) * 60 + minutes[i];//[minute]
    // console.log("次の試合: " + hours[i] + "時" + minutes[i] + "分" + allMinutes[i]);

  }
})();

(function(){//次の試合を判断
  // console.log(nowAllMinutes, allMinutes);
  for(var i = 0; i < allMinutes.length; i++){
    diff = allMinutes[i] - nowAllMinutes;
    // console.log("残り" + diff +　"分");
    if(diff > 0){
      num = i;

      dateLeft = Math.floor( diff / (60 * 24) );
      // console.log(dateLeft + "日");

      diff = diff % (60 * 24);
      hourLeft = Math.floor( diff / 60 );
      // console.log(hourLeft + "時間");

      diff = diff % 60;
      minuteLeft = diff;
      // console.log(minuteLeft + "分");

      // console.log(minuteLeft, hourLeft, dateLeft);
      break;
    }
  }
})();

var eventObj = [];
var eventNum = 0;
var eventMonth = Object.keys(schedule);

for(var i = 0; i < eventMonth.length; i++){
  var eventDate = Object.keys(schedule[ eventMonth[i] ]);
  // console.log(eventDate);
  for(var j = 0; j < eventDate.length; j++){
    eventObj.push(
      {
        "title": "",
        "start": "",
        "img": ""
      }
    );
    eventObj[eventNum].title = schedule[ eventMonth[i] ][ eventDate[j] ][2];
    eventObj[eventNum].start = new Date(2017, eventMonth[i] - 1, eventDate[j]);
    eventObj[eventNum].img = "./image/" + schedule[ eventMonth[i] ][ eventDate[j] ][3];
    eventNum ++;
  }
}

setInterval(function(){
  //現在の時間取得
  now = new Date();
  nowMonth = now.getMonth() + 1;
  nowDate = now.getDate();
  nowHour = now.getHours();
  nowMinute = now.getMinutes();
  nowSecond = now.getSeconds();

  nowAllMinutes = nowDate * 24;//[hour]
  nowAllMinutes = (nowAllMinutes + nowHour) * 60 + nowMinute;//[minute]

  diff = allMinutes[num] - nowAllMinutes;

  dateLeft = Math.floor( diff / (60 * 24) );
  // console.log(dateLeft + "日");

  diff = diff % (60 * 24);
  hourLeft = Math.floor( diff / 60 );
  // console.log(hourLeft + "時間");

  diff = diff % 60;
  minuteLeft = diff;
  // console.log(minuteLeft + "分");

secondLeft = 60 - nowSecond;

  if(dateLeft < 10) dateLeft = "0" + dateLeft;
  if(hourLeft < 10) hourLeft = "0" + hourLeft;
  if(minuteLeft < 10) minuteLeft = "0" + minuteLeft;
  if(secondLeft < 10) secondLeft = "0" + secondLeft;

  //描画処理
  var dateElement = document.getElementById("date");
  var hourElement = document.getElementById("hour");
  var minuteElement = document.getElementById("minute");
  var secondElement = document.getElementById("second");


  dateElement.innerHTML = dateLeft;
  hourElement.innerHTML = hourLeft;
  minuteElement.innerHTML = minuteLeft;
  secondElement.innerHTML = secondLeft;

}, 1000);
