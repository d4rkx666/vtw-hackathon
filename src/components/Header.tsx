import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBox } from "@/components/SearchBox";

type Props = {
  searchKeyword: string;
  setSearchKeyword: (text: string) => void;
  onSearchVenues: (e: any) => void;
  searchAddress: string;
  setSearchAddress: (text: string) => void;
};

export function Header({
  searchKeyword,
  setSearchKeyword,
  onSearchVenues,
  searchAddress,
  setSearchAddress,
}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <div className="flex flex-row gap-2.5">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              VanEventVenue.com
            </Typography>
          </Toolbar>
          <SearchBox
            label="Keyword"
            searchText={searchKeyword}
            setSearchText={setSearchKeyword}
          />
          <SearchBox
            label="Address"
            searchText={searchAddress}
            setSearchText={setSearchAddress}
          />
          <div className="flex items-center">
            <IconButton
              onClick={(e) => onSearchVenues(e)}
              sx={{
                background: "#2196F3",
                color: "#fff",
                width: 36,
                height: 36,
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
