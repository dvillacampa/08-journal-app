import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouteLink} from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography, Alert } from '@mui/material'
import { Google } from '@mui/icons-material'

import { AuthLayout } from '../laout/AuthLayout'
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginEmailAndPassword, statusEnum } from '../store';


const formValidations = {
  email: [ (value) => value.includes('@'), 'The email is not a valid email. The @ is missing.'],
  password: [ (value) => value.length >= 6, 'The password length has to be 6 characters.'],
}

const initialStateFormData = {
  email: 'your@email',
  password: '123456'
};

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( state => state.auth );

  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const isAuthenticating = useMemo( () => status === statusEnum.CHECKING, [status]);

  const { formState, email, password, onInputChange,
    isFormValid, emailValid, passwordValid } = useForm( initialStateFormData, formValidations );
  
  const onSubmit = ( event ) => {

    event.preventDefault();

    if( !isFormValid ) return;

    setFormSubmitted( true );

    dispatch( startLoginEmailAndPassword( formState ) );

  }

  const onGoogleSignIn = ( event ) => {

    event.preventDefault();
    dispatch( startGoogleSignIn() );
  }


  return (
      <AuthLayout title="Login">
      
            <form 
              onSubmit={ onSubmit }
              className="animate__animated animate__fadeIn animate__faster"
            >
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
                    error={ !!emailValid && formSubmitted }
                    helperText= { emailValid }
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
                    error={ !!passwordValid && formSubmitted }
                    helperText= { passwordValid }
                  />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                <Grid 
                    item 
                    xs={ 12 }
                    display={ !!errorMessage ? '' : 'none' }
                    >
                    <Alert severity='error'>{ errorMessage }</Alert>
                  </Grid>

                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button 
                      disabled = { isAuthenticating }
                      type="submit"
                      variant="contained"
                      fullWidth>Login</Button>
                  </Grid>
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button
                      disabled={ isAuthenticating } 
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
