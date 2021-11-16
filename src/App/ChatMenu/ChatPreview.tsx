import { Avatar, Button, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
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

function ChatPreview() {
  const classes = useStyles();
    return (
      <Grid item container className={classes.containerGrid} style={{padding:'12px'}} alignItems='center'>
        {/* <Grid item container > */}

          <CheckBoxOutlineBlankIcon style={{marginRight:'12px', color:'#9e9e9e'}}/>

          <Grid item xs={8}>
          <Typography textAlign='left' variant='subtitle2'>
            Amit RG
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
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </Typography>
          </Grid>
        {/* </Grid> */}
      </Grid>
    )
}

export default ChatPreview