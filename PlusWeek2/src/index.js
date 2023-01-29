let now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hour = now.getHours();
let minute = now.getMinutes();
let currentDate = document.querySelector("#current-date-time");
currentDate.innerHTML = `${month}/${day}/${year} ${hour}:${minute}`;
if (hour < 10) {
  hours = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", search);
