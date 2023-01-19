const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hour");

function clock() {

console.log('x');
  let second = new Date().getSeconds();
  let minute = new Date().getMinutes();
  let hour = new Date().getHours();

  sec.style.transform = `rotate(${180 + second * 6}deg)`;
  min.style.transform = `rotate(${180 + minute * 6}deg)`;
  hours.style.transform = `rotate(${180 + hour * 30}deg)`;
}

clock();
setInterval(clock, 1000);
