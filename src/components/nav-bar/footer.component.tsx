import { AppBar, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import { Box, Container } from "@mui/system";
export function FooterBar() {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography>Code by Travis Barnette</Typography>
        <Container maxWidth="xl">
          <Box sx={{ alignSelf: "felx-end", textAlign: "right" }}>
            <IconButton href="https://github.com/barnettet31">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://twitter.com/TravCodez">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/barnettetravis31/">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
