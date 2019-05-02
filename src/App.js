import React, { useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import Geocoder from 'react-geocoder-autocomplete';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const Map = ReactMapboxGl({
  accessToken: API_KEY
});

const App = () => {
  const [mapCenter, setMapCenter] = useState(0);
  const [map, setMap] = useState(0);

  const onSelect = ({ center }) => {
    map.state.map.flyTo({ center });
    setMapCenter(center);
  };

  return (
    <React.Fragment>
      <Geocoder accessToken={API_KEY} onSelect={onSelect} />
      <Map
        style="mapbox://styles/mapbox/outdoors-v10" //eslint-disable-line
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        ref={map => {
          setMap(map);
        }}
      />
    </React.Fragment>
  );
};
export default App;
