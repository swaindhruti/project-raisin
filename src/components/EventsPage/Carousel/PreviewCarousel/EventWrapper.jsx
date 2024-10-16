'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { CarouselMapping } from './CaraouselMapping';

import { SliderContainer, Wrapper } from './EventWrapper.styles';
import DescriptionCarousel from '../DescriptionCarousel/DescriptionCarousel';
import { LeftArrowButton, RightArrowButton } from '../../Shared/ArrowButton';

export const SliderEventsWrapper = ({ previewItems, descriptionItems }) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 456.74;
  const autoSlideIntervalRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % previewItems.length);
    resetAutoSlide();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? previewItems.length - 1 : prevIndex - 1));
    resetAutoSlide();
  };

  useEffect(() => {
    if (scope.current) {
      const xOffset = -currentIndex * slideWidth;
      animate(
        scope.current,
        { x: xOffset },
        {
          duration: 0.1,
          ease: [0.42, 0, 0.58, 1],
          type: 'tween',
        },
      );
    }
  }, [currentIndex, animate, scope]);

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % previewItems.length);
    }, 2000);
  };

  const resetAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, []);

  return (
    <Wrapper>
      <div className='h-full justify-center items-center relative'>
        <LeftArrowButton
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '10px',
            top: '35%',
            zIndex: 10,
          }}
        />
        <SliderContainer>
          <div
            ref={scope}
            className='flex justify-center items-center mt-64 transition-transform'
            style={{
              width: `${previewItems.length * slideWidth}px`,
              transform: `translateX(calc(50% - ${slideWidth / 2}px))`,
            }}
          >
            <CarouselMapping
              currentIndex={currentIndex}
              previewItems={previewItems}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
          <DescriptionCarousel descriptionItems={descriptionItems} currentIndex={currentIndex} />
        </SliderContainer>
        <RightArrowButton
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '10px',
            top: '35%',
            transform: 'translateY(-50%)',
            zIndex: 10,
          }}
        />
      </div>
    </Wrapper>
  );
};
