import { Box, Container, Paper, Typography } from "@mui/material";
import venues from "../pages/data/venues.json"

export const VenueList = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <div>
        {venues.map((venue)=>{
          return(
            <div key={venue.id}>
              <Paper>
                <Typography variant="h5">{venue.name}</Typography>
                <div>

                </div>
                {venue.address}
              </Paper>
            </div>
          )
        })}
        </div>
      </Container>
    </Box>
  );
};
