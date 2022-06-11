// login screen
const loginScreen = document.querySelector(".login-screen");
const loginForm = document.querySelector(".login-form");
const input = loginForm.querySelector("input");

// main screen
const contentRight = document.querySelector(".main-box .content-right");
const greeting = contentRight.querySelector(".greeting");
const logoutForm = contentRight.querySelector(".btn .logout-form");

//hidden classname variable
const HIDDEN_CLASS = "hidden";

const handleAccess = {
  login: function (event) {
    event.preventDefault();
    const h1 = document.createElement("h1");
    const name = input.innerText;
    h1.innerText = "Hi, " + name;
    greeting.appendChild(h1);
    loginScreen.classList.add(HIDDEN_CLASS);
  },
  logout: function (event) {
    event.preventDefault();
    const h1 = greeting.querySelector("h1");
    loginScreen.style.remove(HIDDEN_CLASS);
  },
};

loginForm.addEventListener("submit", handleAccess.login);
logoutForm.addEventListener("submit", handleAccess);
