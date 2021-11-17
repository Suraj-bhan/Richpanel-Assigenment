import { Grid, OutlinedInput, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import db from '../../FirebaseComp';
import firebase from 'firebase/compat/app';
import { makeStyles } from '@mui/styles';
import Chat from './Chat';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    height:'100%'
  },
  profileGrid:{
    height:'60px',  
    border:'1px solid rgba(0,0,0,0.2)',
    borderRight:'none',
    borderLeft:'none',
    background:'white'
  },

}));

interface ConversationProps{
  loginData?:any;
}

const Conversation:React.FC<ConversationProps> = ({
loginData,
  }: ConversationProps) =>{
  const classes = useStyles();
  const [text,setText]=React.useState<string>();
  const {conversationId}=useParams();
  const [userName,setUserName]=React.useState<string>('');
  const [isUser,setUser]=React.useState<boolean>(false);

  useEffect(() => {
   if(conversationId){
      db.collection('conversations').doc(conversationId).onSnapshot((snapshot:any)=>{
        setUserName(snapshot.data().User);
        if(loginData && snapshot.data().User === loginData.name )setUser(true);
      })
      }
      
  }, [conversationId, loginData])

  const sendMessage = (e:any) => {
    e.preventDefault();
    db.collection("conversations").doc(conversationId).collection("messages").add({
        message: text,
        name:loginData && loginData.name,
        Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        picture: loginData && loginData.picture && loginData.picture && loginData.picture.data && loginData.picture.data.url
    })
    setText("");
}

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
          <Chat isAdmin={isUser} loginData={loginData}/>
        </Grid>
        <Grid item style={{background:'transparent',}}>
          <form>
        <OutlinedInput placeholder={`Message ${userName}`} value={text} onChange={(e)=>setText(e.target.value)} size='small' style={{width:'85%', marginTop:'12px',}}/>
        <button onClick={sendMessage} type="submit" style={{display:'none'}}>Send a message</button>
        </form>
        </Grid>
      </Grid>
    )
}

export default Conversation