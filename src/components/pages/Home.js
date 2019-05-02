import React from 'react';

import Map from '../atoms/Map';
import GeocoderSearch from '../atoms/GeocoderSearch';

const Home = () => {
  return (
    <React.Fragment>
      <GeocoderSearch />
      <Map />
    </React.Fragment>
  );
};

export default Home;
