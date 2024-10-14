import { dtsShows } from './DTS_Shows/Data';
import { exibitions } from './Exhibition/Data';
import { flagshipEvents } from './FlagshipEvents/Data';
import { mainEvents } from './MainEvents/Data';

export const allEvents = [
  {
    type: 'Flagship Events',
    events: flagshipEvents,
  },
  {
    type: 'Main Events',
    events: mainEvents,
  },
  {
    type: 'Exhibitions',
    events: exibitions,
  },
  {
    type: 'DTS Shows',
    events: dtsShows,
  },
];
