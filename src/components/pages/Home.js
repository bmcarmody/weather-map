import React from 'react';

import Map from '../atoms/Map';
import Sidebar from '../../components/molecules/Sidebar';

const Home = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Map />
    </React.Fragment>
  );
};

export default Home;
