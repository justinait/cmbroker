import React from 'react'
import './ContactUs.css'
import { ContactForm } from './ContactForm'

function ContactUs() {
  return (
    <div className='contactContainer'>
      <div className='contactOrangeContainer'>
        <h3>CONTACTANOS</h3>
        <h4>Despejá todas tus dudas, cotizaciones, vigencias, <br />packs de productos, o cualquier consulta. </h4>
        <h4 className='subtitleContact'>Estamos para asegurarte</h4>
        
        <h4 className='contactText'>Completá el siguiente formulario y un ejecutivo <br /> se comunicará contigo a la brevedad</h4>
      
        <ContactForm/>

      </div>
    </div>
  )
}

export default ContactUs