import './embla.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function DetailsCarousel({ eventDetails, selectedEvent }) {
  const [prevEvent, setPrevEvent] = useState(selectedEvent);

  useEffect(() => {
    setPrevEvent(selectedEvent);
  }, [selectedEvent]);

  const slideDirection = selectedEvent > prevEvent ? 100 : -100;

  const slideVariants = {
    initial: (direction) => ({
      x: direction,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: -direction,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeIn' },
    }),
  };

  return (
    <div className='details-carousel-wrapper'>
      <motion.div
        key={selectedEvent}
        custom={slideDirection}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={slideVariants}
        className='details-carousel'
      >
        <h2>{eventDetails[selectedEvent - 1].title}</h2>
        <p>{eventDetails[selectedEvent - 1].description}</p>
      </motion.div>
    </div>
  );
}

export default DetailsCarousel;
