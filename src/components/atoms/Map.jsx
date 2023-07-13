import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const mapId = 'b6f3fa7d26f4e327';

const center = {
  lat: 38.6696089513444,
  lng: -121.30618529030217,
};

const markers = [
  {
    lat: 38.66960895134448,
    lng: -121.32154898353947,
  },
  {
    lat: 38.6596902908238,
    lng: -121.30781607338322,
  },
  {
    lat: 38.67751608816621,
    lng: -121.29442648598088,
  },
  {
    lat: 38.67148530013458,
    lng: -121.2848134488715,
  },
  {
    lat: 38.6536580011981,
    lng: -121.2822385282172,
  },
];

export default function Map() {
  const API_KEY = process.env.REACT_APP_API_MAPS_KEY;

  return (
    <div className="my-md">
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} id={mapId}>
          <Marker position={markers} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
