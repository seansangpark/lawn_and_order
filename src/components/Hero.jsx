import React from 'react';
const hero = require('../assets/hero-1.png');

const Hero = () => {
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
          <p>All inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Lawn & Landscaping Services
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Dolore quis magna commodo do consequat Lorem. Non quis aliquip
            occaecat aliquip elit eiusmod consequat proident in. Voluptate do
          </p>
          <button className='bg-white text-black py-3'>Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
