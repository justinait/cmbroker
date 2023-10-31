import React from 'react'
import aboutPhoto from '../../images/about-min.png'
import Accordion from 'react-bootstrap/Accordion';
import './About2.css'

function About2() {
  return (
    <div>
        
        <img src={aboutPhoto} alt="" className='about2Image' />

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header> <h4 className='iconPlus'>+</h4> <h4 className='accordionTitle'>Misión</h4> </Accordion.Header>
                <Accordion.Body>
                    <p className='accordionText'>
                        Brindar <strong>tranquilidad y seguridad</strong> <br className='mobileBreak'/>
                        financiera a <br className='tabletBreak'/>
                        nuestros clientes actuales <br className='mobileBreak'/>
                        y <br className='desktopBreak'/>
                         potenciales, guiándolos <br className='tabletBreak'/>
                         hacia las <br className='mobileBreak'/>
                        opciones que <strong> mejor se adapten a sus <br/>
                        necesidades</strong> en ámbitos de seguros, <br className='mobileBreak'/>
                        finanzas y <br className='tabletBreak'/>
                        salud; y ofreciendo un <br className='mobileBreak'/>
                        servicio <br className='desktopBreak'/>
                         insuperable de <br className='tabletBreak'/>
                        <strong> asesoramiento <br className='mobileBreak'/>
                        y gestión de cobros y reclamos.</strong>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> <h4 className='iconPlus'>+</h4><h4 className='accordionTitle'>Visión</h4> </Accordion.Header>
                <Accordion.Body>
                <p className='accordionText'>
                    Aspiramos al <strong> liderazgo regional</strong>, <br className='mobileBreak'/>
                    en los  <br className='tabletBreak'/>
                    segmentos empresas y  <br className='mobileBreak'/>
                    personas, a  <br className='desktopBreak'/>
                    través del  <br className='tabletBreak'/>
                    compromiso  <br className='mobileBreak'/>
                    de nuestro equipo en la entrega <br className='tabletBreak'/>
                     del  <br className='mobileBreak'/>
                    <strong>mejor servicio posible.</strong>
                </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> <h4 className='iconPlus'>+</h4> <h4 className='accordionTitle'>Valores</h4> </Accordion.Header>
                <Accordion.Body>
                <p className='accordionText'>
                    Nuestro trabajo se sustenta con <br className='mobileBreak'/>
                    <strong> compromiso,  <br className='tabletBreak'/>
                        responsabilidad,  <br className='mobileBreak desktopBreak'/>
                    profesionalismo, empatía </strong> con  <br className='tabletBreak mobileBreak break'/>
                    clientes y proveedores y excelencia.
                </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default About2;