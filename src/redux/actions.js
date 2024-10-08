export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const fetchWeatherData = (query) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${query}&appid=dabf9e74498cbfc3dad5f8ea93629653`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    dispatch({ type: SET_WEATHER_DATA, payload: data });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    dispatch({ type: SET_ERROR, payload: error.message }); 
  }
};

export const resetWeatherData = () => {
  return {
    type: SET_WEATHER_DATA,
    payload: null,
  };
};
