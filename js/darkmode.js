const mode = document.querySelector(".mode-form");
const mainScreen = document.querySelector(".main-screen");

const quoteTitle = document.querySelector(".quote-box__title");
const quoteTxt = document.querySelector(".quote-box__text");
const quoteBtn = document.querySelector(".quote-box__language");

function changeBackground(event) {
  event.preventDefault();
  mainScreen.classList.toggle("darkmode");
  quoteTitle.classList.toggle("white-font");
  quoteTxt.classList.toggle("white-font");
  quoteBtn.classList.toggle("white-font");
}

mode.addEventListener("click", changeBackground);
