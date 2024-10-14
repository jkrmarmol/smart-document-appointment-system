'use client';
import { X } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

const containerStyle = {
  width: 'auto',
  height: '400px'
};

const center = {
  lat: 14.6177068,
  lng: 121.1026223
};

export default function Address() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC3nQSgdqBY1jLrWrEVDaJtJKgzc9xeEVU'
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [markerPosition, setMarkerPosition] =
    React.useState<google.maps.LatLngLiteral | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  const handleMapClick = async (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      setMarkerPosition(position);

      // Fetch address using Geocoding API
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: position }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          setAddress('Address not found');
        }
      });
    }
  };

  console.log({ markerPosition, address });

  return (
    <>
      <div className="mb-12 mt-4">
        <h3 className={`text-lg font-semibold ${poppins.className}`}>
          Address
        </h3>
        <p
          className={`mb-4 text-xs text-black opacity-60 ${poppins.className}`}
        >
          Please verify your order before you proceed
        </p>
      </div>
      <div className="space-y-2">
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={1000}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={handleMapClick}
          >
            {markerPosition && <Marker position={markerPosition} />}
          </GoogleMap>
        )}
      </div>
    </>
  );
}
