import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Client = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="container my-5 pb-4">
        <h2 className="text-center py-3 Sacramento_font fs-1 text-dark">Client Diaries</h2>
        <div className="wrapper">
          <Slider {...settings} className="my-slider">
            <div className='card border-0'><img src="./image/home/c-1.jpg" className="carousel_width w-100" alt="c-1" /></div>
            <div className='card border-0'><img src="./image/home/c-2.jpg" className="carousel_width w-100" alt="c-2" /></div>
            <div className='card border-0'><img src="./image/home/c-3.jpg" className="carousel_width w-100" alt="c-3" /></div>
            <div className='card border-0'><img src="./image/home/c-4.jpg" className="carousel_width w-100" alt="c-4" /></div>
            <div className='card border-0'><img src="./image/home/c-5.jpg" className="carousel_width w-100" alt="c-5" /></div>
            <div className='card border-0'><img src="./image/home/c-6.jpg" className="carousel_width w-100" alt="c-6" /></div>
            <div className='card border-0'><img src="./image/home/c-7.jpg" className="carousel_width w-100" alt="c-7" /></div>
            <div className='card border-0'><img src="./image/home/c-8.jpg" className="carousel_width w-100" alt="c-8" /></div>
            <div className='card border-0'><img src="./image/home/c-9.jpg" className="carousel_width w-100" alt="c-9" /></div>
            <div className='card border-0'><img src="./image/home/c-10.jpg" className="carousel_width w-100" alt="c-10" /></div>
            <div className='card border-0'><img src="./image/home/c-11.jpg" className="carousel_width w-100" alt="c-11" /></div>
            <div className='card border-0'><img src="./image/home/c-12.jpg" className="carousel_width w-100" alt="c-12" /></div>
            <div className='card border-0'><img src="./image/home/c-13.jpg" className="carousel_width w-100" alt="c-13" /></div>
            
          </Slider>
        </div>
      </div>
    </>
  )
}
export default Client;