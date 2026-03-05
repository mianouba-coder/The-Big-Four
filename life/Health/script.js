let timeLeft = 20;
let isWork = true;
let timer;

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      isWork = !isWork;
      timeLeft = isWork ? 20 : 10;
      document.getElementById('status').innerText = isWork ? "🔥 WORK!" : "🧊 REST";
      document.getElementById('status').style.color = isWork ? "#ef4444" : "#4ade80";
    }
    document.getElementById('timer').innerText = timeLeft;
  }, 1000);
}