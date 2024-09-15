import ApiMap from "../components/ApiMap";
import { Filter } from "../components/Filter";
import { VenueList } from "@/components/VenueList";
import data from "../data/venues.json";
import { useState } from "react";
import { Header } from "@/components/Header";

export default function Home() {
  const [venues, setVenues] = useState(data);
  const [eventsType, setEventsType] = useState("All");
  const [placeType, setPlaceType] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchAddress, setSearchAddress] = useState("");

  function resetFilter() {
    setVenues(data);
    setEventsType("All");
    setPlaceType("All");
    setSearchKeyword("");
  }

  function onSearchVenues() {
    let filteredVenues = data;
    if (searchKeyword) {
      filteredVenues = venues.filter((venue) => {
        return venue.name.toLowerCase().includes(searchKeyword.toLowerCase());
      });
    }

    if (searchAddress) {
      filteredVenues = venues.filter((venue) => {
        return venue.address
          .toLowerCase()
          .includes(searchAddress.toLowerCase());
      });
    }

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
      <Header
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        onSearchVenues={onSearchVenues}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <Filter
        onFilterEventsType={onFilterEventsType}
        onFilterPlaceType={onFilterPlaceType}
        eventsType={eventsType}
        placeType={placeType}
        resetFilter={resetFilter}
      />
      <div className="flex flex-row">
        <VenueList venues={venues} />
        <ApiMap venues={venues} />
      </div>
    </div>
  );
}
