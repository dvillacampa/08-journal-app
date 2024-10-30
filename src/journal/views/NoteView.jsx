import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImagenGallery } from "../components"

export const NoteView = () => {
  return (
    
    <Grid 
        container
        direction='row'
        justifyContent='space-between'
        sx={{ mb: 1}}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>28 de agosto, 2023</Typography>
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
                    minRows={ 5 }
                />

            </Grid>

            <ImagenGallery />

        </Grid>

  )
}
