import { Grid, Tab, Tabs, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import React from 'react'

function ChatMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  
    return (
      <Grid item container
      style={{ border:'1px solid rgba(0,0,0,0.2)',
               borderRight:'none',
               borderLeft:'none'}}
               direction="column">
        <Grid item container style={{height:'70px',  border:'1px solid rgba(0,0,0,0.2)',
               borderRight:'none',
               borderLeft:'none'}} justifyContent="space-between" alignItems="center">
           <Grid container item xs>
           <MenuIcon/>
           <Typography>
             Converstions
             
           </Typography>
           </Grid>
           <Grid item xs>
           <ReplayIcon/>
           </Grid>
         
        </Grid>
        
      </Grid>
    )
}

export default ChatMenu