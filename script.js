const inputText = document.getElementById('inputText');
const searchBtn = document.getElementById('searchBtn');
const outputCity = document.getElementById('city');
const outputTemp = document.getElementById('temperature');
const outputHumid = document.getElementById('humidity');
const outputDesc = document.getElementById('description');
const outputFeel = document.getElementById('feelslike');
const outputWind = document.getElementById('windspeed');
const outputCountry = document.getElementById('country');




searchBtn.addEventListener('click', async () => {



    const userCity = inputText.value;

    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=dc8249036c24928842f8c8236967c451&units=metric`)


    const data = await fetchData.json();

    document.getElementById('weatherData').style.display = 'block';



    outputCity.innerText = data.name;
    outputTemp.innerText = data.main.temp;
    outputHumid.innerText = data.main.humidity;
    outputDesc.innerText = data.weather[0].description;
    outputFeel.innerText = data.main.feels_like;
    outputWind.innerText = data.wind.speed;
    outputCountry.innerText = data.sys.country;


    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weatherIcon').src = iconUrl;
    console.log(data.main.temp, data.main.humidity, data.weather[0].description,data.main.feels_like);



})










