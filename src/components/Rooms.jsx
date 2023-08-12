import React from 'react';
import hero_2 from '../assets/hero-2.png';
import yard_2 from '../assets/yard-2.png';
import america_1 from '../assets/america-1.png';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20% relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          saepe, illo mollitia odio quisquam dolore delectus et sunt commodi!
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
          src={hero_2}
          alt='Grass cutting'
          className='object-cover w-full h-full'
        />
        <img
          src={yard_2}
          alt='American yard'
          className=' row-span-2 object-cover w-full h-full'
        />
        <img
          src={america_1}
          alt='Veteran owned'
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  );
};

export default Rooms;
