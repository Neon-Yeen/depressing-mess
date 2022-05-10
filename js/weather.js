fetch("http://api.weatherapi.com/v1/current.json?key=601c93169f904ecd99652933221005&q=Santiago&aqi=no")
    .then((response) => response.json())
    .then((data) => renderWeather(data))
    .catch(() => renderError());

function renderWeather(data) {

    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const humidit = document.getElementById("humd");

    city.innerHTML = data.location.name;
    temp.innerHTML = data.current.temp_c + "°C";
    humidit.innerHTML = "Humd: " + data.current.humidity + "%";
}

function renderError() {
    console.log("coud not get weather data");
}