import React from 'react'
import wsp from '../../images/icons/wsp.svg'
import mail from '../../images/icons/mail.svg'
import './Links.css'

function Links() {
  return (
    <div className='links'>
        <a target="_blank" href="https://wa.link/d987ps">
            <div className='linkIconDiv'>    
                <img src={wsp} alt="Whatsapp" className='linkIcons'/>
            </div>
        </a>
        <a href="mailto:comercial@cmbroker.com.ar">
            <div className='linkIconDiv'>
                <img src={mail} alt="Correo" className='linkIcons'/>
            </div>
        </a>
    </div>
  )
}

export default Links