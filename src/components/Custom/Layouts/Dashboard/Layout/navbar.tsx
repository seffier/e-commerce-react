import React from 'react';

import { Drawer, List, ListItem, ListItemText, Toolbar, Stack, ListItemButton } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
    >
      <Toolbar />
      <Stack spacing={2}>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary='Dashboard' />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary='Products' />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary='Orders' />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary='Settings' />
                </ListItemButton>
            </ListItem>
        </List>
      </Stack>
    </Drawer>
  );
};

export default Navbar;
