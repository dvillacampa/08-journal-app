import { useMemo } from 'react'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import moment from 'moment'
import { setActiveNote } from '../store'
import { useDispatch } from 'react-redux'


export const SideBarItem = ({ id, title, body, date, imageURLs = [] }) => {

    const dispatch = useDispatch();
    
    const titleAdapted = useMemo(() => {
        return title.length > 17 
            ? title.substring( 0, 17 ) + '...'
            : title;
        }, [ title ]);

    const handleNoteClick = () => {

        dispatch( setActiveNote({
            id: id,
            title: title,
            body: body,
            date: date,
            imageURLs: imageURLs
        }));

    }
  
    return (
    <ListItem 
        disablePadding
        onClick={ handleNoteClick }>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container >
                <ListItemText primary={ titleAdapted } />
                <ListItemText secondary={ body } />
                <ListItemText secondary={ moment().millisecond( date ).format('D/M/YYYY') } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
