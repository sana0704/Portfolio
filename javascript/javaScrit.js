var boxes = document.getElementsByClassName("box");
console.log(boxes);

var date = new Date();
console.log(date);
var res1 = "Today's day : <br />" +date.getDate();

// document.writeln(res1);
boxes[0].innerHTML=res1;

var hour = new Date();
var res2 = hour.getHours();
boxes[1].innerHTML=res2;

var mins = new Date();
var res3 = mins.getMinutes();
boxes[2].innerHTML=res3;

var sec = new Date();
var res4 = sec.getSeconds();
boxes[3].innerHTML=res4;