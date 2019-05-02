import axios from 'axios';

const DARK_SKY_API_KEY = `${process.env.REACT_APP_DARK_SKY_API_KEY}`;

export const getWeather = center => dispatch => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${
        center[0]
      },${center[1]}`
    )
    .then(res => console.log(res));
};

export const movePosition = (store, center) => {
  store.map.state.map.flyTo({ center });
};

export const setMap = map => dispatch => {
  dispatch({
    type: 'setMap',
    map
  });
};
