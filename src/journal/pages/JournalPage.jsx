
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layouts/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { useDispatch, useSelector } from "react-redux"
import { startAddNewEmptyNote } from "../store"



export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal );
  
  const onAddNote = () => {

    dispatch( startAddNewEmptyNote());

  }
  return (
    <JournalLayout>
        
        {
          ( !!active ? <NoteView /> : <NothingSelectedView /> )
        }
        
        <IconButton 
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
          onClick={ onAddNote }
          disabled={ isSaving }
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

    </JournalLayout>



  )
}
