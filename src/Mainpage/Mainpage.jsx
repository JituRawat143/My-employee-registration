import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, Outlet } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const list1 = ['Inbox', 'Starred', 'Send email', 'Drafts'];

const drawerWidth = 240;

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginTop: theme.spacing(6),
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
  },
}));

function Mainpage() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:650px)'); 
  const navigate = useNavigate(); 
  const location = useLocation();

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (text) => {
    if (text === 'Inbox') {
      navigate('/index');
    }
    handleDrawerClose();
  };
    
  const handleLogin=()=>{
      navigate('/login')
     }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              { mr: 2 },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>

         
          {!isSmallScreen && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}
          
          <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button onClick={handleLogin}>Login</Button>
      <Button>SignUp</Button>
      
    </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

  
        {isSmallScreen && (
          <Box sx={{ p: 2 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        )}

        <List>
          {list1.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleClick(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main>     
      {location.pathname === '/' && (
  <div className="container-fluid">
   
    <section className="hero-section text-center py-5 text-white bg-primary">
      <div className="container">
        <h1 className="display-3 fw-bold">Welcome to Your Productivity Hub</h1>
        <p className="lead">Manage tasks, track progress, and achieve your goals with ease and efficiency.</p>
        <a href="#" className="btn btn-warning btn-lg mt-3">Get Started Now</a>
      </div>
    </section>

    
    <section className="features-section py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <i className="bi bi-list-check display-4 text-primary mb-3"></i>
              <h3 className="fw-bold">Task Management</h3>
              <p>Streamline your workflow with intuitive task management tools that let you focus on what matters most.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <i className="bi bi-bar-chart-fill display-4 text-success mb-3"></i>
              <h3 className="fw-bold">Analytics & Insights</h3>
              <p>Stay informed with powerful insights, track progress, and visualize your success every step of the way.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <i className="bi bi-people-fill display-4 text-danger mb-3"></i>
              <h3 className="fw-bold">Team Collaboration</h3>
              <p>Collaborate effortlessly with your team and accomplish more together with real-time updates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    <section className="cta-section text-center py-5 bg-success text-white">
      <div className="container">
        <h2 className="display-4 fw-bold">Are You Ready to Boost Your Productivity?</h2>
        <p className="lead">Join us today and start your journey toward a more organized and efficient workflow.</p>
        <a href="#" className="btn btn-light btn-lg mt-3">Sign Up Now</a>
      </div>
    </section>
  </div>
)}

        <Outlet /> 
      </Main>
    </Box>
  );
}

export default Mainpage;
