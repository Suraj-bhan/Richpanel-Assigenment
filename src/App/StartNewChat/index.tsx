import { Avatar, Button, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Link } from 'react-router-dom';
import db from '../../FirebaseComp';
import ChatIcon from '@mui/icons-material/Chat';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    borderLeft:'none',
    borderRight:'none',
    cursor:'pointer',
    '&:hover': {
     background: 'rgba(0,0,0,0.04)',
    },
    // height:'100%'
    // [theme.breakpoints.down('sm')]:{
    //    background: 'linear-gradient(to bottom, #16222A, #3B6073)',
    // }
  }

}));

interface StartNewChatProps{
  loginData?:any;
}

const StartNewChat:React.FC<StartNewChatProps> = ({
 loginData
  }: StartNewChatProps) =>{
  const classes = useStyles();

  const createNewChat=(e:any)=>{
    e.preventDefault();
    if(loginData){
    db.collection("conversations").add({
    User: loginData && loginData.name,
    Picture: loginData && loginData.picture && loginData.picture && loginData.picture.data && loginData.picture.data.url ? loginData.picture.data.url: '',
    email:loginData && loginData.email ? loginData.email : ''
    })
   }
}

  // console.log(data);
    return (
    
     
      <Grid item container className={classes.containerGrid} style={{}} alignItems='center'>
          <Button onClick={createNewChat} style={{width:'inherit', height:'inherit',padding:'12px'}}>
              Start a new conversation <ChatIcon fontSize='small' style={{marginLeft:'6px'}}/>
          </Button>
          
      </Grid>
    
    )
}
  
export default StartNewChat