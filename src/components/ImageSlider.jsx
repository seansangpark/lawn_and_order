import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import lawn_1 from '../assets/lawn-1.png';
import lawn_2 from '../assets/lawn-2.png';
import lawn_3 from '../assets/lawn-3.png';
import lawn_4 from '../assets/lawn-4.png';
import lawn_5 from '../assets/lawn-5.png';

const ImageSlider = () => {
  const slides = [
    {
      src: lawn_3,
      title: 'Lawn 3',
    },
    {
      src: lawn_2,
      title: 'Lawn 2',
    },
    {
      src: lawn_1,
      title: 'Lawn 1',
    },
    {
      src: lawn_4,
      title: 'Lawn 4',
    },
    {
      src: lawn_5,
      title: 'Lawn 5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
      ></div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={30}
          style={{ outline: 'none' }}
        />
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight
          onClick={nextSlide}
          size={30}
          style={{ outline: 'none' }}
        />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
