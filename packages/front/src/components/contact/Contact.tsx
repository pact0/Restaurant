import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";


export const Contact = (props: {}) => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://www.westend61.de/images/0001035062pw/male-and-female-chefs-using-cordless-phone-and-digital-tablet-in-kitchen-MASF08654.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{ paddingTop: "12%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }} align="center">
            Kontakt
          </Typography>
        </Box>
        <Box
          sx={{ paddingTop: "12%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography sx={{ color: "black", fontWeight: 300, fontSize: 18 }} align="center">
            Nasi pracownicy z niecierpliowścią czekają na Was w naszej restuaracji! Możecie nas znaleźć na ulicy
          </Typography>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
            Burguntowej 13 w Michałowie
          </Typography>
          <Typography sx={{ color: "black", fontWeight: 300, fontSize: 34 }} align="center">
            w godzinach
          </Typography>
        </Box>
        <Box
          sx={{ paddingRight: "34%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography sx={{ color: "black", fontWeight: 300, fontSize: 24 }}>
            Poniedziałek - Piątek: 9-18 
          </Typography>
        </Box>
        <Box
          sx={{ paddingLeft: "4%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography sx={{ color: "black", fontWeight: 300, fontSize: 24 }}>
            Sobota: 12-20 
          </Typography>
        </Box>
        <Box
          sx={{ paddingLeft: "30%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography sx={{ color: "black", fontWeight: 300, fontSize: 24 }}>
            Niedziela: 10-14 
          </Typography>
        </Box>
        <Box
          sx={{ paddingTop: "6%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography sx={{ color: "black", fontWeight: 300, fontSize: 18 }} align="center">
            Jeśli nie możecie się znami zobaczyć to napiszcie do Nas albo zadzwońcie
          </Typography>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
            tel: 126 172 351
          </Typography>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} align="center">
            email: aleRestauracja@food.in
          </Typography>
        </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
