import { Grid, OutlinedInput, Tab, Tabs, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import React, { useEffect } from 'react'
import db from '../../FirebaseComp';

import { createStyles, makeStyles } from '@mui/styles';
import Chat from './Chat';
import { useParams } from 'react-router';
// import { useParams } from 'react-router';


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

}));


function Conversation() {
  const classes = useStyles();
  const [text,setText]=React.useState<string>();
  const {conversationId}=useParams();
  const [userName,setUserName]=React.useState<string>('');

  useEffect(() => {
   if(conversationId){
      db.collection('conversations').doc(conversationId).onSnapshot((snapshot:any)=>{
        setUserName(snapshot.data().User);
      })
   }
  }, [conversationId])

    return (
      <Grid item container className={classes.containerGrid} direction="column" style={{background:'rgba(0,0,0,0.04)',}}>
        <Grid item container className={classes.profileGrid} justifyContent="space-between" alignItems="center">
           <Grid container item >
           <Grid item xs>
           <Typography style={{paddingLeft:'16px'}} variant='h6' textAlign='left'>
           {userName}
           </Typography>
           </Grid>
           </Grid>
        </Grid>
        <Grid item style={{overflow:'auto', height:`calc(100vh - 130px)`, position:'relative',  }}>
          <Chat isAdmin={false}/>
          {/* <Chat isAdmin={true}/> */}
          {/* <Chat isAdmin={true}/> */}
          {/* <Chat isAdmin={true}/> */}
          
      
          {/* <input type='text' value={text} onChange={(e)=>setText(e.target.value)} /> */}
        </Grid>
        <Grid item style={{background:'transparent',}}>
        <OutlinedInput placeholder="Message the user" value={text} onChange={(e)=>setText(e.target.value)} size='small' style={{width:'85%', marginTop:'12px',}}/>
        </Grid>
       
      </Grid>
    )
}

export default Conversation