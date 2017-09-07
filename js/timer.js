/**
 * JS 时间计时器插件
 * author Jon
 * 2017/8/1
 * v 1.0
 */

var second = 0;
var minute = 0;
var hour = 0;
var e_timer;//计时器事件存储器
var n_time;//存储最新时间；
var n_second = 0;//存储最新的时间；

/**
 * 计时器的具体实现
 * @param {Object} id
 */
function timer(id){
	return setInterval(function(){
		var str_sec = second;
		var str_min = minute;
		var str_h = hour;
		console.log("s:"+second);
		console.log("m:"+minute);
		console.log("h:"+hour);
		if(str_sec < 10) {
			str_sec = "0" + second;
		}
		if(str_min < 10) {
			str_min = "0" + minute;
		}

		if(str_h < 10) {
			str_hour = "0" + hour;
		}
		var time = str_hour + ":" + str_min + ":" + str_sec;
		n_time = time;//对最新时间进行存储
		console.log(time);
		document.getElementById(id).innerText = time;
		second += 60;
		if(second > 59) {
			second = 0;
			minute++;
		}
		if(minute > 59) {
			second = 0;
			minute = 0;
			hour++;
		}
		if(hour > 24){
			second = 0;
			minute = 0;
			hour = 0;
		}
	},1000);
}

/**
 * 启动计时器
 * @param {Object} <span id="timer"></span> id 为span 标签id
 */
function startTimer(id) {
	 e_timer = timer(id);
}

/**
 * 停止计时器
 */
function stopTimer() {
	clearTimeout(e_timer)	
}

/**
 * 获取计时器当前时间
 */
function getTime(){
	return n_time;
}

/**
 * 秒的倒计时实现
 * return new second
 */
function secondCountDown(){
	if(n_second <= 0){
		return 0;
	}else {
		n_second--;
		return n_second;
	}
}

/**
 * 显示秒数
 * @param {Object} id <span id="second"></span> id 为span 标签id
 */
function showSecond(id){
	document.getElementById(id).innerText = setSecondPrefix(n_second);
}

/**
 * 为秒添加前缀0 限3位数
 * @param {Object} second
 */
function setSecondPrefix(second){
	switch(true){
		case second>100:
			return second;break;
		case second>=10 && second<100:
			return "0"+second;break;
		case second < 10 && second >= 0 :
			return "00"+second;break;
		default :
			return "000";break;
	}
}

/**
 * 判断一个数的位数
 * @param {Object} num
 */
function jugeDigit(num){
	var count = 1;
	while(num>10){
		num/=10;
		count++;
	}
	return count;
}

/**
 * 启动秒表倒计时器
 * @param {Object} id 显示秒数的容器id
 * @param {Object} startSecond 开始倒计时时的秒数
 */
function startSecondCountDown(id,startSecond){
	n_second = startSecond;
	setInterval(function(){
		secondCountDown();
		showSecond(id);
	},1000);
}
