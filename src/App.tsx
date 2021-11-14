
import { Grid } from '@mui/material';
import './App.css';
import ChatMenu from './App/ChatMenu';
import Conversation from './App/Conversation';
import ProfileMenu from './App/ProfileMenu';
import SideBar from './App/SideBar';
import {createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
        <ThemeProvider theme={theme}>
          <div className="App">
            <Grid
              container
              // justifyContent="center"
              // justifyItems="center"
              alignItems="center"
              // alignContent="center"
            >
              <Grid item  style={{background:'#0e5295'}}>
                <SideBar />
              </Grid>

              <Grid 
              container
              item
              // justifyContent="center"
              // justifyItems="center"
              // xs
              alignItems="center"
              // alignContent="center"
              >
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
            </Grid>
          </div>
        </ThemeProvider>

  );
}

export default App;
