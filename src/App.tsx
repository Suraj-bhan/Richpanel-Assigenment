
import { Grid } from '@mui/material';
import './App.css';
import ChatMenu from './App/ChatMenu';
import Conversation from './App/Conversation';
import ProfileMenu from './App/ProfileMenu';
import SideBar from './App/SideBar';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme();

function App() {
  return (
        <ThemeProvider theme={theme}>
          <div className="App"
          //  style={{display:'flex', alignItems:'center'}} 
           >
          {/* <Routes>
              <Route path="/about-us">
                <AboutUs />
              </Route>
              <Route path="/join-as-interviewer">
                <Interviewer />
              </Route>
              <Route path="/terms-and-conditions">
                <TermsConditions />
              </Route>
              <Route path="/lets-talk">
                <LetsTalk />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Routes> */}
              <Grid
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
            </Grid>
          </div>
        </ThemeProvider>

  );
}

export default App;
