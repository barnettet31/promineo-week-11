import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LayoutContainer } from "../../components/layout/layout.component";

export function LandingPage() {
  return (
    <>
      <Typography variant="h2">React TicTac Toe</Typography>
      <Typography variant="h4">Hello everyone!</Typography>
      <Typography variant="body1">
        This week I decided to make a to do list app using typescript!
      </Typography>
      <Typography variant="body1">
        It was a lot of fun to make and I learned a lot about typescript and how
        to use it.
      </Typography>
      <Typography variant="body1">
        It was also a lot of fun to make a to do list app because I use to do
        list apps all the time.
      </Typography>
      <Typography variant="body1">
        Wanna check it out? Click on the button below
      </Typography>
      <Button variant="contained" component={Link} to="/app" >
        <Typography variant="button">My App</Typography>
      </Button>
    </>
  );
}
