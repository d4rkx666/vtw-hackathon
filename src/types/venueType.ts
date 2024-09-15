export type venueType = {
  id: string;
  name: string;
  capacity: number;
  latitude: string;
  longitude: string;
  contact: string;
  placeType: string[];
  eventsType: string[];
  address: string;
  price: number;
  picture: string;
  histories: EventHistoryType[];
};

export type EventHistoryType = {
  eventName: string;
  eventOrganizer: string;
  date: string; // ISO date string
  eventType: string;
  url: string;
  picture: string;
};
