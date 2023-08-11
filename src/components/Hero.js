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
      <div>
        <div>
          <p>All Inclusive</p>
          <h1>Prive Beaches & Getaways</h1>
          <p>
            Dolore quis magna commodo do consequat Lorem. Non quis aliquip
            occaecat aliquip elit eiusmod consequat proident in. Voluptate do
            enim fugiat aute magna amet irure cillum dolor eiusmod. Dolor sint
            enim velit excepteur in sunt incididunt labore. Consequat labore
            ipsum ipsum tempor qui deserunt eu eu anim reprehenderit tempor.
            Consectetur id ullamco excepteur occaecat occaecat occaecat
            consectetur ex sit exercitation amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
