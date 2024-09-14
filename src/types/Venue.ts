// Define the type for event history
type EventHistory = {
   eventName: string;
   eventOrganizer: string;
   date: string; // ISO date string
   eventType: string;
   url: string;
 };
 
 // Define the type for place information
 type Venue = {
   id: string;
   name: string;
   capacity: number;
   latitude: string; // String format of latitude
   longitude: string; // String format of longitude
   contact: string;
   placeType: string[]; // Array of place types
   eventsType: string[]; // Array of event types
   address: string;
   histories: EventHistory[]; // Array of event histories
 };
 
 
 
 export default Venue;
 