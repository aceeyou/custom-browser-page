import React, { useEffect, useState} from 'react'
import "../App.css";
import "../default.css"

export default function Header() {

    // Weather API Key = 1bdebbd5339f4cbe976110401231207
    const [weather, setWeather] = useState({})
    const [weatherTooltip, setWeatherTooltip] = useState(false)

    useEffect(() => {
        fetchWeather()
    })

    const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    const getDateNow = () => {
        let dateNow = new Date()
        return `${DAYS[dateNow.getDay()]}, ${MONTH[dateNow.getMonth()]} ${dateNow.getDate()}, `
    }

    const fetchWeather = () => {
        try {
            fetch('https://api.weatherapi.com/v1/current.json?key=1bdebbd5339f4cbe976110401231207&q=Philippines&aqi=yes', {
                method: "GET"
            })
            .then(res => res.json())
            .then(data => {
                setWeather(data.current)
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <header className='App-Header'>
            <h1 className='header-logo'>Ace Logronio</h1>
            <div className='App-Header-Date-Weather'>
                <p className='Date-Weather-Text'>{getDateNow()}</p>
                <div className='weather-information'>
                    <p className='weather-temperature'>{weather.temp_c}°C</p>
                    <img className='weather-icon' src={weather.condition.icon} onMouseOver={() => setWeatherTooltip(true)} onMouseOut={() => setWeatherTooltip(false)}/>
                    {
                        weatherTooltip ? 
                        (
                            <div className='weather-tooltip'>
                                <p>{weather.condition.text}</p>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </header>
    )
}
