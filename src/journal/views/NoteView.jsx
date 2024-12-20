import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImagenGallery } from "../components"
import moment from "moment"

export const NoteView = ({ note }) => {
  return (
    
    <Grid 
        container
        direction='row'
        justifyContent='space-between'
        sx={{ mb: 1}}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>{ moment().millisecond( note.date ).format('D [de] MMMM [de] YYYY')}</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container className="animate__animated animate__fadeIn animate__faster">
                <TextField 
                    type="text"
                    variant="filled"
                    value={ note.title }
                    fullWidth
                    placeholder="Add a title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happend today"
                    value={ note.body }
                    minRows={ 5 }
                />

            </Grid>

            <ImagenGallery />

        </Grid>

  )
}
