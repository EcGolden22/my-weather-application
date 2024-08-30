function updateWeatherData(response) {
  let temperatureElement = document.querySelector = ("#app-temp-value");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = math.round(temperature);
}

function citySearch(city) {
  let apiKey = "433f0fed8cd1a00748o3e6b5ta206078";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#app-city");
  cityElement.innerHTML = searchInput.value;
  citySearch(searchInput.value);
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", handleSearch);
