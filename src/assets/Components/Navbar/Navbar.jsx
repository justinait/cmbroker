import React from 'react'
import LogoCM from '../../images/LogoCM1.png'
import burgerMenu from '../../images/icons/burgerMenu.svg'

import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={LogoCM} alt="" className='logo'/>
        <img src={burgerMenu} alt="Menu" className='burgerMenu' />
    </div>
  )
}

export default Navbar