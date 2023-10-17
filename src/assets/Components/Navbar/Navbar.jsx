import React, { useState } from 'react'
import LogoCM from '../../images/LogoCM1.png'
import burgerMenu from '../../images/icons/burgerMenu.svg'

import './Navbar.css'

function Navbar() {

  const [show, setShow] = useState(false);

  return (
    <div className='navbar'>
      <img src={LogoCM} alt="" className='logo'/>
      <img src={burgerMenu} alt="Menu" className='burgerMenu' onClick={()=>setShow(!show)}/>
      {
        show &&
        <div className='dropdown'>
          <p>INICIO</p>
          <p>NOSOTROS</p>
          <p>PRODUCTO</p>
          <p>SERVICIO</p>
          <p>CONTACTO</p>
        </div>
      }
    </div>
  )
}

export default Navbar