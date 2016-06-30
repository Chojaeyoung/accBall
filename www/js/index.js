'use strict';
(function() {
	document.addEventListener('deviceready', onDeviceReady, false);
})();

function onDeviceReady() {
	console.log("device ready");
	getAcceler();
}


function onSuccess(acceleration) {
	alert('Acceleration X: ' + acceleration.x + '\n' +
			'Acceleration Y: ' + acceleration.y + '\n' +
			'Acceleration Z: ' + acceleration.z + '\n' +
			'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
	alert('onError!');
}

function getAcceler(){
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}
