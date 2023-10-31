import React, { useEffect, useState } from 'react'
import LogoCM from '../../images/LogoCM1.png'
import burgerMenu from '../../images/icons/burgerMenu.svg'

import './Navbar.css'

function Navbar() {

  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [activeSection, setActiveSection] = useState(null);

  const updateWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
      window.addEventListener('scroll', handleScroll);
    };
  }, []);


  const secciones = [
    { nombre: 'INICIO', id: 'home', className: 'notBorderHome' },
    { nombre: 'NOSOTROS', id: 'about', className: ''},
    { nombre: 'PRODUCTOS', id: 'product', className: ''},
    { nombre: 'SERVICIOS', id: 'service', className: 'servicioNavbar'},
    { nombre: 'CONTACTO', id: 'contact', className: ''}
  ];
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 8 * window.innerHeight / 100; // Resta 10vh
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };
  
  const handleScroll = () => {
    secciones.forEach((seccion) => {
      const section = document.getElementById(seccion.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top - 11 * window.innerHeight / 100 <= 0 && rect.bottom >= 0) {
          setActiveSection(seccion.id);
        }
      }
    });
  };
  const handleClick =(seccion)=> {
    setShow(false);
    scrollToSection(seccion)
  }

  const navbar = (<div className='dropdown'>
    {secciones.map((seccion) => (
    <p className={` ${seccion.className} ${seccion.id === activeSection ? 'active' : ''}`} key={seccion.id} onClick={() => handleClick(seccion.id)}  >
      {seccion.nombre}
    </p>
  ))}
  </div>)

  return (
    <div className='navbar'>
      <img src={LogoCM} alt="" className='logo' onClick={()=>scrollToSection('home')} />
      
      {width < 640 ? (
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