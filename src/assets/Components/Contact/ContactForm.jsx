import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import config from '../../../config/config';
import Modal from 'react-bootstrap/Modal';

export const ContactForm = () => {

  const form = useRef();
  const {service_id, template_id, public_id} = config.EMAIL;

  const [btnsubmit, setBtnsubmit] = useState(true);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({
    user_name:{
      value:'',
      error:''
    },
    user_email:{
      value:'',
      error:''
    },
    user_phone:{
      value:'',
      error:''
    },
    message:{
      value:'',
      error:''
    }
  });

  const estilos ={
    color:"red",
    paddingLeft:"25px",
    margin:"0px",
  }

  const handleInputChange = (e) =>{
    setInput(prev=>({
      ...prev,
      [e.target.name]:{
        value:e.target.value,
        error:null
      }
    }));    
  };

  const clearInputValue = () =>{
    setInput({
      user_name:{
        value:'',
        error:''
      },
      user_email:{
        value:'',
        error:''
      },
      user_phone:{
        value:'',
        error:''
      },
      message:{
        value:'',
        error:''
      }
    });    
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [show]);

  const sendEmailForm = (e) => {
    e.preventDefault();
    let stop = false;
    Object.keys(input).forEach(key=>{
      if (input[key].value.trim().length === 0) {
        stop = true;
        setInput(prev=>({
          ...prev,
          [key]:{
            ...prev[key],
            error:'*Este campo es obligatorio'
          }
        }));
      }
    });
    if(stop) return;

    setBtnsubmit(true);
    
    handleShow()
    
    emailjs.sendForm(service_id, template_id, form.current, public_id)
    .then((result) => {
      console.log(result.text);
      
      clearInputValue();
      setBtnsubmit(false);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmailForm} className='formContainer'>
        
        <input type="text" name="user_name" placeholder='Nombre y apellido'  value={input['user_name'] ? input['user_name'].value : ''}  className='inputForm' onChange={handleInputChange} />
        
        <input type="email" name="user_email" placeholder='Email' value={input['user_email'] ? input['user_email'].value : ''} className='inputForm' onChange={handleInputChange} />

        <input type="number" name="user_phone" placeholder='Teléfono / Celular' value={input['user_phone'] ? input['user_phone'].value : ''} className='inputForm' onChange={handleInputChange} />
        
        <textarea name="message" placeholder='Mensaje' value={input['message'] ? input['message'].value : ''} className='inputForm messageForm'  onChange={handleInputChange}/>
        
        <div>
          <input type="submit" value="Enviar" className='formSendButton'/>
        </div>

      </form>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          <p>¡Gracias por tu mensaje!</p>
          <p className='modalText'>Tu formulario se ha enviado con éxito. <br/>
            Te contactaremos en breve.</p>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};