import { Link as RouteLink} from 'react-router-dom';
import { AuthLayout } from '../laout/AuthLayout'
import { Grid, TextField, Button, Link, Typography } from '@mui/material'

export const RegisterPage = () => {
  return (
      <AuthLayout title="Register">
      
            <form>
              <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Name"
                    type="text"
                    placeholder='your name'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Email"
                    type="email"
                    placeholder='your email'
                    fullWidth
                  />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Password"
                    type="password"
                    placeholder='Your password'
                    fullWidth
                  />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

                  <Grid item xs={ 12 }>
                    <Button 
                      variant="contained"
                      fullWidth>Create account</Button>
                  </Grid>


                </Grid>

                <Grid container 
                  direction='row' 
                  justifyContent='end'>
                  <Typography sx={{ mr: 1 }}>Have you already got an account?</Typography>
                  <Link 
                    component={ RouteLink }
                    color='inherit' 
                    to='/auth/login'
                  >Sign in</Link>
                </Grid>

              </Grid>
            </form>
      </AuthLayout>
  )
}
