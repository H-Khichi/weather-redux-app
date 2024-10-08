import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../ThemeContext';
import clouds from '../images/clouds.png'
import clear from '../images/clear.png'
import rain from '../images/rain.png'
import dizzle from '../images/drizzle.png'
import mist from '../images/mist.png'
import defaultImg from '../images/clear.png'

function WeatherDisplay() {
    const weatherData = useSelector((state) => state.weatherData);
    const { theme } = useContext(ThemeContext);

    let weatherIconSrc = '';

    switch (weatherData.weather[0].main) {
        case "Clouds":
            weatherIconSrc = clouds;
            break;
        case "Clear":
            weatherIconSrc =clear;
            break;
        case "Rain":
            weatherIconSrc = rain;
            break;
        case "Drizzle":
            weatherIconSrc = dizzle;
            break;
        case "Mist":
            weatherIconSrc = mist;
            break;
        default:
            weatherIconSrc = defaultImg; 
            break;
    }
    return (
        <div className={`weather-det ${theme}`}>
            <h3>Weather in {weatherData.name}</h3>
            <div className="img">
                <img src={weatherIconSrc} width={"50%"} alt="" />
                </div>
            <div className="data">
                
                <div className="left-data">
                    <p>{weatherData.main.temp} °C <br />Temperature</p>
                    <hr />
                    <p>{weatherData.main.humidity}% <br />Humidity</p>
                </div>
                <div className="right-data">
                    <p>{weatherData.weather[0].description} <br />Condition</p>
                    <hr />
                    <p>{weatherData.wind.speed} m/s <br />Wind Speed</p>
                </div>
            </div>
        </div>
    );
}

export default React.memo(WeatherDisplay);
