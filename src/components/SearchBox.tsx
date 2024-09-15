import TextField from "@mui/material/TextField";

type Props = {
  searchText: string;
  setSearchText: (text: string) => void;
  label: string;
};

export function SearchBox({ searchText, setSearchText, label }: Props) {
  return (
    <TextField
      value={searchText}
      label={label}
      className="w-80 m-2.5"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "40px",
        },
      }}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}
