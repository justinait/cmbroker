import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../../images/happycoupleHERO-min.jpg'
import photo2 from '../../images/workHERO-min.png'
import photo3 from '../../images/team-min.jpg'
import photo4 from '../../images/office-min.jpg'
import photo5 from '../../images/familycar2-min.jpg'
import photo6 from '../../images/work1-min.png'

import './Home.css'

function Home() {
  
  const [width, setWidth] = useState(window.innerWidth);

  const updateWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  let dataBranding = [];
  
  if (width < 640) {
    dataBranding = [
      { text2: 'Para vos', image: photo1},
      { text2: 'Para tu profesión', image: photo2},
      { text2: 'Para tu negocio', image: photo3},
      { text2: 'Para empresas', image: photo4},
    ];
  } else {
    dataBranding = [
      { text2: 'Para vos', image: photo5, className: 'imagesRight'},
      { text2: 'Para tu profesión', image: photo6, className: 'imagesPosition'},
      { text2: 'Para tu negocio', image: photo3},
      { text2: 'Para empresas', image: photo4},
    ];
  }

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
              <img src={e.image} alt="" className={`carouselImageMobile ${e.className}`}/>
            </Carousel.Item>      

          )
        })
      }
    </Carousel>
  );
}

export default Home;