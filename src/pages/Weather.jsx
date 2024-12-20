import axios from 'axios';
import React, { useState } from 'react'

const Weather = () => {
    const [city,setCity]=useState();
    const [weatherData, setWeatherData] = useState();
    const handleCityChange=(e)=>{
  setCity(e.target.value)
    }
    const fetchWeather=async()=>{
        try{
            
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'9ae2200eb82722de0ffc52f3ea098a71'}`)
            setWeatherData(response)
            console.log(response)
        }
        catch(error){
            console.log(error);
        }
    }
    const handleClick=()=>{
        fetchWeather();
    }
  return (
    <div>
      <div className="container "><br />
<input type="text" placeholder='Enter City name' value={city} onChange={handleCityChange} /> <br /><br />
<button onClick={handleClick}>Get weather</button>
{
    weatherData && (<>
    <div>
        <h1>Weather in {weatherData.data.name} is</h1><br />
        <h2>Temperature: {weatherData.data.main.temp}°C</h2>
        <h1>Description:{weatherData.data.weather[0].description}</h1>
    </div>
    </>)
}
      </div>
    </div>
  )
}

export default Weather
