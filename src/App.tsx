
import { darkScrollbar, Grid } from '@mui/material';
import './App.css';
import ChatMenu from './App/ChatMenu';
import Conversation from './App/Conversation';
import ProfileMenu from './App/ProfileMenu';
import SideBar from './App/SideBar';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './App/login';
import Home from './App/Home';
import React, { useEffect } from 'react'
import db from './FirebaseComp';
import People from './App/People';
import Inbox from './App/Inbox';
import Stats from './App/Stats';


const theme = createTheme();

function App() {
  const [loginData,setLoginData]=React.useState<any>();

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

  const handleLoginData=(data:any)=>{
   data && setLoginData(data);
  }

  return (
        <ThemeProvider theme={theme}>
          <div className="App"
          //  style={{display:'flex', alignItems:'center'}} 
           >
              { !loginData ? (
                <Login sendLoginData={handleLoginData}/>
              ) : (
              <Router>
              <Routes>
                {/* <Route path="/login" element={}/> */}
                <Route path="/" element={ <Home loginData={loginData} />}/>
                <Route path="/chat" element={ <Inbox loginData={loginData} />}/>
                <Route path="/chat/:conversationId" element={ <Inbox loginData={loginData} />}/>
                <Route path="/people" element={ <People loginData={loginData}/>}/>
                <Route path="/stats" element={ <Stats loginData={loginData} />}/>
                {/* <Route path="/login" element={ <Login sendLoginData={handleLoginData}/>}/> */}
              </Routes>
             </Router>
              )}
              {/* <Grid
              container
               >
              <Grid item xs={1} 
              style={{background:'#0e5295'}}
              >
                <SideBar />
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
            </Grid> */}
          </div>
        </ThemeProvider>

  );
}

export default App;
