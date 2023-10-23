import React, { useEffect, useState } from 'react'
import LogoCM from '../../images/LogoCM1.png'
import burgerMenu from '../../images/icons/burgerMenu.svg'

import './Navbar.css'

function Navbar() {

  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);


  const secciones = [
    { nombre: 'INICIO', id: 'home', className: 'notBorderHome' },
    { nombre: 'NOSOTROS', id: 'about', className: ''},
    { nombre: 'PRODUCTO', id: 'product', className: ''},
    { nombre: 'SERVICIO', id: 'service', className: ''},
    { nombre: 'CONTACTO', id: 'contact', className: ''}
  ];
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navbar = (<div className='dropdown'>
    {secciones.map((seccion) => (
    <p className={seccion.className} key={seccion.id} onClick={() => scrollToSection(seccion.id)}  >
      {seccion.nombre}
    </p>
  ))}
  </div>)

  return (
    <div className='navbar'>
      <img src={LogoCM} alt="" className='logo' onClick={()=>scrollToSection('home')} />
      
      {width < 768 ? (
        <>
          <img src={burgerMenu} alt="Menu" className="burgerMenu" onClick={() => setShow(!show)} />
          {show && navbar}
        </>
      ) : (
        <>{navbar}</>
      )}
      
      
    </div>
  )
}

export default Navbar