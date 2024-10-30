import { TurnedInNot } from "@mui/icons-material"
import { Box, List, Divider, Drawer, Toolbar, Typography, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"
import { useSelector } from "react-redux"


export const SideBar = ({ drawerWith = 240 }) => {

    const { displayName } = useSelector( state => state.auth);

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 }}}
        >

            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { sx: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width:  drawerWith }
                }} 
            >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>{ displayName }</Typography>
                
                </Toolbar>    
                <Divider />

                <List>
                    {
                        ['January', 'February','March', 'April'].map( text => (
                                <ListItem key={ text } disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot />
                                        </ListItemIcon>
                                        <Grid container >
                                            <ListItemText primary={ text } />
                                            <ListItemText secondary={ 'Lorem Lorem Lorem Lorem Lorem Lorem' } />
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
