
import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF, useJsApiLoader} from '@react-google-maps/api';



const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 42.00770056437709,
  lng: -87.66753522008673
};

const location = {
    key: 'Weird Girl Ink', location: { lat: 42.00770056437709, lng: -87.66753522008673}
}





function MapComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY_TEST
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
            <MarkerF 
        key={location.key}
        position={location.location} />
        </GoogleMap>
    ) : <></>
  }

export default MapComponent;
