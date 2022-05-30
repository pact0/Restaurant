import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import restaurant_menu from "@assets/restaurant-data.json";
import { Product } from "@models/Product";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import styles from '../../assets/Product_styles.module.css';

export default function ProductDetailed({prod}) {
    return (
      <div className={styles.container}>
          <div className={styles.left}>
         <img src = {prod.image} objectFit="contain" layout="fill"/>
         </div>
         <div className={styles.right}>
          <h1 className={styles.title}> {prod.name} </h1>
          <p className={styles.price}>{prod.price} </p>
          <p className={styles.desc}>{prod.desc}</p>
          </div>
          <h3>Contents:</h3>
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
{        Object.entries(prod.allergens)
                .map( ([key, value]) => 
                value == 1 ?
                (<ListItem disablePadding>
                 <ListItemButton>
                    <ListItemIcon>
                       <InboxIcon />
                 </ListItemIcon>
                <ListItemText primary={key} />
                </ListItemButton>
            </ListItem>) 
            : null
                
                )}

        </List>
      </nav>
     
    </Box>
        
      </div>
    );
  }
  