import React from 'react'
import wsp from '../../images/icons/wsp.svg'
import mail from '../../images/icons/mail.svg'
import wsphover from '../../images/icons/wsphover.svg'
import mailhover from '../../images/icons/mailhover.svg'
import './Links.css'

function Links() {
  return (
    <div className='links'>
        <a target="_blank" href="https://wa.link/d987ps">
            <div className='linkIconDiv'>    
                <img src={wsp} alt="Whatsapp" className='linkIcons'/>
                <img src={wsphover} alt="Whatsapp" className='linkIconsHover'/>
            </div>
        </a>
        <a href="mailto:comercial@cmbroker.com.ar" target='_blank'>
            <div className='linkIconDiv'>
                <img src={mail} alt="Correo" className='linkIcons'/>
                <img src={mailhover} alt="Correo" className='linkIconsHover'/>
            </div>
        </a>
    </div>
  )
}

export default Links