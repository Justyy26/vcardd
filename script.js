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

const noMessages = [
  "ohnoo namali pindot",
  "are you reallyyy sure?",
  "mag yyes na yan si bub bubb",
  "pleasee bub bubb🥺",
  "HMPHH😤"
];

/* Overlay */
const overlay = document.createElement("div");
overlay.classList.add("overlayText");
document.body.appendChild(overlay);

/* NO click */
noBtn.addEventListener("click", () => {

  if (noCount < noImages.length) {

    changePhoto(noImages[noCount]);
    showOverlay(noMessages[noCount]);

    noCount++;

    let scale = 1 + (noCount * 0.45);
    yesBtn.style.transform = `translateX(-50%) scale(${scale})`;

    moveNoButton();

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

  launchConfetti();
});

/* Fade photo */
function changePhoto(src) {

  image.style.opacity = 0;

  setTimeout(() => {
    image.src = src;
    image.style.opacity = 1;
  }, 300);
}

/* Overlay message stays longer */
function showOverlay(text) {

  overlay.innerText = text;
  overlay.classList.add("show");

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 2600); // stays longer now
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

/* ❤️ Confetti Explosion */
function launchConfetti() {

  for (let i = 0; i < 50; i++) {

    const conf = document.createElement("div");
    conf.innerHTML = "💖";

    conf.style.position = "fixed";
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.top = Math.random() * window.innerHeight + "px";
    conf.style.fontSize = "22px";
    conf.style.animation = "confettiFall 1.5s ease forwards";

    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 1500);
  }
}

/* Floating background hearts */
setInterval(() => {

  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);

}, 700);
