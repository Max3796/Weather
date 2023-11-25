var apiKey = '1b521e0fe807f73d01a38b289b595f01';
var city = document.getElementById('cityName').value;
document.getElementById('submit').addEventListener('click', () => {
  var city = document.getElementById('cityName').value;
  if (city === '') {
    cityName.innerText = 'Please enter the location';
    country.innerText = '';
    time.innerText = '';
    currTemp.innerText = '';
    currWeather.innerText = '';
    minMax.innerText = '';
  } else {
    getData(city);
  }
});

const currentDate = new Date();
const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const formattedDate = currentDate.toLocaleDateString('en-US', options);

let cityName = document.getElementById('city-name');
let country = document.getElementById('country');
let time = document.getElementById('time');
let currTemp = document.getElementById('currTemp');
let currWeather = document.getElementById('currWeather');
let minMax = document.getElementById('minMax');

async function getData(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await res.json();
    console.log(data);

    var min = Math.floor(data.main.temp_min - 273.15) + '°C';
    var max = Math.floor(data.main.temp_max - 273.15) + '°C';

    cityName.innerText = data.name + ',';
    country.innerText = data.sys.country;
    time.innerText = formattedDate;
    currTemp.innerText = Math.floor(data.main.temp - 273.15) + '°C';
    currWeather.innerText = data.weather[0].description;
    minMax.innerText = min + ' / ' + max;
  } catch (err) {
    console.log(err);
  }
}
