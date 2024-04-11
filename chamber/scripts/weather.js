
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=43.49404&lon=-112.04641&appid=51336e026bec02f17a1f22b744bffa52&units=imperial';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=43.49404&lon=-112.04641&appid=51336e026bec02f17a1f22b744bffa52&units=imperial`;

async function fetchWeatherData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (url === weatherUrl) {
                displayCurrentWeather(data);
            } else if (url === forecastUrl) {
                displayForecast(data);
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetch() {
    await fetchWeatherData(weatherUrl);
    await fetchWeatherData(forecastUrl);
}

apiFetch();

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    const forecastData = data.list.filter((item, index) => index < 3); 
    forecastContainer.innerHTML = '';
    forecastData.forEach(item => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
        forecastItem.innerHTML = `
            <p>Date: ${item.dt_txt.split(' ')[0]}</p>
            <img src="${iconsrc}" alt="${item.weather[0].description}">
            <p>Temperature: ${item.main.temp}&deg;F</p>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}