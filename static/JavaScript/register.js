var mode = 1;

//JavaScript切换网页背景为模糊背景并显示隐藏的div
function hideDiv() {    
    var divElement = document.getElementById('myDiv');
    divElement.style.display = 'none';//隐藏div
}

//隐藏Div
hideDiv();

//设置键盘监听器
document.addEventListener("keydown",imgChange);
function imgChange(event) {
    if(event.keyCode !== 27&&mode == 1) {
        mode = 2;
        document.body.style.background = "url("+"./Photo/robot2.png"+") no-repeat";
        document.body.style.backgroundSize = "cover";
        var divElement = document.getElementById('myDiv');
        divElement.style.display = 'block';
    }else if(event.keyCode === 27&&mode == 2) {
        mode = 1;
        document.body.style.background = "url("+"./Photo/robot1.png"+") no-repeat";
        document.body.style.backgroundSize = "cover";
        hideDiv();//隐藏Div
    }else if(event.keyCode===13&&mode==2) {document.keySubmit.submit();}
}
//按除去ESC的任意键进入登入界面，按ESC键返回初始界面
//在登录界面按enter登录，按ESC返回初始界面      
