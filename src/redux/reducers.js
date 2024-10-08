
const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true, error: null }; 

    case 'SET_WEATHER_DATA':
      return { ...state, weatherData: action.payload, loading: false, error: null };

    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload }; 

    case 'RESET_WEATHER_DATA':
      return { ...initialState }; 

    default:
      return state;
  }
};

export default weatherReducer;
