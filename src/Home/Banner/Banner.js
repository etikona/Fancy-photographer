import React from 'react';
import banner1  from '../../images/banner/banner1.jpg'
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div>
    <h1 className='fancy'>Welcome To My Fancy Photography Website....!!</h1>
      </div>
      <div className='fancy-img'>
      <img width={500} src={banner1} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Banner;