import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const placeTypes: string[] = [
  "All",
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
  onFilterEventsType: (e: any) => void;
  onFilterPlaceType: (e: any) => void;
  eventsType: string;
  placeType: string;
  resetFilter: () => void;
};

export function Filter({
  onFilterEventsType,
  onFilterPlaceType,
  eventsType,
  placeType,
  resetFilter,
}: Props) {
  return (
    <div>
      <div className="flex flex-row gap-2.5 m-10 items-center">
        <FormControl>
          <InputLabel id="eventsType">Event Type</InputLabel>
          <Select
            className="w-48"
            sx={{
              borderRadius: "40px",
              background: eventsType !== "All" ? "#2196F3" : "",
              color: eventsType !== "All" ? "#fff" : "",
            }}
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
        <FormControl>
          <InputLabel id="placeType">Place Type</InputLabel>
          <Select
            className="w-48"
            sx={{
              borderRadius: "40px",
              background: placeType !== "All" ? "#2196F3" : "",
              color: placeType !== "All" ? "#fff" : "",
            }}
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

        <span onClick={() => resetFilter()} style={{ color: "#E65100" }}>
          Reset
        </span>
      </div>
    </div>
  );
}
