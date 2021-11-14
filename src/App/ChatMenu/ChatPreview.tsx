import { Avatar, Button, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    cursor:'pointer',
    '&:hover': {
     background: 'rgba(0,0,0,0.04)',
    },
    // height:'100%'
    // [theme.breakpoints.down('sm')]:{
    //    background: 'linear-gradient(to bottom, #16222A, #3B6073)',
    // }
  },
  profileGrid:{
    height:'250px',  
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



function ChatPreview() {
  const classes = useStyles();
    return (
      <Grid item container className={classes.containerGrid} style={{padding:'12px'}} alignItems='center'>
        {/* <Grid item container > */}

          <CheckBoxOutlineBlankIcon style={{marginRight:'12px'}}/>

          <Grid item xs={8}>
          <Typography textAlign='left' variant='subtitle2'>
            Amit RG
          </Typography>
          <Typography textAlign='left' variant='body2'>
            Facebook DM
          </Typography>
          </Grid>
          <Grid item xs={2}>
          <Typography>
            10m
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography textAlign='left' variant='subtitle2' style={{marginTop:'12px'}}>
            Awesome Product
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography noWrap textAlign='left' variant='body2'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </Typography>
          </Grid>
        {/* </Grid> */}
      </Grid>
    )
}

export default ChatPreview