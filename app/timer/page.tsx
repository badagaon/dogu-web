import CountdownTimer from "@/components/CountdownTimer";
import ListCountdownTimerRelays from "@/components/ListCountdownTimerRelays";
import ListCountdownTimers from "@/components/ListCountdownTimers";
import Timer from "@/components/Timer";
import Grid from "@mui/material/Grid";
import { FC } from "react";

const TimerPage: FC = () => {
  return (
    <Grid container direction='row' spacing={2}>
      <Grid item xs={4}>
        <CountdownTimer initialSeconds={60} />
      </Grid>
      <Grid item xs={4}>
        <ListCountdownTimers />
      </Grid>
      <Grid item xs={4}>
        <ListCountdownTimerRelays />
      </Grid>
    </Grid>
  );
}

export default TimerPage;