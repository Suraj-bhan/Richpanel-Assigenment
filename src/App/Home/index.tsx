
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import ChatMenu from '../ChatMenu'
import Conversation from '../Conversation'
import ProfileMenu from '../ProfileMenu'
import SideBar from '../SideBar'

interface HomeProps{
    loginData?:any;
  }
  
const Home:React.FC<HomeProps> = ({
loginData,
    }: HomeProps) =>{


     useEffect(() => {
       console.log('This is login data in home page', loginData);
     }, [loginData])

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
                <ChatMenu />
            </Grid>
            <Grid item xs={5}>
                <Conversation />
            </Grid>
            <Grid item xs={3}>
                <ProfileMenu /> 
            </Grid>
            </Grid>
        </div>
    )
}

export default Home


