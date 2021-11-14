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

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    // borderRight:'none',
    // borderLeft:'none'
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
background:'#e8eaf6'
  },
  Avatar:{
    margin:'12px 0px',
  },
  Button:{
    margin:'12px',
    width:'100px',
  }

}));



function ProfileMenu() {
  const classes = useStyles();
    return (
      <Grid item container direction="column" className={classes.containerGrid}>
        <Grid item container className={classes.profileGrid} justifyContent="space-between" alignItems="center">
           <Grid container direction="column" item alignItems="center">
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 70, height: 70 }} className={classes.Avatar}/>
           <Typography variant="h6">
             Amit RG
           </Typography>
           <Typography variant="subtitle1">
             Offline
           </Typography>
           </Grid>
           <Grid container justifyContent="center" item xs>
 
           <Button variant="outlined" size="small" className={classes.Button}><CallIcon/> Call</Button>
           <Button variant="outlined" size="small" className={classes.Button}><AccountCircleIcon/> Profile</Button>

           </Grid>
        </Grid>
        <Grid item container className={classes.customerGrid} justifyContent="space-between" alignItems="center">
           
           <Grid container direction="column" item alignItems="center">
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 70, height: 70 }} className={classes.Avatar}/>
           <Typography variant="h6">
             Amit RG
           </Typography>
           <Typography variant="subtitle1">
             Offline
           </Typography>
           </Grid>
           <Grid container justifyContent="center" item xs>
 
           <Button variant="outlined" size="small" className={classes.Button}><CallIcon/> Call</Button>
           <Button variant="outlined" size="small" className={classes.Button}><AccountCircleIcon/> Profile</Button>

           </Grid>
        </Grid>
        
      </Grid>
    )
}

export default ProfileMenu