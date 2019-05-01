import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const Map = ReactMapboxGl({
  accessToken: API_KEY
});

const App = () => {
  return (
    <React.Fragment>
      <Map
        style="mapbox://styles/mapbox/outdoors-v10" //eslint-disable-line
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </React.Fragment>
  );
};

export default App;
