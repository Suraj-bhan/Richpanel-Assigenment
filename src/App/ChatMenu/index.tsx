import { Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import ChatPreview from './ChatPreview';
import db from '../../FirebaseComp';
import StartNewChat from '../StartNewChat';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    height:'100%'
  },
  profileGrid:{
    height:'60px',  
    border:'1px solid rgba(0,0,0,0.2)',
    borderRight:'none',
    borderLeft:'none'
  }
}));

interface ChatMenuProps{
  loginData?:any;
}

const ChatMenu:React.FC<ChatMenuProps> = ({
loginData,
  }: ChatMenuProps) => {
  const classes = useStyles();
  const [Converstions,setConversations]=React.useState<any>();

  useEffect(() => {
    const unsubscribe = db.collection('conversations').onSnapshot((snapshot:any) => setConversations(snapshot.docs.map((doc:any)=>({
            id: doc.id,
            data: doc.data(),
            }))
        )
        );
        return () => {
            unsubscribe();
        }
    }, [])

    return (
      <Grid item container className={classes.containerGrid} direction="column">
      <Grid item container className={classes.profileGrid} alignItems="center">
        <Grid item xs={2}>
          <MenuIcon />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" textAlign="left">
            Conversations
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <ReplayIcon />
        </Grid>
      </Grid>
      <Grid item style={{overflow:'auto', height:`calc(100vh - 65px)`, position:'relative', width:'inherit'}} alignItems='flex-start'>
         <StartNewChat loginData={loginData}/>
        {Converstions && Converstions.map((chat:any)=>
        <>
         { ((chat.data.User==loginData.name) || (loginData.name=='Suraj Bhan Mundotiya')) &&(
            <ChatPreview key={chat.id} id={chat.id} data={chat.data}/>)
         }
         </>
        )}
      </Grid>
    </Grid>

    )
}

export default ChatMenu