import { useLoadScript, GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import Venues from '../data/venues.json'
import Venue from '@/types/Venue';

const ApiMap: NextPage = () => {
  const libraries = useMemo(() => ['places'], []);
  const [selected, setSelected] = React.useState<Venue>();

  // This is the location of the hackathon event in Vancouver
  const mapCenter = useMemo(
    () => ({ lat: 49.2847068, lng: -123.1123271 }),
    []
  );

  //this is the toolbar inside maps
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  //check if the script is loaded from useLoadScript function, after that, we load the google maps api key and libraries
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  // if the script didn't load, throw this loading label...
  if (!isLoaded) {
    return <p>Loading...</p>;
  }


  return (
    <GoogleMap
      options={mapOptions}
      zoom={14}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{ width: '500px', height: '500px' }}
      onLoad={() => console.log('Map Component Loaded')}>
      
      
      {
      Venues.map((ven, index) => (
        <MarkerF
          position={{ lat: Number(ven.latitude), lng: Number(ven.longitude) }}
          onLoad={() => console.log('Marker Loaded')} 
          onClick={()=> setSelected(ven)}
          />
      ))
      }

        {selected && (
          <InfoWindowF
            position={{ lat: Number(selected.latitude), lng: Number(selected.longitude) }}
            onCloseClick={() => setSelected(undefined)}
          >
            <div>
              <h2>{selected.name}</h2>
              <p>{selected.address}</p>
            </div>
          </InfoWindowF>
        )}
    </GoogleMap>
  );
};

export default ApiMap;
