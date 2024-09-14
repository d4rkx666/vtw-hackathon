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

type Props = {
  onSearchVenues: (e: any) => void;
  onFilterEventsType: (e: any) => void;
  onFilterPlaceType: (e: any) => void;
  eventsType: string;
  placeType: string;
};

export function Search({
  onSearchVenues,
  onFilterEventsType,
  onFilterPlaceType,
  eventsType,
  placeType,
}: Props) {
  return (
    <div>
      <TextField onChange={(e) => onSearchVenues(e)} />
      <div className="flex flex-row">
        <FormControl fullWidth>
          <InputLabel id="eventsType">Event Type</InputLabel>
          <Select
            labelId="eventsType"
            value={eventsType}
            label="Event Type"
            onChange={onFilterEventsType}
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
          <InputLabel id="placeType">Place Type</InputLabel>
          <Select
            labelId="placeType"
            value={placeType}
            label="Place Type"
            onChange={onFilterPlaceType}
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
      </div>
    </div>
  );
}
