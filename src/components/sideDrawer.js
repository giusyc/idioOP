import React from 'react';
import { Drawer, List, ListItem } from '@mui/material';


const SideDrawer = (props) => {
    const sidebarLinks = [
        { where:'featured', value:'To Top' },
        { where:'about', value:'About' },
        { where:'music', value:'Music' },
        { where:'collabs', value:'Collabs' },
        { where:'contact', value:'Contact' }
    ]

    const renderMenuItems = (item) => {
        return (
            <ListItem button onClick={()=> alert(item.where)} key={item.where}>
                {item.value}
            </ListItem>
            
        )
    }
    return(
        <Drawer
            anchor={'right'}
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                { sidebarLinks.map((item) => renderMenuItems(item)) }
            </List>
        </Drawer>
    )

}

export default SideDrawer;