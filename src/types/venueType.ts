export type venueType ={
  map(arg0: (venue: any) => import("react").JSX.Element): import("react").ReactNode;
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