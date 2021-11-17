import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import CircleIcon from '@mui/icons-material/Circle';
import db from '../../FirebaseComp';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    border:'0.5px solid rgba(0,0,0,0.2)',
    height:'100%'
  },
  profileGrid:{
    height:'250px',  
    border:'1px solid rgba(0,0,0,0.2)',
    borderRight:'none',
    borderLeft:'none'
  },
  customerGrid:{
    background:'#e8eaf6',
    // height:'100%',
    display:'flex'
  },
  Avatar:{
    margin:'12px 0px',
  },
  Button:{
    margin:'12px!important',
    width:'100px',
    color:'#757575!important',
    borderColor:'#757575!important',
    
  },
  paper:{
    width:'85%',
    // height:'100%',
    padding:'12px 16px',
    margin:'16px',
    borderRadius:'10px!important'
  },
  paperTitle:{
    margin:'6px 0px'
  },
  paperItems:{
    margin:'8px 0px'
  },
  viewMoreButton:{
    color: '#1976d2',
    cursor:'pointer'
  }

}));

interface ProfileMenuProps{
  loginData?:any;
}
const ProfileMenu:React.FC<ProfileMenuProps> = ({
 loginData
  }: ProfileMenuProps) =>  {
  const classes = useStyles();
  const {conversationId}=useParams();
  const [data,setData]=useState<any>();

  useEffect(() => {
    if(conversationId){
       db.collection('conversations').doc(conversationId).onSnapshot((snapshot:any)=>{
         setData(snapshot.data());
       })
    }
   }, [conversationId])

   const handleOnlineColor=()=>{
      if(loginData && data && loginData.name===data.User){
        return 'rgba(47, 168, 47,1)';
      }
      else return 'rgba(0, 0, 0, 0.5)';
    }
    const handleOnlineText=()=>{
      if(loginData && loginData.name===data.User){
        return 'Online';
      }
      else return 'Offline';
    }

    return (
      <Grid item container direction="column" className={classes.containerGrid}>
        <Grid item container className={classes.profileGrid} justifyContent="space-between" alignItems="center">
           <Grid container direction="column" item alignItems="center">
           <Avatar alt="Remy Sharp" src={data && data.Picture} sx={{ width: 70, height: 70 }} className={classes.Avatar}/>
           <Typography variant="h6">
            {data && data.User}
           </Typography>
           <Typography variant="body2" style={{color:handleOnlineColor(),}}>
           <CircleIcon  style={{width:'8px',height:'8px'}}/> {handleOnlineText()}
           </Typography>
           </Grid>
           <Grid container justifyContent="center" item xs>
 
           <Button variant="outlined" size="small" className={classes.Button}><CallIcon/> Call</Button>
           <a href={`https://www.facebook.com/profile.php?id=101706635677407`} target='_blank' rel="noreferrer" style={{textDecoration:'none'}}>
           <Button variant="outlined" size="small" className={classes.Button}><AccountCircleIcon/> Profile</Button>
           </a>

           </Grid>
        </Grid>
        <Grid item container xs className={classes.customerGrid} alignItems="flex-start">
           <Paper className={classes.paper}>

           <Typography variant='h6' textAlign='left' className={classes.paperTitle}>
             Customer Details
           </Typography>

           <Grid item container justifyContent="space-between" className={classes.paperItems}>
           <Typography variant='subtitle1'>
            Email
           </Typography>
           <Typography variant='subtitle2'>
             {data && data.email}
           </Typography>
           </Grid>

           <Grid item container justifyContent="space-between" className={classes.paperItems}>
           <Typography variant='subtitle1'>
           First Name
           </Typography>
           <Typography variant='subtitle2'>
           {data && data.User.substring(0, data.User.lastIndexOf(" ") + 1)}
           </Typography>
           </Grid>
           
           <Grid item container justifyContent="space-between" className={classes.paperItems}>
           <Typography variant='subtitle1'>
           Last Name
           </Typography>
           <Typography variant='subtitle2'>
           {data && data.User.substring(data.User.lastIndexOf(" ") + 1, data.User.length)}
           </Typography>
           </Grid>
           
           <Typography variant='subtitle2' textAlign='left' className={classes.viewMoreButton}> View More Details</Typography>
           </Paper>

        </Grid>
        
      </Grid>
    )
}

export default ProfileMenu