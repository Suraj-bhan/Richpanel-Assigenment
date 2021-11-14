import { Avatar, Badge, Grid, Tab, Tabs } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px black`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


function SideBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

    return (
        <Grid item container 
        direction="column"
        // justifyContent="center"
        alignItems="center"
        style={{height:'100vh',
        border:'1px solid black'}}>
        <Grid>
          {/* <Link> */}
            <img src="Logos/sidebar-logo.png" alt="richpanel" width='75px'/>
          {/* </Link> */}
        </Grid>
        <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="icon tabs example">
            <Tab icon={<PhoneIcon />} aria-label="phone" />
            <Tab icon={<FavoriteIcon />} aria-label="favorite" />
            <Tab icon={<PersonPinIcon />} aria-label="person" />
        </Tabs>
        <Grid item container direction="column" justifyContent="flex-end" >
        <Grid item>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </StyledBadge>
        </Grid>

        </Grid>

        </Grid>
      
    )
}

export default SideBar