
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import ChatMenu from '../ChatMenu'
import Conversation from '../Conversation'
import ProfileMenu from '../ProfileMenu'
import SideBar from '../SideBar'
import db from '../../FirebaseComp';

interface InboxProps{
    loginData?:any;
  }
  
const Inbox:React.FC<InboxProps> = ({
loginData,
    }: InboxProps) =>{

    return (
        <div>
            <Grid
            container
            >
            <Grid item xs={1} 
            style={{background:'#0e5295'}}
            >
            <SideBar loginData={loginData}/>
            </Grid>

            <Grid item xs={3}>
                <ChatMenu loginData={loginData}/>
            </Grid>
            <Grid item xs={5}>
                <Conversation loginData={loginData}/>
            </Grid>
            <Grid item xs={3}>
                <ProfileMenu /> 
            </Grid>
            </Grid>
        </div>
    )
}

export default Inbox


