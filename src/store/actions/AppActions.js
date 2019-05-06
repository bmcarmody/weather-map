import axios from 'axios';

const DARK_SKY_API_KEY = `${process.env.REACT_APP_DARK_SKY_API_KEY}`;

export const getWeather = center => dispatch => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${
        center[1]
      },${center[0]}`
    )
    .then(res =>
      dispatch({
        type: 'setWeather',
        weather: res.data.daily.data
      })
    );
};

export const movePosition = (store, center, location) => dispatch => {
  store.map.state.map.flyTo({ center });
  dispatch({
    type: 'setPosition',
    position: center
  });
  dispatch({
    type: 'setLocation',
    location
  });
};

export const setMap = map => dispatch => {
  dispatch({
    type: 'setMap',
    map
  });
};
