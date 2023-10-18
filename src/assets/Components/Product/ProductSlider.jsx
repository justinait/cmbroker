import React from 'react'
import './ProductSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import photo1 from '../../images/heromobile.png'

import 'swiper/css';


function ProductSlider() {
  
  const dataSlider = [
    { title: 'Para tu empresa', image: photo1, text: ['ART', 'Vida Colectivos', 'Cauciones', 'Transporte', 'Flota Automotores', 'Daños y Pérdidas Materiales', 'Responsabilidad Civil']},
    { title: 'Para vos', image: photo1, text: ['Autos y Motos', 'Embarcaciones', 'Vida', 'Accidentes Personales', 'Salud', 'Hogar', 'Movilidad sustentable' ]},
    { title: 'Para tu profesión', image: photo1, text: [ 'Accidentes Personales', 'Vida', 'Seguro de Retiro', 'Mala Praxis', 'Cauciones']},
    { title: 'Para tu negocio', image: photo1, text: ['ART', 'Vida', 'Accidentes Personales', 'Daños Materiales', 'Robo', 'Responsabilidad Civil']},
  ];

  return (
    <div>
      <Swiper
        className='swiperBrands'
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
            speed: 300,
          },
          640: {
            slidesPerView: 1.7,
            spaceBetween: 5,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1700: {
            slidesPerView: 3.3,
          }
        }}
      >
        {dataSlider.map((e, i)=> {
          return (
            <SwiperSlide className='swiperSlide' key={i}>
              <img src={e.image} alt="" className='sliderImage'/>
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