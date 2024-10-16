import { motion, AnimatePresence } from 'framer-motion';
import DetailsCard from '../../CardComponents/DetailsCard/DetailsCard';
import tw, { styled } from 'twin.macro';
import { GL_descriptionItems } from '@/config/content/EventsPage/GuestLecture/Data';

const DescriptionContainer = styled.div`
  ${tw`w-full mt-4 overflow-hidden`}
  height: 600px; /* Set a fixed height matching your DescriptionCard height */
  // position: relative; /* To allow absolutely positioned slides */
`;

const DescriptionSlide = styled(motion.div)`
  ${tw` left-0 w-full flex justify-center`}
`;

const DescriptionCarousel = ({ currentIndex, descriptionItems }) => {
  const variants = {
    enter: { x: 50, opacity: 0, position: 'absolute' },
    center: { x: 0, opacity: 1, position: 'absolute' },
    exit: { x: -50, opacity: 0, position: 'absolute' },
  };

  return (
    <DescriptionContainer>
      <AnimatePresence>
        <DescriptionSlide
          key={currentIndex}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DetailsCard {...descriptionItems[currentIndex]} />
        </DescriptionSlide>
      </AnimatePresence>
    </DescriptionContainer>
  );
};

export default DescriptionCarousel;
