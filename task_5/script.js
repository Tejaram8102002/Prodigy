const weatherIconUrl = "https://openweathermap.org/img/wn/";
const apiKey = "YOUR_API_KEY"; // Replace with your own API key

function getWeatherByLocation(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=<span class="math-inline">\{city\}&appid\=</span>{apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // For debugging
            if (data.cod === "200") {
                displayWeatherInfo(data);
            } else {
                showError("Invalid location entered.");
            }
        })
        .catch(error => {
            console.error(error);
            showError("An error occurred.");
        });
}

function displayWeatherInfo(data) {
    const location = `${data.name}, ${data.sys.country}`;
    const weather = data.weather[0];
    const iconCode = weather.icon;
    const temperature
