import React from 'react'
import aboutPhoto from '../../images/about.png'
import Accordion from 'react-bootstrap/Accordion';
import './About2.css'

function About2() {
  return (
    <div>
        
        <img src={aboutPhoto} alt="" className='about2Image' />

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header> <h4 className='accordionTitle'>+ Misión</h4> </Accordion.Header>
                <Accordion.Body>
                    <p className='accordionText'>
                        Brindar tranquilidad y seguridad financiera a nuestros clientes actuales y potenciales, 
                        guiándolos hacia las opciones que mejor se adapten a sus necesidades en ámbitos de seguros, 
                        finanzas y salud; y ofreciendo un servicio insuperable de asesoramiento y gestión de cobros y reclamos.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> <h4 className='accordionTitle'>+ Visión</h4> </Accordion.Header>
                <Accordion.Body>
                <p className='accordionText'>
                    Aspiramos a ser el líder regional, tanto para empresas como para personas, 
                    a través del compromiso de nuestro equipo en la entrega del mejor servicio posible.
                </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> <h4 className='accordionTitle'>+ Valores</h4> </Accordion.Header>
                <Accordion.Body>
                <p className='accordionText'>
                    Los valores en los que se sustenta el trabajo que se lleva a cabo día a día dentro de la organización, 
                    son los siguientes: compromiso, responsabilidad, profesionalismo, empatía con clientes y proveedores y excelencia.
                </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default About2;