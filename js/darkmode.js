const mode = document.querySelector(".mode-form");
const mainScreen = document.querySelector(".main-screen");

function changeBackground(event) {
  event.preventDefault();
  mainScreen.classList.toggle("blackmode");

  console.dir(mainScreen.style);
}

mode.addEventListener("click", changeBackground);
