function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#app-temp-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#app-city");
  let descriptionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#temp-icon");

  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} mph`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function citySearch(city) {
  let apiKey = "433f0fed8cd1a00748o3e6b5ta206078";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  citySearch(searchInput.value);
}

function displayForcast() {
  `<div class="weather-forcast-day">
            <div class="weather-forcast-date">Tue</div>
            <div class="weather-forcast-icon">🌞</div>
            <div class="weather-forcast-temperatures">
              <div class="weather-forcast-temperature">
                <strong>15°</strong>
              </div>
              <div class="weather-forcast-temperature">9°</div>
            </div>
          </div>
          `;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", handleSearch);

citySearch("Philadelphia");
displayForcast();

let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
let forcastHtml = "";

days.forEach(function (day) {
  forcastHtml =
    forcastHtml +
    `<div class="weather-forcast-day">
            <div class="weather-forcast-date">${day}</div>
            <div class="weather-forcast-icon">🌞</div>
            <div class="weather-forcast-temperatures">
              <div class="weather-forcast-temperature">
                <strong>15°</strong>
              </div>
              <div class="weather-forcast-temperature">9°</div>
            </div>
          </div>
          `;
});
let forcastElement = document.querySelector("#forcast");
forcastElement.innerHTML = forcastHtml;
