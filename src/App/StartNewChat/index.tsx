import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField} from '@mui/material';
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
  const [open, setOpen] = React.useState(false);
  const [subject, setSubject] = React.useState<any>();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createNewChat=(e:any)=>{
    e.preventDefault();
    if(loginData && subject){
    db.collection("conversations").add({
    User: loginData && loginData.name,
    Picture: loginData && loginData.picture && loginData.picture && loginData.picture.data && loginData.picture.data.url ? loginData.picture.data.url: '',
    email:loginData && loginData.email ? loginData.email : '',
    subject: subject,
    })};
    handleClose();
    setSubject(undefined);
   }
    return (
      <Grid item container className={classes.containerGrid} style={{}} alignItems='center'>
          <Button onClick={handleClickOpen} style={{width:'inherit', height:'inherit',padding:'12px'}}>
              Start a new conversation <ChatIcon fontSize='small' style={{marginLeft:'6px'}}/>
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add a conversation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please add a subject of the conversation.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Subject"
                type="text"
                fullWidth
                variant="outlined"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={createNewChat}>Start Conversation</Button>
            </DialogActions>
          </Dialog>
      </Grid>
    )
}
  
export default StartNewChat