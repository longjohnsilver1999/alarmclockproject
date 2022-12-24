const selection = document.querySelectorAll("select");
const currenttime = document.querySelector("h1");
const AlarmBtn = document.querySelector("button");
const ClearBtn = document.getElementById("cl-b");
const content = document.querySelector(".content");
const displayAlm = document.getElementById("alarm-list");
var gif = document.getElementById("clock");
let alarmTime = [];
let index = 0;
let ringtone = new Audio("./files/Goofy cartoon sounds.mp3");
let isAlarmSet = false;
//creating selections to select time
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selection[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selection[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selection[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
  let ap = i == 1 ? "AM" : "PM";
  let option = `<option value="${ap}">${ap}</option>`;
  selection[3].firstElementChild.insertAdjacentHTML("afterend", option);
}
//msking clock work
setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ap = "AM";

  if (h >= 12) {
    h = h - 12;
    ap = "PM";
  }
  //if hour= 0 then set this value as 12
  h = h == 0 ? (h = 12) : h;
  //adding 0s to single digit values
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  //displaying the clock
  currenttime.innerText = `${h}:${m}:${s} ${ap}`;

  for (let j = 0; j <= index; j++) {
    if (alarmTime[j] === `${h}:${m}:${s} ${ap}`) {
      gif.src = "./files/gfff.gif";
      ringtone.play();
      ringtone.loop = true;
    }
  }
}, 1000);

function setAlarm() {
  //getting exact time value
  let time = `${selection[0].value}:${selection[1].value}:${selection[2].value} ${selection[3].value}`;
  //setting checks for invalid alarms
  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("Seconds") ||
    time.includes("AM/PM")
  ) {
    return alert("enter valid time");
  }
  isAlarmSet = true;
  alarmTime[index] = time;
  index = index + 1;
  //alarmTime = time;
  // content.classList.add("disable");

  var para = document.createElement("p");
  para.innerText = `${selection[0].value}:${selection[1].value}:${selection[2].value} ${selection[3].value}`;
  displayAlm.appendChild(para);
  var btn = document.createElement("button");
  btn.innerHTML = "delete alarm ";
  btn.addEventListener("click", deleteAlarm);
  displayAlm.appendChild(btn);
}

AlarmBtn.addEventListener("click", setAlarm);

function clearAlarm() {
  if (isAlarmSet) {
    alarmTime[index] = alarmTime[index + 1];
    index = index - 1;
    gif.src = "./files/alarm-clock-svgrepo-com.svg";
    ringtone.pause();

    return (isAlarmSet = false);
  }
}
ClearBtn.addEventListener("click", clearAlarm);

function deleteAlarm() {
  displayAlm.removeChild(para);
  displayAlm.removeChild(btn);
}
