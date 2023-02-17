$(function () {
  var allStyle = {
    // font-family: "휴먼둥근헤드라인",
    padding: "0px",
    margin: "0px",
  };
  $("*").css(allStyle);
  $("*").css("font-family", "휴먼모음T");
});

$(function () {
  $(".introduce").css("background-color", "#FFFFCC");
  $(".intro").css("font-size", "50px");
  $(".introduce > ul").css("list-style", "none");
  $(".img").css("width", "70px");
  $(".img").css("height", "70px");
  $(".img").css("border-radius", "10px");
  // $(".medium").prev().css("color", "#3399ff");
  // $(".medium").next().css("color", "#3399ff");
  // $(".medium").prevAll().css("color", "#3399ff");
  // $(".medium").nextAll().css("color", "#3399ff");
  $(".medium").prevUntil(".age").css("color", "#3399ff");
  $(".medium").nextUntil(".t").css("color", "#3399ff");
});
