import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import styles from "../../assets/Product_styles.module.css";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Rating from "@mui/material/Rating";
import * as React from "react";

export default function ProductDetailed({ prod }) {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Container
      sx={{ background: "#21242e", height: "100vh", minWidth: "100%" }}>
      <Container>
        <Grid container spacing={2} sx={{ minWidth: "75%" }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundImage: "url(" + prod.image + ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              mt: 2,
              height: "100vh",
            }}></Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ background: "#FFFFFF", mt: 2, color: "black" }}>
            <Box sx={{mb:4}}>
            <Grid container>
              <Grid item sx={{ mr: 4 }}>
                <Typography
                  sx={{ color: "black", fontWeight: 100, fontSize: 50 }}>
                  {prod.name}
                </Typography>
              </Grid>

            </Grid>
            <Grid item>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Grid>
              </Box>
            <Grid container>
              <Grid item sx={{ mr: 4 }}>
                <span className={styles.price}>{prod.price} </span>
              </Grid>

            </Grid>

            <Typography
              sx={{
                color: "black",
                fontWeight: 300,
                fontSize: 14,
                py: 5,
                pr: 5,
                pl: 0,
              }}>
              {prod.desc}
            </Typography>
            <Grid item sx={{mb:3}}>
                {" "}
                <div className={styles.add}>
                  <input
                    type="number"
                    defaultValue={1}
                    className={styles.quantity}
                  />
                  <button className={styles.button}>Add to Cart</button>
                </div>
              </Grid>
            <Typography sx={{ color: "black", fontWeight: 500, fontSize: 24 }}>
              Alergeny
            </Typography>
            <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "#fff" }}>
              <nav aria-label="main mailbox folders">
                <List>
                  {Object.entries(prod.allergens).map(([key, value]) =>
                    value == 1 ? (
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <PriorityHighIcon />
                          </ListItemIcon>
                          <ListItemText primary={key} />
                        </ListItemButton>
                      </ListItem>
                    ) : null
                  )}
                </List>
              </nav>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
