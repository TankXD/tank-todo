const API_KEY = "18df5b74ddb589bf8f9c31b7f1a757c1";

const summaryBox = document.querySelector(".weather-box__summary");
const temper = document.querySelector(".weather-box__temper");
const address = document.querySelector(".weather-box__address");

function onLocationOk(postion) {
  const lat = postion.coords.latitude; //위도
  const lon = postion.coords.longitude; //위도
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const img = document.createElement("img");
      img.src = weatherIcon;
      summaryBox.appendChild(img);

      temper.innerText = `${data.main.temp}°C`;
      address.innerText = `${data.sys.country}, ${data.name}`;
    });
}

function onLocationError(error) {
  alert("I can't find your location.  Unable to provide weather information.");
}

navigator.geolocation.getCurrentPosition(onLocationOk, onLocationError);
