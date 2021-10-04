import { AppBar, Button,  Toolbar, Typography,Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {NavLink } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    return (
        <div>
          
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Cow Boy Agro Training Center
            </Typography>
            <Typography className='headerLink'>
            <NavLink to="/">Home</NavLink>
          <NavLink to="/trainings">Trainings</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/about">About Us</NavLink>
            </Typography>
            
            
            
          
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Header;