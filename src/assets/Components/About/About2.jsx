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
                <Accordion.Header> <h4 className='iconPlus'>+</h4> <h4 className='accordionTitle'>Misión</h4> </Accordion.Header>
                <Accordion.Body>
                    <p className='accordionText'>
                        Brindar <strong>tranquilidad y seguridad</strong> <br/>
                        financiera a nuestros clientes actuales <br/>
                        y potenciales, guiándolos hacia las <br/>
                        opciones que <strong> mejor se adapten a sus <br/>
                        necesidades</strong> en ámbitos de seguros, <br/>
                        finanzas y salud; y ofreciendo un <br/>
                        servicio insuperable de <strong> asesoramiento <br/>
                        y gestión de cobros y reclamos.</strong>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> <h4 className='iconPlus'>+</h4><h4 className='accordionTitle'>Visión</h4> </Accordion.Header>
                <Accordion.Body>
                <p className='accordionText'>
                    Aspiramos a ser el <strong> líder regional</strong>, <br/>
                    tanto para empresas como para  <br/>
                    personas, a través del compromiso  <br/>
                    de nuestro equipo en la entrega del  <br/>
                    <strong>mejor servicio posible.</strong>
                </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> <h4 className='iconPlus'>+</h4> <h4 className='accordionTitle'>Valores</h4> </Accordion.Header>
                <Accordion.Body>
                <p className='accordionText'>
                    Los valores en los que se sustenta <br/>
                    el trabajo que se lleva a cabo día a  <br/>
                    día dentro de la organización, son  <br/>
                    los siguientes: <strong> compromiso, <br/>
                    responsabilidad, profesionalismo,  <br/>
                    empatía </strong> con clientes y  <br/>
                    proveedores y excelencia.
                </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default About2;