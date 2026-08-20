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
