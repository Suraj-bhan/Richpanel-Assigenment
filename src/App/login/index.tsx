import { Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import FacebookLogin from 'react-facebook-login';
// import ChatPreview from './ChatPreview';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    height:'100vh',
    background:'#0e5295',
  },
  headerText:{
    color:'white'
  },
  paper:{
    width:'300px',
    height:'300px',
    padding:'12px 16px',
    margin:'32px 0px 0px 0px',
    borderRadius:'10px!important',
    display:'grid',
    alignItems:'center'
  
  },

  
}));

interface LoginProps{
  sendLoginData?:any;
}

const Login:React.FC<LoginProps> = ({
  sendLoginData,
   }: LoginProps) =>{
  const classes = useStyles();

    const responseFacebook = (response:any) => {
    sendLoginData!(response);
    console.log(response);
    }

    const componentClicked = (data:any) =>{
    console.log(data);
    }
    return (
      <Grid container className={classes.containerGrid} alignItems='center' direction='column'>
          <img src='Logos/sidebar-logo.png' alt='richpanel'/>
          <Typography variant="h3" className={classes.headerText}>
            Welcome to Richpanel
          </Typography>
          <Paper className={classes.paper}>
            <div style={{display:'grid', alignItems:'center'}}>
            <Typography style={{marginBottom:'12px'}}>
                Log into Facebook Account
            </Typography>
            <FacebookLogin
            appId="1054993238665007"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
            </div>
          </Paper>
      </Grid>

    )
}

export default Login