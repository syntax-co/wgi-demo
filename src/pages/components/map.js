
import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api';



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

    

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_KEY}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
        >
            
            <MarkerF 
            key={location.key}
            position={location.location} />
        
            

        </GoogleMap>
        </LoadScript>
    );
}

export default MapComponent;
