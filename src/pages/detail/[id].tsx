import { venueType } from "@/types/venueType";
import { Box, Chip, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import venues from "../../data/venues.json";
import {Link as Scroll} from "react-scroll"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function Detail() {
  const id = useRouter().query.id;

  const [venue, setVenue] = useState<venueType | null>(null);
  useEffect(() => {
    if (id) {
      const isVenue = venues.find((e) => e.id === id);
      if (isVenue) {
        setVenue(isVenue);
      } else {
        setVenue(null);
      }
    } else {
      throw new Error("undefined id");
    }
  }, [id]);

  return (
    <div className="">
      {venue && (
        <>
          <Container>
            <div className="flex items-center justify-around">
              <Typography variant="h3">{venue.name}</Typography>
              <nav>
                <Scroll to="map"><Chip sx={{bgcolor: "limegreen"}} label="map" avatar={<ChevronRightIcon />} /></Scroll>
              </nav>
            </div>
            
          </Container>
          <Box id="map">
            
          </Box>
        </>
      )}
      {!venue && <Typography variant="h1">Undefined id</Typography>}
    </div>
  );
}
