import React from 'react';

import Map from '../atoms/Map';
import Sidebar from '../../components/molecules/Sidebar';

const Home = () => {
  return (
    <React.Fragment>
      <Map />
      <Sidebar />
    </React.Fragment>
  );
};

export default Home;
