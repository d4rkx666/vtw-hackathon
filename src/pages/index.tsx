import ApiMap from "../components/ApiMap";
import { Search } from "../components/Search";
import { VenueList } from "@/components/VenueList";
import data from "../data/venues.json";
import { useState } from "react";

export default function Home() {
  const [venues, setVenues] = useState(data);
  const [eventsType, setEventsType] = useState("");
  const [placeType, setPlaceType] = useState("");

  function onSearchVenues(e: any) {
    if (!e.target.value) return setVenues(data);

    const filteredVenues = venues.filter((venue) => {
      return venue.name.toLowerCase().includes(e.target.value);
    });

    setVenues(filteredVenues);
  }

  function onFilterEventsType(e: any) {
    setVenues(data);
    setEventsType(e.target.value);
    if (e.target.value === "All") return;

    const filteredVenues = data.filter((venue) => {
      return venue.eventsType.includes(e.target.value);
    });

    setVenues(filteredVenues);
  }

  function onFilterPlaceType(e: any) {
    setVenues(data);
    setPlaceType(e.target.value);
    if (e.target.value === "All") return;

    console.log(" e.target.value: ", e.target.value);
    const filteredVenues = data.filter((venue) => {
      return venue.placeType.includes(e.target.value);
    });

    setVenues(filteredVenues);
  }

  return (
    <div className="flex flex-col">
      <Search
        onSearchVenues={onSearchVenues}
        onFilterEventsType={onFilterEventsType}
        onFilterPlaceType={onFilterPlaceType}
        eventsType={eventsType}
        placeType={placeType}
      />
      <div className="flex flex-row">
        <VenueList venues={venues} />
        <ApiMap venues={venues} />
      </div>
    </div>
  );
}
