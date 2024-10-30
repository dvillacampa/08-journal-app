import { useState, useMemo } from 'react';

import { Link as RouteLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Button, Link, Typography, Alert } from '@mui/material'

import { useForm } from '../../hooks';
import { AuthLayout } from '../laout/AuthLayout'
import { startRegisteringUserByEmailAndPassword, statusEnum } from '../store';

const initialStateFormDate = {
  displayName: 'David',
  email: 'david@gmail.com',
  password: '123456'
};

const formValidations = {
  email: [ (value) => value.includes('@'), 'The email is not a valid email. The @ is missing.'],
  password: [ (value) => value.length >= 6, 'The password length has to be 6 characters.'],
  displayName: [ (value) => value.length > 3, 'The full name is required.']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid }
      = useForm( initialStateFormDate, formValidations );

  const [ formSubmitted, setFormSubmitted] = useState( false );

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = 
    useMemo( () => status === statusEnum.CHECKING, [status] );

  const onSubmit = ( event ) => {
    event.preventDefault();
    
    if ( !isFormValid ) return;
    
    setFormSubmitted( true );

    dispatch( startRegisteringUserByEmailAndPassword( formState ) );
    
  }

  return (
      <AuthLayout title="Register">
  
            <form 
              onSubmit={ onSubmit }
              className="animate__animated animate__fadeIn animate__faster"
            >
              <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Full name"
                    type="text"
                    placeholder='Full name'
                    fullWidth
                    name="displayName"
                    value={ displayName }
                    onChange={ onInputChange }
                    error={ !!displayNameValid && formSubmitted }
                    helperText= { displayNameValid }
                    
                  />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Email"
                    type="email"
                    placeholder='your email'
                    fullWidth
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                    error={ !!emailValid && formSubmitted}
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
                  <Grid item xs={ 12 }>
                    <Button 
                      disabled={ isCheckingAuthentication }
                      type="submit"
                      variant="contained"
                      fullWidth
                    >Create account
                    </Button>
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
