import { SliderData } from '@/config/content/eventsCarauselData';
// import { EventCard } from '../eventCardComponents/EventCard';
import { useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import PreviewCard from '../../CardComponents/PreviewCard/PreviewCard';
import { GL_previewItems } from '@/config/content/EventsPage/GuestLecture/Data';

export const CarouselMapping = ({ currentIndex, previewItems }) => {
  const [scope, animate] = useAnimate();
  const refs = useRef([]);

  useEffect(() => {
    previewItems.forEach((_, index) => {
      const isCurrent = index === currentIndex;
      const isPrev = index === (currentIndex - 1 + SliderData.length) % SliderData.length;
      const isNext = index === (currentIndex + 1) % SliderData.length;
      const isPrevToPrev = index === (currentIndex - 2 + SliderData.length) % SliderData.length;
      const isNextToNext = index === (currentIndex + 2) % SliderData.length;

      let transform = 'translateY(0px)';
      let opacity = 0.3;
      let zIndex = 1;

      if (isPrevToPrev || isNextToNext) {
        (currentIndex === 0 && isPrevToPrev) ||
        (currentIndex === SliderData.length - 1 && isNextToNext)
          ? (opacity = 0.3)
          : (opacity = 0);
        zIndex = 0;
      }

      if (isPrev) {
        transform = 'translateX(-10px)translateY(0px)';
        opacity = 0.3;
        zIndex = 10;
      }

      if (isNext) {
        transform = 'translateX(10px)translateY(0px)';
        opacity = 0.3;
        zIndex = 10;
      }

      if (isCurrent) {
        transform = 'translateY(-200px)';
        opacity = 1;
        zIndex = 51;
      }

      animate(
        refs.current[index],
        {
          transform,
          opacity,
          zIndex,
        },
        {
          type: 'tween',
          duration: 0.3,
          ease: [0.42, 0, 0.58, 1],
        },
      );
    });
  }, [currentIndex, animate]);

  return (
    <>
      {previewItems.map((item, index) => {
        const isCurrent = index === currentIndex;

        return (
          <div
            key={index}
            className={`w-[456.74px] m-2 relative transition-all duration-700 ease-[0.25, 0.1, 0.25, 1] left-[5%] md:left-[8%] lg:left-[12%] xl:left-[15%]`}
            ref={(el) => (refs.current[index] = el)}
          >
            <PreviewCard PreviewDescription={item.PreviewDescription} ImageURL={item.ImageURL} />
          </div>
        );
      })}
    </>
  );
};
