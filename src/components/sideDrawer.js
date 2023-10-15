import React from 'react';
import { Drawer, List, ListItem } from '@mui/material';


const SideDrawer = (props) => {
    return(
        <Drawer
            anchor={'right'}
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={()=> alert('clicked')}>
                    Name of item
                </ListItem>

            </List>
        </Drawer>
    )

}

export default SideDrawer;