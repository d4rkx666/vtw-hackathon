import { Box, Card, CardContent, Chip, Container, Paper, Typography } from "@mui/material";
import venues from "../pages/data/venues.json"

export const VenueList = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <div>
        {venues.map((venue)=>{
          return(
            <div key={venue.id} className="my-3">
              <Card>
                <CardContent>

                  <Typography variant="h5">{venue.name}</Typography>
                  <div>
                    <div className="flex">
                      <Typography sx={{width:80}}>Capacity:</Typography>
                      <Typography>{venue.capacity}</Typography>
                    </div>
                    <div className="flex">
                      <Typography sx={{width:80}}>Contact:</Typography>
                      <Typography>{venue.contact}</Typography>
                    </div>
                    
                    <div className="flex">
                      <Typography sx={{width:80}}>Place type:</Typography>
                      {venue.placeType.map((type, index) => {
                        return(<Chip key={index} label={type} />)
                      })}
                    </div>
                    <div className="flex">
                    <Typography sx={{width:80}}>Events type:</Typography>
                      {venue.eventsType.map((type, index) => {
                        return(<Chip key={index} label={type} />)
                      })}
                    </div>
                    <div className="flex">
                      <Typography sx={{width:80}}>Address:</Typography>
                      <Typography>{venue.address}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}
        </div>
      </Container>
    </Box>
  );
};
