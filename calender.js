
$('#calendar').fullCalendar({
  events: eventObj,
  eventRender: function(events, element) {

    // １．追加するノードを作成（必要に応じて高さ等の属性を設定）
    // var addNode = document.createElement("img");
    // addNode.setAttribute("src", [画像のパス]);
    // addNode.setAttribute("height", "16");
    // // とりあえず追加する場合
    // for (var i = 0, len = element.context.childNodes.length; i < len; i++) {
    //   if (element.context.childNodes[i].className == 'fc-content') {
    //         element.context.childNodes[i].appendChild(addNode);
    //   }
    // }
    // // タイトルの直後に追加する場合
    // for (var i = 0, len = element.context.childNodes.length; i < len; i++) {
    //   if (element.context.childNodes[i].className == 'fc-content') {
    //     for (var j = 0, len = element.context.childNodes[i].childNodes.length; j < len; j++) {
    //       if (element.context.childNodes[i].childNodes[j].className == 'fc-title') {
    //           element.context.childNodes[i].childNodes[j].appendChild(addNode);
    //       }
    //     }
    //   }
    // }

    if(events.img){
      console.log($(element));
      $(element)  //imgプロパティが存在するイベントだけtitleを画像に差し替え
  		.css({
        "border-color": "transparent",
        "background-color": "transparent"
      })
  		.html('<img class="photo"  src="' + events.img + '" width="40px" height="40px" />');
      // console.log(events);
    }
  }
});
