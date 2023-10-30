import React from 'react'
import './FindUs.css'
import clock from '../../images/icons/clock.svg'
import map from '../../images/icons/map.svg'
import wsp from '../../images/icons/wsp.svg'
import mail from '../../images/icons/mail.svg'

import { GoogleMap, useLoadScript, Marker, LoadScript, useJsApiLoader } from '@react-google-maps/api';

function FindUs() {


  const { isLoaded } = useJsApiLoader({
    id: 'f5959e89199c6139',
    googleMapsApiKey: import.meta.env.VITE_API_MAPSKEY
  })

  return (
    <div className='findContainer'>
      <h3>ENCONTRANOS</h3>
      
      <div className='findCardContainer'>
        <div className='findCard'>
          <img src={wsp} alt="Whatsapp" />
          <p className='findCardText'>+54 343 447 5818</p>
        </div>
        <div className='findCard'>
          <img src={mail} alt="Mail" />
          <p className='findCardText'>comercial@cmbroker.com.ar</p>
        </div>
        <div className='findCard'>
          <img src={map} alt="Ubicación" />
          <p className='findCardText'>Alem 366 - Paraná</p>
        </div>
        <div className='findCard'>
          <img src={clock} alt="Reloj" />
          <p className='findCardText'>Lun a Vie 8:00 a 17:00 hs</p>
        </div>
      </div>


      {isLoaded && 
        <GoogleMap 
          zoom={15}
          center={{ lat: -31.736457, lng: -60.526539 }}
          mapContainerClassName='mapContainer'
          mapId='f5959e89199c6139'
        >
          <Marker 
          position={{ lat: -31.736457, lng: -60.526539 }} 
          icon={{
            url: 'https://i.ibb.co/0svpbyr/marker.png'
          }}
          />
        </GoogleMap>
      }
          
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8cRrh5YFeJfMpcn6-XCV2we7GdZ9hPxA&callback=initMap&map_ids=f5959e89199c6139" defer></script>
    </div>
  )
}

export default FindUs