const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.querySelector('h1'); // Select the <h1> element
let noClicks = 0;

yesBtn.onclick = function () {
  questionText.innerHTML = "Yay, you're my Valentine now! 💖"; // Change the <h1> text
  noBtn.classList.add('no-hide'); // Hide the No button when Yes is clicked
  yesBtn.classList.add('yay-text'); // Optionally make the Yes button more prominent
};

noBtn.onclick = function () {
  noClicks++;
  if (noClicks < 3) {
    // Make the "No" button smaller after each click
    noBtn.classList.add('no-small');
    questionText.textContent = "Are you sure? 💔"; // Change the <h1> text when No is clicked
  } else {
    questionText.textContent = "Don't be shy, just say yes! 😍"; // More encouragement if No is clicked again
  }

  if (noClicks === 5) {
    // After 5 clicks, hide the "No" button and make "Yes" the only visible option
    noBtn.classList.add('no-hide');
    yesBtn.classList.add('yay-text');
    questionText.textContent = "Come on, you know you want to! 💖"; // Final message before Yes takes over
  }
};
