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
  // '@keyframes ripple': {
  //   '0%': {
  //     transform: 'scale(.8)',
  //     opacity: 1,
  //   },
  //   '100%': {
  //     transform: 'scale(2.4)',
  //     opacity: 0,
  //   },
  // },
}));

interface SideBarProps{
  loginData?:any;
}

const SideBar:React.FC<SideBarProps> = ({
loginData,
  }: SideBarProps) =>{
  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

    return (
      <Grid
        item
        container
        direction="column"
        // justifyContent="center"
        alignItems="center"
        style={{
          height: "100vh",
          // width: "75px",
          // border: "1px solid black",
          background: "0e5295",
        }}
      >
        <Grid>
          {/* <Link> */}
          <img src="logos/sidebar-logo.png" alt="richpanel" width="75px" />
          {/* </Link> */}
        </Grid>
        {/* <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="icon tabs example"
          // style={{ width: "75px" }}
        >
          <Tab icon={<PhoneIcon />} aria-label="phone"  />
          <Tab
            icon={<FavoriteIcon />}
            aria-label="favorite"
            // style={{ width: "75px" }}
          />
          <Tab
            icon={<PersonPinIcon />}
            aria-label="person"
            // style={{ width: "75px" }}
          />
        </Tabs> */}
        
        <div style={{background:'white',width:'inherit',height:"80px", alignItems:'center', justifyContent:'center', display:'flex' }} >
          <img src="Icons/inbox-solid.svg" alt='inbox' width="40px" height="40px" />
        </div>
        <div style={{background:'0e5295',width:'inherit',height:"80px", alignItems:'center', justifyContent:'center', display:'flex' }} >
          <img src="Icons/user-friends-solid.svg" alt='inbox' width="40px" height="40px" />
        </div>
        <div style={{background:'0e5295',width:'inherit',height:"80px", alignItems:'center', justifyContent:'center', display:'flex' }} >
          <img src="Icons/chart-bar-regular.svg" alt='inbox' width="40px" height="40px" />
        </div>

          
        <Grid item container xs alignItems="flex-end" justifyContent='center'>
          <Grid item style={{marginBottom:'24px'}}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={loginData && loginData.picture && loginData.picture && loginData.picture.data && loginData.picture.data.url} />
            </StyledBadge>
          </Grid>
         
        </Grid>
      </Grid>
    
    )
}

export default SideBar