import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import heroMobile from '../../images/heromobile.png'
import photo1 from '../../images/happycoupleHERO.jpg'
import photo2 from '../../images/workHERO.png'
import photo3 from '../../images/team.jpg'
import photo4 from '../../images/office.jpg'
import './Home.css'

function Home() {
  
  const dataBranding = [
    { text2: 'Para vos', image: photo1},
    { text2: 'Para tu profesión', image: photo2},
    { text2: 'Para tu negocio', image: photo3},
    { text2: 'Para empresas', image: photo4},
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