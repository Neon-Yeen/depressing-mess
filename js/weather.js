fetch("http://api.weatherapi.com/v1/current.json?key=601c93169f904ecd99652933221005&q=Santiago&aqi=no")
    .then((response) => response.json())
    .then((data) => renderWeather(data))
    .catch(() => renderError());

function renderWeather(data) {
    let imgWeather = document.getElementById("weatherimg");
    let city = document.getElementById("city");
    let temp = document.getElementById("temp");
    let humidit = document.getElementById("humd");

    urlicon = data.current.condition.icon.split("/");

    var newImg = new Image;
    newImg.onload = function() {
        imgWeather.src = this.src;
    }
    newImg.src = "assets/img/" + urlicon[3] + "/" + urlicon[4] + "/" + urlicon[5] + "/" + urlicon[6];


    city.innerHTML = data.location.name;
    temp.innerHTML = data.current.temp_c + "°C";
    humidit.innerHTML = "Humd: " + data.current.humidity + "%";
}

function renderError() {
    console.log("could not get weather data");
}