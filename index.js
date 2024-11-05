function updateClock() {
  const now = new Date();
  const utcOffset = 5 * 60;
  const localTime = new Date(
    now.getTime() + (utcOffset + now.getTimezoneOffset()) * 60000
  );

  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();
  const seconds = localTime.getSeconds();

  document.getElementById("hours").textContent =
    hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent =
    seconds < 10 ? "0" + seconds : seconds;
}

setInterval(updateClock, 1000);

updateClock();
