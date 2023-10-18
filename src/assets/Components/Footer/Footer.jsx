import React from 'react'
import './Footer.css'
import logoFooter from '../../images/LogoCMfooter.png'
import logoSSNFooter from '../../images/LogoSSNfooter.png'
import qr from '../../images/qrfooter.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='logoFooterContainer'>
            <img src={logoFooter} alt="CMBROKER" className='logoFooter' />
            <h4 className='logoFooterText'>30 años respondiendo por vos</h4>
        </div>
        <div className='rightFooter'>
            <div>
                <img src={logoSSNFooter} alt="" className='logoSSNFooter' />
                <p className='ssntext'>Matrícula: 050320 | SSN: 4338-4000 o <br /> 0800-666-8400 | www.ssn.gob.ar</p>
            </div>
            <div>
                    
                <img src={qr} alt="" width={29} height={29}/>
                <p className='qrtext'>Data Fiscal</p>
            </div>
        </div>
    </div>
  )
}

export default Footer