import { useState } from 'react';
import EventsCarousel from './EventsCarousel';
import DetailsCarousel from './DetailsCarousel';

function EventsCarouselWrapper() {
  const eventDetails = [
    { title: 'Event 1', description: 'Details about Event 1' },
    { title: 'Event 2', description: 'Details about Event 2' },
    { title: 'Event 3', description: 'Details about Event 3' },
    { title: 'Event 4', description: 'Details about Event 4' },
    { title: 'Event 5', description: 'Details about Event 5' },
  ];

  const [selectedEvent, setSelectedEvent] = useState(1);

  const handleSelectEvent = (index) => {
    setSelectedEvent(index);
  };

  return (
    <div className='events-carousel-wrapper'>
      <EventsCarousel eventDetails={eventDetails} onEventSelect={handleSelectEvent} />
      <DetailsCarousel eventDetails={eventDetails} selectedEvent={selectedEvent} />
    </div>
  );
}

export default EventsCarouselWrapper;
