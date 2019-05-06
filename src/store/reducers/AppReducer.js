const AppReducer = (state, action) => {
  switch (action.type) {
    case 'setMap':
      return {
        map: action.map
      };
    case 'setPosition':
      return {
        ...state,
        position: action.position
      };
    case 'setLocation':
      return {
        ...state,
        location: action.location
      };
    case 'setWeather':
      return {
        ...state,
        weather: action.weather
      };
    default:
      return { state };
  }
};

export default AppReducer;
