import React, { useContext, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from './redux/actions';
import { ThemeContext } from './ThemeContext';
import SearchBar from './components/SearchBar';
import ToggleButton from './components/ToggleButton';
import './App.css';

const WeatherDisplay = lazy(() => import('./components/WeatherDisplay'));

function App() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);

  useEffect(() => {
    
  }, [dispatch]);

  return (
    <div className={`app-container ${theme}`}>
      <div className="weather-details">
      <ToggleButton />

        <h1>Weather App</h1>
              <SearchBar />
      {!weatherData ? (
        null
      ) : (
        <Suspense fallback={<div>Loading weather data...</div>}>
          <WeatherDisplay />
        </Suspense>
      )}
      </div>
    </div>
  );
}

export default App;
