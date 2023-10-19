import React from 'react'
import wsp from '../../images/icons/wsp.svg'
import mail from '../../images/icons/mail.svg'
import './Links.css'

function Links() {
  return (
    <div className='links'>
        <div className='linkIconDiv'>
            <img src={wsp} alt="Whatsapp" className='linkIcons'/>
        </div>
        <div className='linkIconDiv'>
            <img src={mail} alt="Correo" className='linkIcons'/>
        </div>
    </div>
  )
}

export default Links