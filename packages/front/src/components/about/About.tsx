import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";


export const About = (props: {}) => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage:
              // "url(https://bromabakery.com/wp-content/uploads/2018/01/Olympus-Instantly-Improve-Your-Restaurant-Photography-9-1067x1423.jpg",
              "url(https://bromabakery.com/wp-content/uploads/2018/01/Olympus-Instantly-Improve-Your-Restaurant-Photography-7.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <Box
          sx={{ paddingTop: "12%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }} align="center">
            O nas
          </Typography>
        </Box>
        <Box
          sx={{ paddingTop: "12%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography sx={{ color: "black", fontWeight: 300, fontSize: 18 }} align="center">
          <b>Placeholder</b> to bezpretensjonalna atmosfera, swobodna obsługa, nowoczesna autorska odsłona polskich kuchni regionalnych i najlepsze sezonowe produkty. Nie gwiazdorzymy, gotujemy dla ludzi!
          </Typography>
        </Box>
        <Box
          sx={{ paddingTop: "6%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography sx={{ color: "black", fontWeight: 300, fontSize: 18 }} align="center">
          Wysoką jakość, której doświadczyliśmy w restauracjach wyróżnionych gwiazdkami Michelin na świecie, wprowadzamy do naszej restauracji <b>Placeholder</b> w Michałowie.
          Żeby ją utrzymać, pracujemy jednym zespołem.<br></br>
          Jesteśmy dla Was dostępni cały tydzień, abyście codziennie mogli cieszyć się naszymi daniami.
          Sami robimy zakupy – u Pana Ziółko, Państwa Majlertów, ryby przywozi Pan Bernard, kupujemy ekologiczne i możliwie najlepsze produkty.
          </Typography>
        </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
