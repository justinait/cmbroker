import React from 'react'
import './Service.css'
import risks from '../../images/icons/riesgos.svg'
import price from '../../images/icons/costos.svg'
import hands from '../../images/icons/manos.svg'
import assistance from '../../images/icons/asistencia.svg'

function Service() {
  return (
    <div id='service'>
      <h3>NUESTROS SERVICIOS</h3>
      <h4>Disponemos de una amplia gama de productos, adaptables a tus necesidades</h4>

      <div className='serviceCardContainer'>
        <div className='serviceCard'>
          <img src={risks} alt="riesgos" />
          <h4 className='serviceCardText'>Gestionamos<br /> tus riesgos</h4>
        </div>
        <div className='serviceCard'>
          <img src={hands} alt="riesgos" />
          <h4 className='serviceCardText'>Diseñamos coberturas a medida</h4>
        </div>
        <div className='serviceCard'>
          <img src={price} alt="riesgos" />
          <h4 className='serviceCardText'>Garantizamos costos competitivos</h4>
        </div>
        <div className='serviceCard'>
          <img src={assistance} alt="riesgos" />
          <h4 className='serviceCardText'>Brindamos asistencia en caso de siniestro</h4>
        </div>
      </div>
    </div>
  )
}

export default Service