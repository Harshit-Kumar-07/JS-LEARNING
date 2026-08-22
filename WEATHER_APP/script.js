const apiKey = `cdae5f1dc6c0980d7f72bdbdba54f10a`
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`


let searchBox = document.querySelector('#search input')
let searchIcon = document.getElementById('search_icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data);   
    
    if(response.status == 404){
        document.querySelector('#city_name').innerHTML = `INVALID CITY NAME`
        document.querySelector('#temperature').innerHTML = `--`
    }else{
        document.querySelector('#city_name').innerHTML = `${data.name}`
        document.querySelector('#temperature').innerHTML = `${data.main.temp}°C`

        if(data.weather[0].main == 'Clouds')document.getElementById('weather_image').src = 'IMAGES/cloudy.png'
        if(data.weather[0].main == 'Clear')document.getElementById('weather_image').src = 'IMAGES/clear_cloud.jpg'
        if(data.weather[0].main == 'Rain')document.getElementById('weather_image').src = 'IMAGES/rain.png'
        if(data.weather[0].main == 'Drizzle')document.getElementById('weather_image').src = 'IMAGES/drizzle.png'
        if(data.weather[0].main == 'Mist')document.getElementById('weather_image').src = 'IMAGES/mist.png'

    }

    
}

searchIcon.addEventListener('click',function(){
    checkWeather(searchBox.value)
})


let theme = "light"


document.getElementById('theme')
.addEventListener('click',function(){
    if(theme=="light"){
        document.getElementById('card').style.background = 'linear-gradient(90deg, #121216 0.000%, #121216 7.692%, #16171a calc(7.692% + 1px), #16171a 15.385%, #1a1b1f calc(15.385% + 1px), #1a1b1f 23.077%, #1f2023 calc(23.077% + 1px), #1f2023 30.769%, #232427 calc(30.769% + 1px), #232427 38.462%, #27282b calc(38.462% + 1px), #27282b 46.154%, #2b2c2f calc(46.154% + 1px), #2b2c2f 53.846%, #2f3033 calc(53.846% + 1px), #2f3033 61.538%, #323337 calc(61.538% + 1px), #323337 69.231%, #36373a calc(69.231% + 1px), #36373a 76.923%, #38393d calc(76.923% + 1px), #38393d 84.615%, #3b3c40 calc(84.615% + 1px), #3b3c40 92.308%, #3d3e42 calc(92.308% + 1px) 100.000%)'
        document.getElementById('theme').innerHTML = '<img src="IMAGES/sun.png">'
        theme = "dark"
    }
    else {
        document.getElementById('card').style.background = 'linear-gradient(45deg, #4159d0 0.000%, #c84fc0 50.000%, #ffcd70 100.000%)'
        document.getElementById('theme').innerHTML = '<img src="IMAGES/moon.png">'
        theme = "light"
    }
})