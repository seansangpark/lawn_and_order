import React from 'react';
const yard_1 = require('../assets/yard-1.png');
const veteran_1 = require('../assets/veteran-1.png');
const yard_3 = require('../assets/yard-3.png');
const yard_4 = require('../assets/yard-4.png');
const veteran_2 = require('../assets/veteran-2.png');

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-y-40'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          src={veteran_1}
          alt='Lanscaping'
          className='row-span-3 object-over w-full h-full p-2'
        />
        <img
          src={yard_4}
          alt='Lanscaping'
          className='row-span-2 object-over w-full h-full p-2'
        />
        <img
          src={yard_1}
          alt='Lanscaping'
          className='row-span-2 object-over w-full h-full p-2'
        />
        <img
          src={yard_3}
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
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quis,
          quod itaque, vel similique pariatur ratione alias tempore qui
          reiciendis debitis eius iure aut mollitia ex ad sunt? Ratione, magni!
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
          debitis cumque asperiores ex doloremque ullam eaque soluta ipsam nam
          beatae! Perspiciatis, ducimus? Rem, ratione recusandae voluptatum
          eligendi atque iusto voluptate.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
