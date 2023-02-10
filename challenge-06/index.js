const second = document.querySelector('#seconds');
const minute = document.querySelector("#minutes");
const hour = document.querySelector("#hour");
function setseconds(){
   return setInterval(()=>{ const now = new Date();
   const seconds = now.getSeconds();
 
document.querySelector("#seconds").innerHTML = seconds;
const mins = now.getMinutes();
document.querySelector("#minutes").innerHTML = mins;

const hours = now.getHours();

document.querySelector("#hour").innerHTML = hours;

},1000)
}
setseconds()
;