import { Grid, Tab, Tabs, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import ChatPreview from './ChatPreview';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    height:'100%'
    // [theme.breakpoints.down('sm')]:{
    //    background: 'linear-gradient(to bottom, #16222A, #3B6073)',
    // }
  },
  profileGrid:{
    height:'60px',  
    border:'1px solid rgba(0,0,0,0.2)',
    borderRight:'none',
    borderLeft:'none'
  },
  customerGrid:{
    background:'#e8eaf6',
    // height:'100%',
    display:'flex'
  },
  Avatar:{
    margin:'12px 0px',
  },
  Button:{
    margin:'12px',
    width:'100px',
  },
  paper:{
    width:'85%',
    // height:'100%',
    padding:'12px 16px',
    margin:'16px',
    borderRadius:'10px'
  },
  paperTitle:{
    margin:'6px 0px'
  },
  paperItems:{
    margin:'8px 0px'
  },
  viewMoreButton:{
    color: '#1976d2',
    cursor:'pointer'
  }
  
}));


function ChatMenu() {
  const classes = useStyles();
    return (
      <Grid item container className={classes.containerGrid} direction="column">
      <Grid item container className={classes.profileGrid} alignItems="center">
        <Grid item xs={2}>
          <MenuIcon />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" textAlign="left">
            Converstions
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <ReplayIcon />
        </Grid>
      </Grid>
      <Grid item container>
        <ChatPreview/>
        <ChatPreview/>
        <ChatPreview/>
      </Grid>
    </Grid>

    )
}

export default ChatMenu