import React from 'react';
import Geocoder from 'react-geocoder-autocomplete';

import { useAppValue } from '../../store/AppContext';
import { movePosition, getWeather } from '../../store/actions/AppActions';

const MAPBOX_API_KEY = `${process.env.REACT_APP_MAPBOX_API_KEY}`;

const GeocoderSearch = () => {
  const [store, dispatch] = useAppValue();

  const onSelect = ({ center, text }) => {
    movePosition(store, center, text)(dispatch);
    getWeather(center)(dispatch);
  };

  return (
    <div className="geocoderSearch">
      <Geocoder
        accessToken={MAPBOX_API_KEY}
        onSelect={onSelect}
        types="place"
      />
    </div>
  );
};

export default GeocoderSearch;
