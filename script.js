const selection = document.querySelectorAll("select");
const currenttime = document.querySelector("h1");
const AlarmBtn = document.querySelector("button");
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
}, 1000);
