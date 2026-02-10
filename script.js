const image = document.getElementById("mainImage");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;

/* Reaction photos */
const noImages = [
  "no1.png",
  "no2.png",
  "no3.png",
  "no4.jpeg",
  "no5.png"
];

/* Overlay messages */
const noMessages = [
  "ohnoo namali pindot",
  "are you reallyyy sure?",
  "mag yyes na yan si bub bubb",
  "pleasee bub bubb🥺",
  "HMPHH😤"
];

/* Overlay element */
const overlay = document.createElement("div");
overlay.classList.add("overlayText");
document.body.appendChild(overlay);

/* NO click logic */
noBtn.addEventListener("click", () => {

  if (noCount < noImages.length) {

    changePhoto(noImages[noCount]);
    showOverlay(noMessages[noCount]);

    noCount++;

    /* YES grows more each NO */
    let scale = 1 + (noCount * 0.45);
    yesBtn.style.transform = `translateX(-50%) scale(${scale})`;

    /* NO teleports anywhere */
    moveNoButton();

    /* Remove NO on last */
    if (noCount === noImages.length) {
      setTimeout(() => {
        noBtn.style.display = "none";
      }, 600);
    }

  }

});

/* YES click */
yesBtn.addEventListener("click", () => {

  changePhoto("yes.jpeg");

  document.querySelector(".question").innerText =
    "YAYYYYY ❤️ See you on Valentine’s!";
});

/* Photo fade transition */
function changePhoto(newSrc) {

  image.style.opacity = 0;

  setTimeout(() => {
    image.src = newSrc;
    image.style.opacity = 1;
  }, 300);
}

/* Overlay message */
function showOverlay(text) {

  overlay.innerText = text;
  overlay.classList.add("show");

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 1600);
}

/* Teleport NO anywhere */
function moveNoButton() {

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
