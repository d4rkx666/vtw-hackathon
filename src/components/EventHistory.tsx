import { EventHistoryType } from "@/types/venueType";
import { Card, CardContent, Chip, Typography } from "@mui/material";

type Props = {
  histories: EventHistoryType[];
};
export const EventHistory = ({ histories }: Props) => {
  console.log(histories);

  return (
    <div>
      {histories && histories.map((history, index) => {
        return(
          <Card key={index}>
            <CardContent>
              <div className="flex justify-between">
                <Typography>{history.date}</Typography>
                <Chip
                  key={index}
                  label={history.eventType}
                  variant="outlined"
                  sx={{ bgcolor: "#E0F2F1", mr: 1 }}
                />
              </div>
              <Typography>{history.eventName}</Typography>
              <Typography>{history.eventOrganizer}</Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>
  );
};
