import { venueType } from "@/types/venueType";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Typography,
} from "@mui/material";

type Props = {
  venues: venueType[];
};

export const VenueList = ({ venues }: Props) => {
  return (
    <Box>
      <Container maxWidth="sm">
        <div>
          {venues.map((venue: any) => {
            return (
              <div key={venue.id} className="my-3">
                <Card>
                  <CardContent>
                    <Container>
                      <Box sx={{ display: "flex" }}>
                        {venue.placeType.map((type: any, index: number) => {
                          return (
                            <Chip
                              key={index}
                              label={type}
                              variant="outlined"
                              sx={{ bgcolor: "#FFFDE7", mr: 1 }}
                            />
                          );
                        })}
                        {venue.eventsType.map((type: any, index: number) => {
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
                      <Box sx={{ py: 2 }}>
                        <Typography variant="h5">{venue.name}</Typography>
                        <Typography variant="body1">{venue.address}</Typography>
                        <Box sx={{ display: "flex" }}>
                          <Typography sx={{ width: 110 }}>
                            Price: ${venue.price} /h
                          </Typography>
                          <Typography sx={{ width: 10 }}>|</Typography>
                          <Typography>
                            Capacity: {venue.capacity} person
                          </Typography>
                        </Box>
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        href={`/detail/${venue.id}`}
                      >
                        READ MORE
                      </Button>
                    </Container>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </Box>
  );
};
