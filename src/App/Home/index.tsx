import { Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import FacebookLogin from 'react-facebook-login';
import SideBar from '../SideBar';
// import ChatPreview from './ChatPreview';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    height:'100vh',
    background:'#0e5295',
    marginTop:'200px'
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
      <Grid container item xs className={classes.containerGrid} alignItems='center' justifyContent='space-between' direction='column'>
         <Grid item>
          <img src='Logos/sidebarlogo.png' alt='richpanel'/>
          <Typography variant="h3" className={classes.headerText}>
            Welcome to Richpanel
          </Typography>
          </Grid>
          {/* <Paper className={classes.paper}> */}
            <div style={{display:'grid', alignItems:'center', marginBottom:'12px'}}>
             <img src='welcome.svg' alt='welcome' height='90%' width='90%'/>
            
            </div>
          {/* </Paper> */}
      </Grid>
      </Grid>

    )
}

export default People