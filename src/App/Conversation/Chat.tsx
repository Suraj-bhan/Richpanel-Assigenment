import { Avatar, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import React, { useEffect } from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import { useParams } from 'react-router';
import db from '../../FirebaseComp';
// import ChatPreview from './ChatPreview';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    //   background:'rgba(0,0,0,0.04)',
    //   overflow:'scroll'
    // border:'0.5px solid rgba(0,0,0,0.2)',
    // height:'100%'
    // [theme.breakpoints.down('sm')]:{
    //    background: 'linear-gradient(to bottom, #16222A, #3B6073)',
    // }
  },
  profileGrid:{
    // height:'60px',  
    // border:'1px solid rgba(0,0,0,0.2)',
    borderRight:'none',
    borderLeft:'none'
  },
  chatPaper:{
    margin:'8px 0px 2px 0px',
    padding:'6px',
    maxWidth:'400px'
  },
  
}));

interface ChatProps{
    isAdmin?:boolean;
    loginData?:any;
}
const Chat:React.FC<ChatProps> = ({
   isAdmin,
   loginData
    }: ChatProps) => {
  const classes = useStyles();
  const{conversationId}=useParams();
  const [messages,setMessages]=React.useState<any>([]);
  const [input, setInput] = React.useState<string>("");
  const [userData,setUserData]=React.useState<any>();
  const [lastTime,setLastTime]=React.useState<any>();
  const [showTime,setShowTime]=React.useState<boolean>(true);


  useEffect(() => {
    if(conversationId){
      db.collection("conversations").doc(conversationId).collection("messages").orderBy("Timestamp","asc").onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())))
      db.collection('conversations').doc(conversationId).onSnapshot((snapshot:any)=>{
        setUserData(snapshot.data())
      })
       }
    
   }, [conversationId])

  //  const handleImageSrc=(user:string)=>{
  //   if(user===loginData.name) return userData && userData.Picture; 
  //   else return loginData && loginData.picture && loginData.picture && loginData.picture.data && loginData.picture.data.url;
  //  }
   const handleLastMessage=(user:string)=>{
    //  if(lastTime && user!==lastTime){
    //   // setShowTime(true);
    //   // setLastTime(user);
    //  }
    //  else setShowTime(false);
   }


  const handleDirection=(user:string)=>{
      handleLastMessage(user);
      if(user===loginData.name) return 'row-reverse'; 
      else return 'row';
  }
  const handleJustification=(user:string)=>{
    if(user===loginData.name) return 'flex-end'; 
    else return 'flex-start';
}
const handleTextAlign=(user:string)=>{
    if(user===loginData.name) return 'right'; 
    else return 'left';
}

    return (
      <Grid item container className={classes.containerGrid} direction="column">
       {messages.map((message:any)=>
      <Grid item container className={classes.profileGrid} alignItems="center" direction={handleDirection(message.name)}>
        {showTime && 
        <Grid item container direction='column' justifyContent='center' alignItems='center' xs={1} style={{height:'inherit'}}>
        <Avatar alt="Remy Sharp" src={message.picture} sx={{ width: 35, height: 35 }} />
        </Grid>
        }
        <Grid item container xs direction='column' alignContent={handleJustification(message.name)}>
            <Paper elevation={1} className={classes.chatPaper}>
            <Typography variant="body2" textAlign="left">
            {message.message}
            </Typography>
            </Paper>
            {showTime && 
            <Typography noWrap variant="caption" textAlign={handleTextAlign(message.name)} style={{marginTop:'12px', maxWidth:'200px'}}>
            {message.name.substr(0,message.name.indexOf(' '))}<span style={{marginLeft:'6px'}}>{new Date(message.Timestamp?.toDate()).toUTCString()}</span>
            </Typography>
            }
        </Grid>
        
      </Grid>
       )}
    </Grid>

    )
}

export default Chat