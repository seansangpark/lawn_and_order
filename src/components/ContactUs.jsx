import React from 'react';
import PhoneNumberLink from './PhoneNumberLink';
const lawn_6 = require('../assets/lawn-6.png');
const lawn_7 = require('../assets/lawn-7.png');
const lawn_8 = require('../assets/lawn-8.png');

const ContactUs = () => {
  const emailAddress = 'lawn.n.order.lcs@gmail.com';
  const phoneNumber = '+1-210-727-4477';

  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20% relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Contact Us:</h3>
        <p className='pt-4'>
          Ready to give your lawn some TLC? Hit us up and let's chat. No
          cookie-cutter plans here – we'll cook up something that's exactly what
          your yard needs. Get in touch and let's make your lawn the talk of the
          town!
        </p>
        <br />
        <p className='pt-4'>
          📍 <b>San Antonio, Texas</b>
        </p>
        <p className='pt-4'>
          <b>
            <PhoneNumberLink phoneNumber={phoneNumber} />
          </b>
        </p>
        <p className='pt-4'>
          <b>
            <a
              href={`mailto:${emailAddress}`}
              target='_blank'
              rel='noreferrer'
            >
              lawn.n.order.lcs@gmail.com
            </a>
          </b>
        </p>
        <p className='pt-4'></p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
          src={lawn_6}
          alt='Grass cutting'
          className='object-cover w-full h-full'
        />
        <img
          src={lawn_7}
          alt='American yard'
          className=' row-span-2 object-cover w-full h-full'
        />
        <img
          src={lawn_8}
          alt='Veteran owned'
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  );
};

export default ContactUs;
