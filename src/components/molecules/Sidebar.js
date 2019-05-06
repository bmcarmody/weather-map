import React from 'react';

import { useAppValue } from '../../store/AppContext';
import GeocoderSearch from '../atoms/GeocoderSearch';

import DailyWeather from '../atoms/DailyWeather';

const Sidebar = () => {
  const [store, dispatch] = useAppValue();

  return (
    <div className="sidebar">
      <GeocoderSearch />
      {store.location ? (
        <React.Fragment>
          <h1>Weather for {store.location}</h1>
          {store.weather &&
            store.weather.map((weatherInfo, index) => (
              <DailyWeather weatherInfo={weatherInfo} key={index} />
            ))}
        </React.Fragment>
      ) : (
        <h1>Search for a city to find out the daily weather</h1>
      )}
    </div>
  );
};

export default Sidebar;
