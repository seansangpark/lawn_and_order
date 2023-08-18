import React from 'react';
const hero = require('../assets/hero-1.png');

const Hero = () => {
  const phoneNumber = '+1-210-727-4477';

  const handleButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src={hero}
        alt='Lawn Service Hero'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p className='py-4'>Special Lawn Care Unit</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Lawn & Order
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-4 text-xl'>
            We're not your average lawn guys – we're true San Antonio locals and
            proud U.S. veteran. Our roots run deep, just like our love for
            making lawns look awesome. We get this city and its lawns like
            nobody else. Let's team up and bring some order to your green space!
          </p>
          <button
            className='bg-white text-black py-4'
            onClick={handleButtonClick}
          >
            Call Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
