// login screen
const loginScreen = document.querySelector(".login-screen");
const loginForm = document.querySelector(".login-form");
const input = document.querySelector(".login-form__text");

// main screen
const contentRight = document.querySelector(".main-box .content-right");
const greeting = document.querySelector(".greeting");
const h1 = document.querySelector(".greeting h1");
const logoutForm = document.querySelector(".logout-form");

//hidden classname variable
const HIDDEN_CLASS = "hidden";

//name
const localName = localStorage.getItem("name");

if (localStorage.getItem("name") === null) {
  loginScreen.classList.remove(HIDDEN_CLASS);
} else {
  h1.innerText = `Hi, ${localName}`;
}

const handleAccess = {
  login: function (event) {
    event.preventDefault();

    const name = input.value;
    h1.innerText = "Hi, " + name;
    greeting.prepend(h1);
    localStorage.setItem("name", name);
    input.value = "";

    greeting.classList.remove(HIDDEN_CLASS);
    loginScreen.classList.add(HIDDEN_CLASS);
  },
  logout: function (event) {
    event.preventDefault();
    const h1 = document.querySelector(".greeting h1");
    h1.innerText = "";
    localStorage.removeItem("name");
    greeting.classList.add(HIDDEN_CLASS);

    loginScreen.classList.remove(HIDDEN_CLASS);
  },
};

loginForm.addEventListener("submit", handleAccess.login);
logoutForm.addEventListener("submit", handleAccess.logout);
