export type venueType ={
  id: string;
  name: string;
  capacity: number;
  latitude: string;
  longitude: string;
  contact: string;
  placeType: string[];
  eventsType: string[];
  address: string;
  histories: {
      eventName: string;
      eventOrganizer: string;
      date: string;
      eventType: string;
      url: string;
  }[];
}