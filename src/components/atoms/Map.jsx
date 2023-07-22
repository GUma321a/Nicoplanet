import React, { useMemo } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function Map() {
  const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
  };
  const containerStyle = {
    width: '100%',
    height: '400px',
  };
  const mapId = 'b6f3fa7d26f4e327';
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_MAPS_KEY,
  });
  const center = useMemo(
    () => ({
      lat: 50.424817,
      lng: 30.5806579,
    }),
    []
  );
  const markers = [
    {
      lat: 50.42949,
      lng: 30.595847,
    },
    {
      lat: 50.424817,
      lng: 30.5806579,
    },
    {
      lat: 50.434903,
      lng: 30.595418,
    },
  ];
  return isLoaded ? (
    <GoogleMap
      id={mapId}
      zoom={13}
      center={center}
      options={defaultOptions}
      mapContainerStyle={containerStyle}
    >
      {markers.map((item) => {
        return <Marker position={item} key={item.id} />;
      })}
    </GoogleMap>
  ) : (
    <div className="text-center">Loaded....</div>
  );
}
