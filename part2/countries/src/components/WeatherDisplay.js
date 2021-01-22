
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const WeatherDisplay = (props) => {

    const {country} = props
    const [weatherData, setWeather] = useState()

    const api_key = process.env.REACT_APP_API_KEY
    let weatherQuery = "http://api.weatherstack.com/current?access_key=" + api_key + "&query=" + country.capital
    
    useEffect(() => {
        axios
            .get(weatherQuery)
            .then(response => {
                setWeather(response.data)
            })
      }, [weatherQuery])

    /* 
    weatherData.current.temperature
    weatherData.current.weather_icons ([])
    weatherData.current.wind_speed
    weatherData.current.wind_dir
    */

    if (weatherData === undefined) {
        return <></>
    } else {
    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p><b>temperature: </b>{weatherData.current.temperature} degrees Celcius</p>
            {weatherData.current.weather_icons.map(icon => {
                return <img key={icon} src={icon} alt='' width={80} height={80} />
            })}
            <p>
                <b>wind: </b>
                {weatherData.current.wind_speed}
                <> mph, direction </> 
                {weatherData.current.wind_dir}
            </p>
        </div>
    )
    }
}

export default WeatherDisplay