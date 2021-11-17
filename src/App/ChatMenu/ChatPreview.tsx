import { Avatar, Button, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Link } from 'react-router-dom';

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

interface ChatPreviewProps{
  id?:string;
  data?:any;
}

const ChatPreview:React.FC<ChatPreviewProps> = ({
 id,
 data,
  }: ChatPreviewProps) =>{
  const classes = useStyles();

  // console.log(data);
    return (
    
      <Link to={`/chat/${id}`} style={{textDecoration:'none', display:'border-box', width:'inherit', color:'inherit'}} >
      <Grid item container className={classes.containerGrid} style={{padding:'12px'}} alignItems='center'>
        {/* <Grid item container > */}

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
            Awesome Product
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography noWrap textAlign='left' variant='body2'>
           {data.messages && data.messages.message}
          </Typography>
          </Grid>
        {/* </Grid> */}
      </Grid>
      </Link>
    )
}

export default ChatPreview