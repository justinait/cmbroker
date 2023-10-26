import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      
      <input type="text" name="user_name" placeholder='Nombre y apellido'/>
      
      <input type="email" name="user_email" placeholder='Email'/>
      
      <textarea name="message" placeholder='Mensaje' />
      
      <input type="submit" value="Enviar" />
    </form>
  );
};