// Retrieves weather data via the OpenWeather API
async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city");
        return;
    }

    const apiKey = "OPENWEATHER_FREEAPI_HERE";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const resultDiv = document.getElementById("result");

        if (data.cod == 200) {
            resultDiv.innerHTML = `
                City: ${data.name} <br>
                Temperature: ${data.main.temp}°C <br>
                Weather: ${data.weather[0].description}
            `;
        } else {
            resultDiv.innerHTML = "City not found";
        }

        resultDiv.classList.add("show");

    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data";
    }
}