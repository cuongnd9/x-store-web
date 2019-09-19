import React from 'react';
import { Carousel as CarouselAnt } from 'antd';
import { Link } from '@reach/router';
import './style.css';

function Carousel() {
  return (
    <CarouselAnt autoplay effect="fade">
      <div className="banner">
        <div className="banner-color" />
        <Link to="/products">
          <img
            className="banner-img"
            alt="banner"
            src={`${process.env.PUBLIC_URL}/images/banners/1.jpg`}
          />
        </Link>
      </div>
      <div className="banner">
        <div className="banner-color" />
        <Link to="/products">
          <img
            className="banner-img"
            alt="banner"
            src={`${process.env.PUBLIC_URL}/images/banners/2.jpg`}
          />
        </Link>
      </div>
      <div className="banner">
        <div className="banner-color" />
        <Link to="/products">
          <img
            className="banner-img"
            alt="banner"
            src={`${process.env.PUBLIC_URL}/images/banners/3.jpg`}
          />
        </Link>
      </div>
      <div className="banner">
        <div className="banner-color" />
        <Link to="/products">
          <img
            className="banner-img"
            alt="banner"
            src={`${process.env.PUBLIC_URL}/images/banners/4.jpg`}
          />
        </Link>
      </div>
    </CarouselAnt>
  );
}

export default Carousel;
