import { Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import FacebookLogin from 'react-facebook-login';
import SideBar from '../SideBar';
// import ChatPreview from './ChatPreview';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    height:'100vh',
    // background:'#0e5295',
  },
  headerText:{
    color:'white'
  },
  paper:{
    width:'80%',
    height:'80%',
    padding:'12px 16px',
    // margin:'32px 0px 0px 0px',
    borderRadius:'10px!important',
    display:'grid',
    alignItems:'center'
  
  },

  
}));

interface PeopleProps{
  loginData?:any
  sendLoginData?:any;
}

const People:React.FC<PeopleProps> = ({
  sendLoginData,
  loginData
   }: PeopleProps) =>{
  const classes = useStyles();

    const responseFacebook = (response:any) => {
    sendLoginData!(response);
    console.log(response);
    }

    const componentClicked = (data:any) =>{
    console.log(data);
    }
    return (
        <Grid
        container
        >
        <Grid item xs={1} 
        style={{background:'#0e5295'}}
        >
        <SideBar loginData={loginData}/>
        </Grid>
      <Grid container item xs className={classes.containerGrid} alignItems='center' justifyContent='center' direction='column'>
          {/* <img src='Logos/sidebar-logo.png' alt='richpanel'/> */}
          
          <Paper className={classes.paper}>
            <div style={{display:'grid', alignItems:'center', justifyContent:'center'}}>
             <img src='build.svg' alt='no graph' height='87%' width='87%'/>
             <Typography variant='h5'>
                 Hold on! Page build in progress
             </Typography>
            </div>
          </Paper>
      </Grid>
      </Grid>

    )
}

export default People