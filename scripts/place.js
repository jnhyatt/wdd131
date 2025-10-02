const temperature = 45;
const condition = "Clear";
const humidity = 45;
const windSpeed = 5;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        return Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
    } else {
        return undefined;
    }
}

function populateWeatherData() {
    document.getElementById("temperature").textContent = `${temperature}°F`;
    document.getElementById("condition").textContent = condition;
    document.getElementById("humidity").textContent = `${humidity}%`;
    document.getElementById("wind-speed").textContent = `${windSpeed} mph`;

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").textContent = windChill !== undefined ? `${windChill}°F` : "N/A";
}

document.addEventListener("DOMContentLoaded", populateWeatherData);
