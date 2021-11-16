import { Avatar, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
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
    isAdmin:boolean;
}
const Chat:React.FC<ChatProps> = ({
   isAdmin,
    }: ChatProps) => {
  const classes = useStyles();

  const handleDirection=()=>{
      if(isAdmin) return 'row-reverse'; 
      else return 'row';
  }
  const handleJustification=()=>{
    if(isAdmin) return 'flex-end'; 
    else return 'flex-start';
}
const handleTextAlign=()=>{
    if(isAdmin) return 'right'; 
    else return 'left';
}

    return (
      <Grid item container className={classes.containerGrid} direction="column">
      <Grid item container className={classes.profileGrid} alignItems="center" direction={handleDirection()}>
        <Grid item container direction='column' justifyContent='center' alignItems='center' xs={1} style={{height:'inherit'}}>
        <Avatar alt="Remy Sharp" src="men.jpg" sx={{ width: 35, height: 35 }} />
        </Grid>
        <Grid item container xs direction='column' alignContent={handleJustification()}>
            <Paper elevation={1} className={classes.chatPaper}>
            <Typography variant="body2" textAlign="left">
            Richpanel Customer Data Platform uses Artificial Intelligence to predict links between customers and devices and store these relations in a graph database
            </Typography>
            </Paper>
            <Paper elevation={1} className={classes.chatPaper}>
            <Typography variant="body2" textAlign="left">
            Richpanel Customer Data Platform uses Artificial Intelligence to predict links between customers and devices and store these relations in a graph database
            </Typography>
            </Paper>
            <Paper elevation={1} className={classes.chatPaper}>
            <Typography variant="body2" textAlign="left">
            Richpanel Customer Data Platform uses Artificial Intelligence to predict links between customers and devices and store these relations in a graph database
            </Typography>
            </Paper>
            <Typography variant="caption" textAlign={handleTextAlign()} style={{marginTop:'12px'}}>
            Amit RG - Mar 05, 2:22 AM
          </Typography>
        </Grid>
        
      </Grid>
      
    </Grid>

    )
}

export default Chat