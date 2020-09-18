import React, { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const libraries = ['places'];

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 37.774929,
  lng: -122.419418,
};
const mapContainerStyle = {
  width: '50vw',
  height: '100vh',
};

function GoogleMapView(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  const handleMarkerClick = (point) => {
    setSelectedMarker(point);
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      // 13
      center={center}
      options={options}
    >
      {props.data.map((point) => (
        <Marker
          key={point.id}
          onLoad={point.onLoad}
          position={point.position}
          animation={point.animation}
          opacity={point.opacity}
          options={point.options}
          draggable={point.draggable}
          onClick={() => handleMarkerClick(point)}
        ></Marker>
      ))}
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            <h2>{selectedMarker.title}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default GoogleMapView;
