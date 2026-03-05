function startBreathing() {
  const ball = document.getElementById('ball');
  const text = document.getElementById('instruction');
  const phases = ["Inhale...", "Hold...", "Exhale...", "Hold..."];
  let step = 0;
  
  setInterval(() => {
    text.innerText = phases[step];
    if (step === 0) ball.classList.add('expand');
    if (step === 2) ball.classList.remove('expand');
    step = (step + 1) % 4;
  }, 4000);
}