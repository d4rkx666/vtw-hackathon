import TextField from "@mui/material/TextField";
import data from "../data/venues.json";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const placeTypes: string[] = [
  "Convention Center",
  "Theatre",
  "Stadium",
  "Arena",
  "Museum",
  "Exhibition Hall",
  "Conference Center",
  "Community Center",
  "Concert Hall",
];

const eventsTypes: string[] = [
  "All",
  "Conference",
  "Exhibition",
  "Trade Show",
  "Lecture",
  "Workshop",
  "Seminar",
  "Corporate Event",
  "Community Event",
];

export function Search() {
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

  function onFilterVenues(e: any) {
    setVenues(data);
    setEventsType(e.target.value);
    if (e.target.value === "All") return;

    console.log(" e.target.value: ", e.target.value);
    const filteredVenues = data.filter((venue) => {
      return venue.eventsType.includes(e.target.value);
    });

    setVenues(filteredVenues);
  }

  console.log("venues: ", venues);
  return (
    <div>
      <TextField onChange={(e) => onSearchVenues(e)} />
      <FormControl fullWidth>
        <InputLabel id="eventsType">Event Type</InputLabel>
        <Select
          labelId="eventsType"
          value={eventsType}
          label="Event Type"
          onChange={onFilterVenues}
        >
          {eventsTypes.map((type) => {
            return (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="eventsType">Place Type</InputLabel>
        <Select
          labelId="eventsType"
          value={placeType}
          label="Event Type"
          onChange={onFilterVenues}
        >
          {placeTypes.map((type) => {
            return (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <ul>
        {venues.map((venue) => {
          return <li key={venue.id}>{venue.name}</li>;
        })}
      </ul>
    </div>
  );
}
