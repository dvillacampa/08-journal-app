import { CircularProgress, Grid } from "@mui/material"


export const CheckingAuth = () => {
  return (
    <Grid
        container
        spacing={ 0 }
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 2 }}
    >
        <Grid 
          container
          direction='row'
          justifyContent='center'>
              <CircularProgress color='warning' />
        </Grid>
    </Grid>
  )
}
