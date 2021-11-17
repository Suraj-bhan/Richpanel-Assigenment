
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

        useEffect(() => {

        if(loginData){
            var isUser=false;
            db.collection('conversations').onSnapshot((snapshot:any) => (snapshot.docs.map((doc:any)=>{
            if(doc.data().User===loginData.name) isUser=true;
            })))
            
            if(!isUser){
            db.collection("conversations").add({
            User: loginData && loginData.name,
            Picture: loginData && loginData.picture && loginData.picture && loginData.picture.data && loginData.picture.data.url ? loginData.picture.data.url: '',
            email:loginData && loginData.email ? loginData.email : ''
            })
        }
        }
        
        }, [loginData])


    //  useEffect(() => {
    //    console.log('This is login data in home page', loginData);
    //  }, [loginData])

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


