import React from 'react'
import './ProductSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import photo1 from '../../images/office.jpg'
import photo2 from '../../images/happycouple.jpg'
import photo3 from '../../images/work.png'
import photo4 from '../../images/team.jpg'
import { Autoplay } from 'swiper/modules';

import 'swiper/css';


function ProductSlider() {
  
  const dataSlider = [
    { title: 'Para tu empresa', image: photo1, text: ['ART', 'Vida Colectivos', 'Cauciones', 'Transporte', 'Flota Automotores', 'Daños y Pérdidas Materiales', 'Responsabilidad Civil'], className: ''},
    { title: 'Para vos', image: photo2, text: ['Autos y Motos', 'Embarcaciones', 'Vida', 'Accidentes Personales', 'Salud', 'Hogar', 'Movilidad sustentable' ], className: 'imageSliderPosition'},
    { title: 'Para tu profesión', image: photo3, text: [ 'Accidentes Personales', 'Vida', 'Seguro de Retiro', 'Mala Praxis', 'Cauciones'], className: ''},
    { title: 'Para tu negocio', image: photo4, text: ['ART', 'Vida', 'Accidentes Personales', 'Daños Materiales', 'Robo', 'Responsabilidad Civil'], className: ''},
  ];

  return (
    <div>
      <Swiper
        className='swiperBrands'
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        onSlideChange={(swiper) => {
          const slides = swiper.slides;
          for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('swiper-slide-active');
          }
          slides[swiper.activeIndex].classList.add('swiper-slide-active');
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
            initialSlide: 1,
            centeredSlides: true,
            loop: true,
          },
          1023: {
            slidesPerView: 1.6,
            spaceBetween: 20,
            initialSlide: 1,
            centeredSlides: true,
            loop: true,
          },
          1259: {
            slidesPerView: 2,
            spaceBetween: 10,
            initialSlide: 1,
            centeredSlides: true,
            loop: true,
          },
        }}
        modules={[Autoplay]}
      >

        {dataSlider.map((e, i)=> {
          return (
            <SwiperSlide className='swiperSlide' key={i}>
              <img src={e.image} alt="" className={`sliderImage ${e.className}`}/>
              <div className='sliderText'>
                <h4 className='sliderTitle'>{e.title}</h4>
              
                <ul>
                  {e.text.map((item, index)=>{
                    return(
                    <li className='sliderItem' key={index}>{item}</li>
                    )
                  })}
                </ul>
                
              </div>
          </SwiperSlide>
          )
        })}
        
       
      </Swiper>

    </div>
  )
}

export default ProductSlider