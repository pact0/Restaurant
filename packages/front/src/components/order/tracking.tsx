import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "../assets/img/background.jpg";
import restaurant_menu from "@assets/restaurant-data.json";
import React, { useEffect, useState } from "react";
import { Product } from "@models/Product";
import { Order } from "@models/Order";
import { ProductCard } from "../products/ListingPage";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Avatar from '@mui/material/Avatar';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import SoupKitchenRoundedIcon from '@mui/icons-material/SoupKitchenRounded';
import SportsMotorsportsRoundedIcon from '@mui/icons-material/SportsMotorsportsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {CartProductCard} from "../cart/CartProductCard";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Tooltip from '@mui/material/Tooltip';


export const Tracking = () => {
  const [products, setProducts] = useState([]);

  const [value, setValue] = React.useState<number | null>(2);


  let zmienna = restaurant_menu.restaurant_menu;

  useEffect(() => {
    setProducts(restaurant_menu.restaurant_menu);
  }, []);

  let dummyOrders: Order = {
    id: "1",
    price: " 127 zł",
    image: zmienna[0].image,
    items: [zmienna[0],zmienna[11],zmienna[21]],
    date:"12.04.2022"
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: '#fc8930',
        main: '#fc8930',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#63e663',
        main: '#63e663',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        background: "#ffedab",
        backgroundSize: "cover",
        height:"100vh"
      }}>
      <CssBaseline />
      <Box
        sx={{
          background: "#fc8930",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography sx={{ color: "white", fontWeight: 500, fontSize: 64 }}>
         Śledzenie zamówienia
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{p:4}}>

      <Typography sx={{ color: "black", fontWeight: 300, fontSize: 32,              borderBottom: 1,
              borderColor: '#fc8930' }}>
                
         Twoje zamówienie jest przygotowywane, miej je na oku!
         
        </Typography>

        </Grid>

        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{p:8}} >
        <Grid item xs={6} sx={{pl:10,borderRight:1,borderColor: '#fc8930'}} >
        <Grid container sx={{borderBottom: 1,
              borderColor: '#fc8930', width: '95%'}}>
        <Grid item xs={8} >
        <Typography sx={{ color: "black", fontWeight: 300, fontSize: 24}}>
         Zamówienie z <b>{dummyOrders.date}</b>  </Typography></Grid>
         <Grid item xs={4}  ><Typography sx={{color: "black", fontWeight: 300, fontSize: 24,}}>Suma: <b>{dummyOrders.price}</b> </Typography></Grid>
        
        </Grid>
        <List sx={{ width: '90%'}}>
        {dummyOrders.items.map((product: Product) => {
            return (
              <ListItem sx={{m:2, bgcolor:"white", color:"black", borderRadius:5}}>
              <ListItemAvatar>
                <Avatar src={require('../../assets/img/'.concat(product.id).concat('.jpg')).default}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <Link href={product.id} underline="hover" sx={{ color: "black" }}>
                <ListItemText primary={product.name} secondary={product.price} />
              </Link>
            </ListItem>
            );
          })}

    
    </List>

        </Grid>
        <Grid item xs={6}>
        <ThemeProvider theme={theme}>
      <Timeline position="alternate" sx={{ color: "black"}}>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="black"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SoupKitchenRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '22px', px: 2 }}>
          <Typography>Twoje zamówienie jest przygotowywane!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SportsMotorsportsRoundedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '24px', px: 2 }}>
          <Typography>Kurier jest w drodze po twoje zamównienie!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <HomeRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '24px', px: 2 }}>
          <Typography>Kurier już do ciebie jedzie!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="black"
        >
          11:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <CheckCircleOutlineRoundedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '22px', px: 2,color:"gray" }}>

          <Typography>Zamówienie dostarczone!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </ThemeProvider>
    </Grid>
    </Grid>
    </Container>
  );
};
