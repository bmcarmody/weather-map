import React from 'react';
import Geocoder from 'react-geocoder-autocomplete';

import { useAppValue } from '../../store/AppContext';
import { movePosition } from '../../store/actions/AppActions';

const MAPBOX_API_KEY = `${process.env.REACT_APP_MAPBOX_API_KEY}`;

const GeocoderSearch = () => {
  const [store, dispatch] = useAppValue();

  const onSelect = ({ center }) => {
    movePosition(store, center);
  };

  return (
    <React.Fragment>
      <Geocoder accessToken={MAPBOX_API_KEY} onSelect={onSelect} />
    </React.Fragment>
  );
};

export default GeocoderSearch;
