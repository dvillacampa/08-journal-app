import { useDispatch } from 'react-redux';

import { Link as RouteLink} from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

import { AuthLayout } from '../laout/AuthLayout'
import { useForm } from '../../hooks';
import { checkingCredentials, startGoogleSignIn } from '../store/thunks';



export const LoginPage = () => {

  const { email, password, onInputChange } = useForm( {
    email: 'nombre@Google.com',
    password: '123456'
  });

  const dispatch = useDispatch();

  const onSubmit = ( event ) => {

    event.preventDefault();

    dispatch( checkingCredentials() );

  }

  const onGoogleSignIn = () => {

    event.preventDefault();
    dispatch( startGoogleSignIn() );
  }


  return (
      <AuthLayout title="Login">
      
            <form onSubmit={ onSubmit }>
              <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Email"
                    type="email"
                    placeholder='your email'
                    fullWidth
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                     />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Password"
                    type="password"
                    placeholder='Your password'
                    fullWidth
                    name="password"
                    value={ password }
                    onChange={ onInputChange }
                  />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button 
                      type="submit"
                      variant="contained"
                      fullWidth>Login</Button>
                  </Grid>
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button 
                      onClick={ onGoogleSignIn }
                      variant="contained"
                      fullWidth
                    >
                      <Google />
                      <Typography sx={{ ml: 1}}>Google</Typography>
                    </Button>
                  </Grid>


                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Link 
                    component={ RouteLink }
                    color='inherit' 
                    to='/auth/register'
                  >Create account</Link>
                </Grid>

              </Grid>
            </form>
      </AuthLayout>
  )
}
