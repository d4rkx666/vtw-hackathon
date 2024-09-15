import Bg from "../images/bg.jpg"
import Logo from "../images/logo.png"
import { FormControl, InputLabel, Typography, CardContent, Box, Grid2, Card, TextField, Select, MenuItem, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import Image from "next/image";

export default function Home() {

  return (
    <div style={{backgroundColor: "white"}}>
      <Image
          src={Logo}
          alt="Logo"
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            padding: 3, // Adjust padding as needed
          }}
        />
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${Bg.src})`, // Add background image
        backgroundSize: "cover", // Cover the entire area
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repeat
      }}
    >
        
      <Box sx={{ width: 900 }}>
        <Card sx={{ p: 4, borderRadius: 5, backgroundColor: "rgba(255, 255, 255, 0.85)" }}> {/* Semi-transparent card */}
          <CardContent>
            <Typography variant="h5" component="div" textAlign="center" gutterBottom>
              Find the Perfect Venue in Vancouver<br/>to launch your unforgettable Tech Event!
            </Typography>
            <br/>

            {/* Search Form */}
            <Box display="flex" justifyContent="center" gap={2}>
              {/* Keyword Search */}

              <TextField
                variant="outlined"
                placeholder="Venue name, address, etc..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: "50px", // Fully rounded input
                  }
                }}
                InputLabelProps={{
                  shrink: true, // Keep label floating
                }}
                label="Keyword" // This is the helper label
                sx={{ width: "300px" }}
              />

              {/* Area Dropdown */}
              <FormControl variant="outlined" sx={{ width: "300px" }}>
                <InputLabel shrink>Area</InputLabel>
                <Select
                  label="Area"
                  defaultValue="Downtown Vancouver"
                  sx={{
                    borderRadius: "50px", // Fully rounded input
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px", // Also apply to the inner Select component
                    }
                  }}
                >
                  <MenuItem value="Downtown Vancouver">Downtown Vancouver</MenuItem>
                  <MenuItem value="West End">West End</MenuItem>
                  <MenuItem value="Gastown">Gastown</MenuItem>
                </Select>
              </FormControl>

              {/* Search Button */}
              <Link href="/Filters">
                <IconButton
                  color="primary"
                  size="large"
                  sx={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    "&:hover": { backgroundColor: "#0056b3" },
                    borderRadius: "50%", // Makes it a circle
                    width: 56, // Set equal width and height for circular button
                    height: 56,
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Link>
              
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid2>
    </div>
  );
}
