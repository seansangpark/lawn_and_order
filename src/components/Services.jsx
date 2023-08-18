import React from 'react';
const yard_1 = require('../assets/yard-1.png');
const veteran_2 = require('../assets/veteran-2.png');
const logo = require('../assets/logo.png');
const lawn_9 = require('../assets/lawn-9.png');
const lawn_10 = require('../assets/lawn-10.png');

const Services = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-y-40'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          src={logo}
          alt='Lawn & Order Logo'
          className='row-span-3 object-over w-full h-full p-2'
        />
        <img
          src={lawn_9}
          alt='Lanscaping'
          className='row-span-2 object-over w-full h-full p-2'
        />
        <img
          src={yard_1}
          alt='Lanscaping'
          className='row-span-2 object-over w-full h-full p-2'
        />
        <img
          src={lawn_10}
          alt='Lanscaping'
          className='row-span-3 object-over w-full h-full p-2'
        />
        <img
          src={veteran_2}
          alt='Lanscaping'
          className='row-span-2 object-over w-full h-full p-2'
        />
      </div>

      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Services</h3>
        <p className='text-2xl py-6'>Lawn Mowing:</p>
        <p className='pb-6'>
          We've got the magic touch when it comes to mowing. Your lawn will be
          the talk of the town, seriously.
        </p>
        <p className='text-2xl py-6'>Lawn Fertilizer:</p>
        <p className='pb-6'>
          Give your grass some love with our special fertilizer treatments.
          We're all about that healthy, lush look.
        </p>
        <p className='text-2xl py-6'>Landscaping Maintenance:</p>
        <p className='pb-6'>
          Keeping things looking tip-top all year? Yep, that's our thing.
        </p>
        <p className='text-2xl py-6'>Landscaping Installation: </p>
        <p className='pb-6'>
          Want a yard that's Pinterest-worthy? We're the ones to make it happen.
        </p>
        <p className='text-2xl py-6'>Leaf Removal: </p>
        <p className='pb-6'>
          Leaves piling up? Don't sweat it. We'll clear 'em out and let your
          lawn shine.
        </p>
        {/* <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>
            Book Your Trip
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
