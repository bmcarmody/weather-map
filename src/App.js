import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYmNhcm1vZHkxNiIsImEiOiJjanN5MHBvMTEwa2ttM3lxeDI3d2VsMDBhIn0.UnU1G3ujwJpEa7ONbpezQg'
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
