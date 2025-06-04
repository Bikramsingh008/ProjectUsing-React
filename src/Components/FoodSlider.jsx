import React, { useRef } from 'react';
import { foodSlider } from '../Data/data';
import './FoodSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';


const FoodSlider = ({handleCart}) => {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleSlideLeft = () => {
    sliderRef.current.slickPrev();
  };

  const handleSlideRight = () => {
    sliderRef.current.slickNext();
  };


  return (
    <>
    <div style={{position:'relative', top:'220px'}}>
    <h1 style={{fontSize:'50px', position:'relative', left:'220px', bottom:'30px'}}>What's on your Mind?</h1>
    <div style={{ width: '90%', margin: '60px auto', backgroundColor: 'white', padding: '20px', borderRadius: '10px', position: 'relative', top:'30px' }}>
      <Slider ref={sliderRef} {...settings}>
        {foodSlider.map((items) => (
          <div key={items.id} style={{ textAlign: 'center' }}>
            <img
              style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto' }}
              src={items.img}
              alt={items.title}
            />
            <p style={{ fontSize: '24px', marginTop: '15px',position:'relative', left:'190px' }}>
              <b>{items.title}</b>
            </p>
            <p style={{ fontSize: '24px', marginTop: '15px',position:'relative', left:'220px' }}>
              <b>{items.price}</b>
            </p>
            <button onClick={handleCart}>Add to Cart</button>
          </div>
        ))}
      </Slider>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          fontSize: '30px',
          cursor: 'pointer',
          zIndex: 1
        }}
        onClick={handleSlideLeft}
      >
        <FaChevronLeft />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          fontSize: '30px',
          cursor: 'pointer',
          zIndex: 1
        }}
        onClick={handleSlideRight}
      >
        <FaChevronRight />
      </div>
    </div>
    </div>
    </>
  );
};

export default FoodSlider;
