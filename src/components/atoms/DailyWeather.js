import React, { useEffect } from 'react';
import moment from 'moment';
import Skycons from 'react-skycons';

const DailyWeather = props => {
  const day = props.weatherInfo;
  const time = moment.unix(day.time).utc();
  const dotw = time.format('dddd, MMMM D'); // day of the week
  const formattedIconString = day.icon.toUpperCase().replace(/-/g, '_');

  return (
    <div>
      <Skycons icon={formattedIconString} />
      <h2>{dotw}</h2>
      <p>Summary: {day.summary}</p>
      <p>
        Sunrise:{' '}
        {moment
          .unix(day.sunriseTime)
          .utc()
          .local()
          .format('h:mm a')}
      </p>
      <p>
        Sunset:{' '}
        {moment
          .unix(day.sunsetTime)
          .utc()
          .local()
          .format('h:mm a')}
      </p>
      <p>High: {Math.round(day.temperatureHigh)} &#8457;</p>
      <p>Low: {Math.round(day.temperatureLow)} &#8457;</p>
    </div>
  );
};

export default DailyWeather;
