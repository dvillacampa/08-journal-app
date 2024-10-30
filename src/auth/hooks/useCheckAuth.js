import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../firebase/config';
import { login, logout } from '../store';


export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();
  
    useEffect(() => {
  
      onAuthStateChanged( firebaseAuth, async( user ) => {
        
        if ( !user ) return dispatch( logout() );
        
        const { uid, displayName, email, photoURL } = user;
        dispatch( login({ uid, email, displayName, photoURL }) );
      })
    }, []);

    return status;

}