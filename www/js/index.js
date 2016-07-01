'use strict';
(function() {
	document.addEventListener('deviceready', onDeviceReady, false);
	window.addEventListener("orientationchange", function(){
		console.log("changeOrientation");
//        window.screen.lockOrientation('landscape-primary');
	});
    document.getElementById('ball').addEventListener('touchstart', touchBall, false);
    document.getElementById('ball').addEventListener('click', clickBall, false);
//    $('#ball').bind("touchstart",touchBall);
//    $('#ball').on("clcick",clickBall);
 })();



var interval,
    ball_x,
    ball_y;

function onDeviceReady() {
    console.log("device ready");
    interval = setInterval(getAcceler,100);
//    window.screen.lockOrientation('landscape-primary');
    window.screen.lockOrientation('portrait');
	//왜 가로방향 하나로 고정되지 않는 것인가..? 
	//그리고 phonegap 앱으로 동작시키면 landscape로 고정도 안된다.
}

function touchBall() {
    alert("Ball touch");
}
function clickBall() {
    alert("Ball click");
}


function onSuccess(acceleration) {
    var ball = $('#ball'),
        x = ball[0].style.left,
        y = ball[0].style.top;
    
	x = x.split("px");
	y = y.split("px");
    
//  console.log(acceleration.x);
//	console.log(acceleration.y);
    
	var accel_x = parseInt(-acceleration.x)*10,
        accel_y = parseInt(acceleration.y)*10;
	var tmp_x = (Number(x[0]) + Number(accel_x)),
        tmp_y = (Number(y[0]) + Number(accel_y));

	if(tmp_x < (window.innerWidth-50) && tmp_x > 20) {
		tmp_x = tmp_x + "px";
    	ball.css("left",tmp_x);
	}

	if(tmp_y < (window.innerHeight-30) && tmp_y > 10) {
		tmp_y = tmp_y + "px";
    	ball.css("top",tmp_y);
	}
}

function onError() {
    alert('onError!');
}

function getAcceler(){
    //console.log("call getAcceler func");
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}
