const image = document.getElementById("mainImage");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;

/* Your exact filenames */
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

    // YES button grows
    let size = 18 + (noCount * 6);
    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = (14 + noCount * 4) + "px " + (28 + noCount * 6) + "px";

  } else {
    triggerYes();
  }

});

yesBtn.addEventListener("click", triggerYes);

function triggerYes() {

  image.src = "yes.jpeg";

  document.querySelector(".question").innerText =
    "YAYYYYY ❤️ See you on Valentine’s!";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

}
