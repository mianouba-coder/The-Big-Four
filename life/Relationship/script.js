// 1. Date Night Logic
const dateIdeas = [
  "Visit a local Jazz Club",
  "Go Stargazing with a thermos of hot cocoa",
  "Cook a 3-course meal using only local ingredients",
  "Go to an Arcade and compete for the high score",
  "Take a spontaneous drive to a town you've never visited",
  "Visit a Botanical Garden",
  "Build a blanket fort and watch a 90s movie",
  "Go to a bookstore and pick a book for each other"
];

function generateDate() {
  const display = document.getElementById('date-display');
  const randomIndex = Math.floor(Math.random() * dateIdeas.length);
  display.innerText = dateIdeas[randomIndex];
}

// 2. Milestone Logic (Update the date below to your anniversary)
const anniversaryDate = new Date("2023-01-01T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - anniversaryDate;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  
  document.getElementById('milestone-counter').innerText =
    `${days} Days, ${hours} Hours, and ${mins} Minutes`;
}

setInterval(updateCounter, 1000);
updateCounter();