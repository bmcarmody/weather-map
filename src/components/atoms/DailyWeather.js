import React from 'react';
import moment from 'moment';
import Skycons from 'react-skycons';

const DailyWeather = props => {
  const day = props.weatherInfo;
  const time = moment.unix(day.time).utc();
  const dotw = time.format('ddd'); // day of the week
  const formattedIconString = day.icon.toUpperCase().replace(/-/g, '_');

  return (
    <div className="dailyWeather">
      <h2 className="dailyWeather__dotw">
        {props.index === 0 ? 'Today' : dotw}
      </h2>
      {props.index === 0 && (
        <div className="dailyWeather__location">{props.location}</div>
      )}
      <div className="dailyWeather__clearFix" />
      <div className="dailyWeather__icon">
        <Skycons icon={formattedIconString} color="white" />
      </div>
      <p className="dailyWeather__summary">{day.summary}</p>
      <p className="dailyWeather__low">
        {Math.round(day.temperatureLow)} &deg;
      </p>
      <p className="dailyWeather__high">
        {Math.round(day.temperatureHigh)} &deg;
      </p>
      <div className="dailyWeather__clearFix" />
    </div>
  );
};

export default DailyWeather;
