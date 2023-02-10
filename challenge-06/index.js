const second = document.querySelector('#seconds');
const minute = document.querySelector("#minutes");
const hour = document.querySelector("#hour");
function setseconds(){
   const now = new Date();
   const seconds = now.getSeconds();
 
document.querySelector("#seconds").innerHTML = seconds;
const mins = now.getMinutes();
document.querySelector("#seconds").innerHTML = mins;

const hours = now.getHours();

document.querySelector("#seconds").innerHTML = hours;

}
setInterval(setseconds(), 1000);