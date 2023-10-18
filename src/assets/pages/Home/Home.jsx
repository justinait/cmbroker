import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import heroMobile from '../../images/heromobile.png'
import './Home.css'

function Home() {
  
  const dataBranding = [
    { text2: 'Para vos', image: heroMobile},
    { text2: 'Para tu profesión', image: heroMobile},
    { text2: 'Para tu negocio', image: heroMobile},
    { text2: 'Para empresas', image: heroMobile},
  ];

  return (
    <Carousel id='home'>
      {
        dataBranding.map((e, i) => {
          return(
            <Carousel.Item key={i}>
              <div className='carouselText'>
                <h4 className='carouselText1'>SERVICIOS + SEGUROS</h4>
                <h4 className='carouselText2'>{e.text2}</h4>
              </div>
              <img src={e.image} alt="" className='carouselImageMobile'/>
            </Carousel.Item>      

          )
        })
      }
    </Carousel>
  );
}

export default Home;