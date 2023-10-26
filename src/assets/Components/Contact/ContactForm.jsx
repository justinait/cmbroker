import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import config from '../../../config/config';

export const ContactForm = () => {
  const form = useRef();

  const {service_id, template_id, public_id} = config.EMAIL;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_id)
    .then((result) => {
      console.log(result.text);
      // aca va success modal
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className='formContainer'>
        
        <input type="text" name="user_name" placeholder='Nombre y apellido' className='inputForm'/>
        
        <input type="email" name="user_email" placeholder='Email' className='inputForm'/>

        <input type="email" name="user_phone" placeholder='Teléfono / Celular' className='inputForm'/>
        
        <textarea name="message" placeholder='Mensaje'  className='inputForm messageForm'/>
        
        <div >
          <input type="submit" value="Enviar" className='formSendButton'/>
        </div>

      </form>
    </div>
  );
};