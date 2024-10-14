import './embla.css';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect } from 'react';

function EventsCarousel({ eventDetails, onEventSelect }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    speed: 10,
  });

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
    const newSelectedIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newSelectedIndex);
    onEventSelect(newSelectedIndex + 1);
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className='carousel-wrapper'>
      <h1 className='text-white font-orbitron text-5xl'>Title</h1>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {eventDetails.map((event, index) => (
            <div
              key={index}
              className={`embla__slide ${index === selectedIndex ? 'is-active' : 'is-inactive'}`}
            >
              <div className='card'>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='embla__prev' onClick={scrollPrev} disabled={!prevEnabled}>
        Prev
      </button>
      <button className='embla__next' onClick={scrollNext} disabled={!nextEnabled}>
        Next
      </button>
    </div>
  );
}

export default EventsCarousel;
