import React, { useState } from 'react'
import LogoCM from '../../images/LogoCM1.png'
import burgerMenu from '../../images/icons/burgerMenu.svg'

import './Navbar.css'

function Navbar() {

  const [show, setShow] = useState(false);
  
  const secciones = [
    { nombre: 'INICIO', id: 'home' },
    { nombre: 'NOSOTROS', id: 'about' },
    { nombre: 'PRODUCTO', id: 'product' },
    { nombre: 'SERVICIO', id: 'service' },
    { nombre: 'CONTACTO', id: 'contact' }
  ];
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <img src={LogoCM} alt="" className='logo' onClick={()=>scrollToSection('home')} />
      <img src={burgerMenu} alt="Menu" className='burgerMenu' onClick={()=>setShow(!show)}/>
      {
        show &&
        <div className='dropdown'>
          {secciones.map((seccion) => (
          <p key={seccion.id} onClick={() => scrollToSection(seccion.id)}>
            {seccion.nombre}
          </p>
        ))}
        </div>
      }
    </div>
  )
}

export default Navbar