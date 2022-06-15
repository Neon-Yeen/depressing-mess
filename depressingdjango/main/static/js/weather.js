//===================================================================
// Weather api
// it has a limit of 1.000.000 request a month, so be carefull !! >:C
//====================================================================

// get request to the weather api, we ask for the current weather in the city of santiago
fetch("http://api.weatherapi.com/v1/current.json?key=601c93169f904ecd99652933221005&q=Santiago&aqi=no")
    .then((response) => response.json())
    .then((data) => renderWeather(data))
    .catch(() => renderError());

// processing and displaying of the data under the index.html page (navbar > clima)
function renderWeather(data) {

    //declaring variables to send input the data nn the index navbar 
    // imgWeather is the <img> tag with the id = weatherimg, in there we show the icon of the climate
    // city is the <div> tag with the id = city, in there we show the city of the weather data
    // temp is the <div> tag with the id = temp, in there we show the temperature in celsius because fahrenheit is for retarded people
    // humidit is  the <div> tag with the id = humd, in there we show the humidity 

    let imgWeather = document.getElementById("weatherimg");
    let city = document.getElementById("city");
    let temp = document.getElementById("temp");
    let humidit = document.getElementById("humd");

    // we split the icon link, for us to take the folder and file name to load it locally (assets/img/weather) because the cdn service is kind of broken
    // the images are corrupted
    urlicon = data.current.condition.icon.split("/");

    var newImg = new Image;
    newImg.onload = function() {
        imgWeather.src = this.src;
    }
    newImg.src = "{% static \"assets/img/" + urlicon[3] + "/" + urlicon[4] + "/" + urlicon[5] + "/" + urlicon[6] + "\"%}";


    // output of the location, temperature and humidity 
    city.innerHTML = data.location.name;
    temp.innerHTML = data.current.temp_c + "°C";
    humidit.innerHTML = "Humd: " + data.current.humidity + "%";
}
// loaded if the get request fails
function renderError() {
    console.log("could not get weather data");
}