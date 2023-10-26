import React from 'react'
import './FindUs.css'
import clock from '../../images/icons/clock.svg'
import map from '../../images/icons/map.svg'
import wsp from '../../images/icons/wsp.svg'
import mail from '../../images/icons/mail.svg'

function FindUs() {
  const zoomValue = 100;

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.2403582442394!2d-60.52908728873066!3d-31.73663967400773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44d879bebb2af%3A0x3b85c980693ac9d9!2sLeandro%20N.%20Alem%20366%2C%20Paran%C3%A1%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1697657203652!5m2!1ses-419!2sar&z=${zoomValue}`;

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

      <iframe
        src={mapUrl}
        
        loading="lazy"
        className='mapIframe'
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>  
    </div>
  )
}

export default FindUs