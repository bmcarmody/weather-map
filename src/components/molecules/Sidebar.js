import React from 'react';

import { useAppValue } from '../../store/AppContext';
import GeocoderSearch from '../atoms/GeocoderSearch';

import DailyWeather from '../atoms/DailyWeather';

const Sidebar = props => {
  const [store] = useAppValue();

  return (
    <div className="sidebar">
      <GeocoderSearch />
      {store.location ? (
        <React.Fragment>
          <h1 className="sidebar__header font-heading">
            7-Day forecast for: <strong>{store.location}</strong>
          </h1>
          {store.weather &&
            store.weather.map((weatherInfo, index) => (
              <DailyWeather
                weatherInfo={weatherInfo}
                key={index}
                index={index}
              />
            ))}
        </React.Fragment>
      ) : (
        <h1 className="sidebar__empty">
          Search for a city to find out the daily weather
        </h1>
      )}
    </div>
  );
};

export default Sidebar;
