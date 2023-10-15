import React from 'react';
import {AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './sideDrawer.js'

const Header = () => {
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

                >    
                    <MenuIcon/>
                </IconButton>
                
                <SideDrawer/>


            </Toolbar>
         
        </AppBar>
    )
}

export default Header;