import { EventHistory } from "@/components/EventHistory";
import { Header } from "@/components/Header";
import { venueType } from "@/types/venueType";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import venues from "../../data/venues.json";
import mapImage from "../../images/map.png";

export default function Detail() {
  const id = useRouter().query.id;

  const [venue, setVenue] = useState<venueType | null>(null);
  useEffect(() => {
    if (id && typeof id === "string") {
      const isVenue = venues.find((e) => e.id === id);
      if (isVenue) {
        setVenue(isVenue);
      } else {
        setVenue(null);
      }
    } else {
      setVenue(null);
    }
  }, [id]);

  return (
    <div>
      <Header
        searchAddress={""}
        setSearchAddress={() => {}}
        onSearchVenues={() => {}}
        searchKeyword={""}
        setSearchKeyword={() => {}}
      />
      {venue && (
        <>
          <Container>
            <Image src={venue.picture} alt="venue" width="1000" height="320" />
          </Container>
          <Container sx={{ display: "flex", height: 226, pt: 5 }}>
            <Box sx={{ width: 600 }}>
              <Box sx={{ width: 480 }}>
                <Box sx={{ display: "flex", pb: 1 }}>
                  {venue.placeType.map((type, index) => {
                    return (
                      <Chip
                        key={index}
                        label={type}
                        variant="outlined"
                        sx={{ bgcolor: "#FFFDE7", mr: 1 }}
                      />
                    );
                  })}
                  {venue.eventsType.map((type, index) => {
                    return (
                      <Chip
                        key={index}
                        label={type}
                        variant="outlined"
                        sx={{ bgcolor: "#E0F2F1", mr: 1 }}
                      />
                    );
                  })}
                </Box>
                <Box
                  sx={{
                    height: 126,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Typography variant="h4">{venue.name}</Typography>
                  </div>
                  <Typography variant="body1">{venue.address}</Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ width: 80 }}>Price:</Typography>
                    <Typography> ${venue.price} /h</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ width: 80 }}>Capacity:</Typography>
                    <Typography>{venue.capacity} person</Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  fullWidth
                >
                  Contact
                </Button>
              </Box>
            </Box>
            <Box>
              <Image
                src={mapImage}
                alt="map"
                style={{ width: "480", height: "226px" }}
              />
            </Box>
          </Container>
          <Container>
            <Box sx={{ mt: 2, width: 1000 }}>
              <Typography>Event history at this Venue:</Typography>
              <EventHistory histories={venue.histories} />
            </Box>
          </Container>
        </>
      )}
      {!venue && <Typography variant="h1">Undefined id</Typography>}
    </div>
  );
}
