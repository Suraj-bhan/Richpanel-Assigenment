import { Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

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

interface ChatPreviewProps{
  id?:string;
  data?:any;
}

const ChatPreview:React.FC<ChatPreviewProps> = ({
 id,
 data,
  }: ChatPreviewProps) =>{
  const classes = useStyles();
  const{conversationId}=useParams();

  const handleActiveConversationBackground=()=>{
    if(conversationId===id){
      return 'rgba(0,0,0,0.08)';
    }
  }

    return (
    
      <Link to={`/chat/${id}`} style={{textDecoration:'none', display:'border-box', width:'inherit', color:'inherit'}} >
      <Grid item container className={classes.containerGrid} style={{padding:'12px', width:'inherit', background: handleActiveConversationBackground(),}} alignItems='center'>
          <CheckBoxOutlineBlankIcon style={{marginRight:'12px', color:'#9e9e9e'}}/>

          <Grid item xs={8}>
          <Typography textAlign='left' variant='subtitle2'>
            {data.User}
          </Typography>
          <Typography textAlign='left' variant='body2'>
            Facebook DM
          </Typography>
          </Grid>
          <Grid item xs={2}>
          <Typography variant='body2'  textAlign='right' style={{paddingBottom:'16px'}}>
            10m
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography textAlign='left' variant='subtitle2' style={{marginTop:'12px'}}>
            {data.subject ? data.subject:'Awesome Product'}
          </Typography>
          </Grid>
          <Grid item xs={12} style={{width:'inherit'}}>
          <Typography noWrap textAlign='left' variant='body2' style={{width:'inherit'}}>
           {/* {data.messages && data.messages.message} */}
           Form dialogs allow users to fill out form fields within a dialog. For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'.
          </Typography>
          </Grid>
      </Grid>
      </Link>
    )
}

export default ChatPreview