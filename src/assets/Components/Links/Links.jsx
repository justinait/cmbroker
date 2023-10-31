import React, { useEffect, useState } from 'react'
import wsp from '../../images/icons/wsp.svg'
import mail from '../../images/icons/mail.svg'
import wsphover from '../../images/icons/wsphover.svg'
import mailhover from '../../images/icons/mailhover.svg'
import './Links.css'

function Links() {
    const [isFixed, setIsFixed] = useState(true);
  
    useEffect(() => {
        const footerHeight = 170; // Altura de tu footer
        const handleScroll = () => {
          if (window.scrollY + window.innerHeight >= document.body.scrollHeight - footerHeight) {
            // Detén los íconos antes de que lleguen al footer
            setIsFixed(false);
          } else {
            setIsFixed(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const socialIconsStyle = {
        position: isFixed ? 'fixed' : 'absolute',
        bottom: isFixed ? '60px' : 'auto',
        right: isFixed ? '17px' : 'auto',
    };
  return (
    <div className='links' style={socialIconsStyle}>
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