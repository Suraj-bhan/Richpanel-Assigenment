import { Button, Grid} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
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
    })}
   }
    return (
      <Grid item container className={classes.containerGrid} style={{}} alignItems='center'>
          <Button onClick={createNewChat} style={{width:'inherit', height:'inherit',padding:'12px'}}>
              Start a new conversation <ChatIcon fontSize='small' style={{marginLeft:'6px'}}/>
          </Button>
      </Grid>
    )
}
  
export default StartNewChat