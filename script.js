"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;

    const imageIndex = Math.min(noCount, MAX_IMAGES);

    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();

    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML =
    "Anh tha lỗi cho em rồi nha 🥺<br>Em hứa sẽ ngoan hơn ạ 😭";

  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(
    computedStyle.getPropertyValue("font-size")
  );

  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không tha đâu",
    "Em biết lỗi rồi mà 😭",
    "Anh tha lỗi cho em đi ạ 🥺",
    "Em sai rồi, em xin lỗi anh 😭",
    "Anh đừng giận em nữa nha 🥹",
    "Em xin lỗi anh nhiều lắm 😭",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);

  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
