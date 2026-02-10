const image = document.getElementById("mainImage");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;

const noImages = [
  "no1.png",
  "no2.png",
  "no3.png",
  "no4.jpeg",
  "no5.png"
];

noBtn.addEventListener("click", () => {

  if (noCount < noImages.length) {

    image.src = noImages[noCount];
    noCount++;

    /* YES grows aggressively */
    let scale = 1 + (noCount * 0.4);
    yesBtn.style.transform = `translateX(-50%) scale(${scale})`;

    /* Move NO randomly */
    moveNoButton();

    /* Last NO removes button */
    if (noCount === noImages.length) {
      setTimeout(() => {
        noBtn.style.display = "none";
      }, 500);
    }

  }

});

yesBtn.addEventListener("click", () => {

  image.src = "yes.jpeg";

  document.querySelector(".question").innerText =
    "YAYYYYY ❤️ See you on Valentine’s!";

  yesBtn.style.transform = "translateX(-50%) scale(1.4)";
});

/* Random movement */
function moveNoButton() {

  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.clientWidth;
  const maxY = container.clientHeight - noBtn.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
