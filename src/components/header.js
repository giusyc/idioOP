import React, { useState, useEffect } from 'react';
import {AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './sideDrawer.js'

const Header = () => {
    const [drawerOpen, setDrawerOpen]= useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    };
    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: '#1a3640',
                boxshadow: 'none',
                padding:'20px 0px'
            }}
        >
            <Toolbar>
                <div classname='header_logo'>
                    <div className="font_pixelify header_logo_idio">Idioteque</div>
                </div>
                <IconButton
                    aria-label='Menu'
                    color='inherit'
                    onClick={() => toggleDrawer(true)}

                >    
                    <MenuIcon/>
                </IconButton>
                
                <SideDrawer
                    open={drawerOpen}
                    onClose={(value) => toggleDrawer(value)}
                />


            </Toolbar>
         
        </AppBar>
    )
}

export default Header;