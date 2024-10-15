import { SliderData } from '@/config/content/eventsCarauselData';
import { motion } from 'framer-motion';
import PreviewCard from '../../CardComponents/PreviewCard/PreviewCard';

export const CarouselMapping = ({ currentIndex }) => {
  return (
    <>
      {SliderData.map((item, index) => {
        const isCurrent = index === currentIndex;
        const isPrev = index === (currentIndex - 1 + SliderData.length) % SliderData.length;
        const isNext = index === (currentIndex + 1) % SliderData.length;
        const isPrevToPrev = index === (currentIndex - 2 + SliderData.length) % SliderData.length;
        const isNextToNext = index === (currentIndex + 2) % SliderData.length;

        // Default values for each card
        let transform = 'translateX(0px)'; // centered
        let opacity = 0.3; // lower opacity for non-current cards
        let zIndex = 1; // default z-index
        let scale = 1; // smaller for non-current cards

        if (isPrev || isNext) {
          // Ensure prev and next are symmetrical and lower
          transform = `translateY(0px)`;
          opacity = 0.3; // Make opacity smoother
          zIndex = 10;
          scale = 1; // Slightly larger than background cards but smaller than current
        }

        if (isPrevToPrev || isNextToNext) {
          opacity = 0; // Fully hide the cards further away
          zIndex = 0;
        }

        if (isCurrent) {
          // Current card is 50px above and full opacity
          transform = 'translateY(-150px)';
          opacity = 1;
          zIndex = 51;
          scale = 1;
        }

        return (
          <motion.div
            key={index}
            className='w-full relative transition-all duration-700 ease-[0.25, 0.1, 0.25, 1] left-[5%] md:left-[8%] lg:left-[12%] xl:left-[19.5%]'
            style={{
              zIndex,
              transform, // Apply the updated transform
              scale,
            }}
            animate={{
              opacity, // Apply seamless opacity change
            }}
            transition={{
              type: 'tween',
              duration: 0.5, // Smooth transition duration
              ease: [0.42, 0, 0.58, 1], // Ease for smooth effect
            }}
          >
            <PreviewCard PreviewDescription={item.desc} ImageURL={item.url} />
          </motion.div>
        );
      })}
    </>
  );
};
