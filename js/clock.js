// get HTML element
const clockBox = document.querySelector(".clock-box");
const time = document.querySelector(".clock-box__time");
const date = document.querySelector(".clock-box__date");

// AM,PM방식으로 시간, month day, year 형식으로 날짜를 출력하는 함수
function printClock() {
  let clock = new Date();
  const hour = clock.getHours();
  const subMinute = String(clock.getMinutes());
  const minute = subMinute.padStart(2, "0");

  if (hour === 12) {
    time.innerHTML = `${hour}:${minute} PM`;
  } else if (hour > 12 && hour <= 23) {
    time.innerHTML = `${hour - 12}:${minute} PM`;
  } else if (hour === 24) {
    time.innerHTML = `${hour - 12}:${minute} AM`;
  } else if (hour >= 1 && hour <= 11) {
    time.innerHTML = `${hour}:${minute} AM`;
  }
  const year = clock.getFullYear();
  const month = clock.toLocaleString("en-US", { month: "short" });
  const day = clock.getDate();
  date.innerHTML = `${month} ${day}, ${year} `;
}

//시간 출력 함수 주기적으로 실행
printClock();
setInterval(printClock, 1000);
