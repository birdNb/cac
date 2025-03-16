//姿态视窗与其他功能视窗的初始化
function img_init() {
    let img1 = document.getElementById("myImg1");
    img1.style.border = "5px solid red";
    let img2 = document.getElementById("myImg2");
    img2.style.border = "5px solid red";    
}
//初始化
img_init()

//姿态
function carCommand1() {
    let mytxt = document.getElementById("myStatus1").innerHTML = "姿态1";   
    let img = document.getElementById("myImg1");
    img.src="Photo/姿态1.png";
}
function carCommand2() {
    let mytxt = document.getElementById("myStatus1").innerHTML = "姿态2";
    let img = document.getElementById("myImg1");
    img.src = "Photo/姿态2.png";
}
function carCommand3() {
    let mytxt = document.getElementById("myStatus1").innerHTML = "姿态3";
    let img = document.getElementById("myImg1");
    img.src = "Photo/姿态3.png";
}
function carCommand4() {
    let mytxt = document.getElementById("myStatus1").innerHTML = "姿态4";
    let img = document.getElementById("myImg1");
    img.src = "Photo/姿态4.png";
}
//其他功能
function carCommand5() {
    let mytxt = document.getElementById("myStatus2").innerHTML = "上行";
    let img = document.getElementById("myImg2");
    img.src = "Photo/上行.png";
}
function carCommand6() {
    let mytxt = document.getElementById("myStatus2").innerHTML = "下行";
    let img = document.getElementById("myImg2");
    img.src = "Photo/下行.png";
}
function carCommand7() {
    let mytxt = document.getElementById("myStatus2").innerHTML = "启用云台";
    let img = document.getElementById("myImg2");
    img.src = "Photo/启用云台.png";
}
function carCommand8() {
    let mytxt = document.getElementById("myStatus2").innerHTML = "越野步态";
    let img = document.getElementById("myImg2");
    img.src = "Photo/越野步态.png";
}

//键盘监听
document.addEventListener("keydown",carRun);
function carRun(event)
{
    //控制小车的运动
    if(event.keyCode === 87) {alert("W");}
    else if(event.keyCode === 83) {alert("S");}
    else if(event.keyCode === 65) {alert("A");}
    else if(event.keyCode === 68) {alert("D");}
    //控制小车的姿态
    if(event.keyCode === 49) {carCommand1(); }
    else if(event.keyCode === 50) {carCommand2();}
    else if(event.keyCode === 51) {carCommand3();}
    else if(event.keyCode === 52) {carCommand4();}
    else if(event.keyCode === 81) {carCommand5();}
    else if(event.keyCode === 69) {carCommand6();}
    else if(event.keyCode === 70) {carCommand7();}
    else if(event.keyCode === 84) {carCommand8();}  
}