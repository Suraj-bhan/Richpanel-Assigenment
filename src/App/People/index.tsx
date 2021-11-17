import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { makeStyles } from '@mui/styles';
import SideBar from '../SideBar';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    height:'100vh',
  },
  paper:{
    width:'80%',
    height:'80%',
    padding:'12px 16px',
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