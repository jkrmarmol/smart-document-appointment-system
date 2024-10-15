'use client';
import { Poppins } from 'next/font/google';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '900'],
  subsets: ['latin']
});

const containerStyle = {
  width: '50%',
  height: '400px'
};

const center = {
  lat: 14.6177068,
  lng: 121.1026223
};

export default function Address() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPAPIKEY ?? '',
    version: 'beta'
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      setPosition(position);

      if (marker) {
        marker.setPosition(position);
      } else {
        const newMarker = new google.maps.Marker({
          position,
          map,
          title: 'Selected Location',
          icon: {
            url: '/images/pin-icon.png',
            scaledSize: new google.maps.Size(30.21, 46.56)
          }
        });
        setMarker(newMarker);
      }

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
  console.log({ marker, map, address, position });

  return (
    <>
      <div className="mb-12 mt-4">
        <h3 className={`text-lg font-semibold ${poppins.className}`}>
          Address
        </h3>
        <p
          className={`mb-4 text-sm text-black/30 ${poppins.className} font-medium`}
        >
          Please pin your address
        </p>
      </div>
      <div className="flex h-[50vh] items-start gap-5 space-y-2 overflow-y-auto overflow-x-hidden p-5">
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={handleMapClick}
          />
        )}

        <div>
          <div>
            <label
              className={`text-sm font-medium ${poppins.className} mb-2 opacity-85`}
            >
              Selected Address
            </label>
            <input
              type="text"
              className={`w-full rounded-lg p-3 ${poppins.className} bg-black bg-opacity-[3%] text-sm font-medium text-black/70 focus:outline-none`}
              value={address ?? ''}
            />
          </div>
          <div className="mt-4">
            <label
              className={`text-sm font-medium ${poppins.className} mb-2 opacity-85`}
            >
              Additional Address Details
            </label>
            <textarea
              rows={6}
              className={`w-full rounded-lg p-3 ${poppins.className} bg-black bg-opacity-[3%] text-sm font-medium text-black/70 focus:outline-none`}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
