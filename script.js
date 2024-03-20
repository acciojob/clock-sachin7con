//SGN your JS code here. If required.

let time = document.getElementById("timer");
let am = "AM";

let currentdate = new Date();
if(currentdate.getHours()>12){
	am = "PM";
}else {
	am = "AM";
}
var datetime = currentdate.getMonth() 
+ "/" + currentdate.getDay() + "/" +  currentdate.getFullYear() + ", " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds() + " " + am;
time.innerHTML = datetime;