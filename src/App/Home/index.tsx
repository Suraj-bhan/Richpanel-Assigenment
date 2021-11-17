import { Grid, Typography } from '@mui/material';
import React from 'react'
import { makeStyles } from '@mui/styles';
import SideBar from '../SideBar';

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
  imgGrid:{
    display:'grid', alignItems:'center', marginBottom:'12px'
  }
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
            <div className={classes.imgGrid}>
             <img src='welcome.svg' alt='welcome' height='90%' width='90%'/>
            </div>
      </Grid>
      </Grid>

    )
}

export default People