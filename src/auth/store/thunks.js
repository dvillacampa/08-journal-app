import { loginWithEmailAndPassoword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers";
import { checkCredentials, login, logout } from "./authSlice";


export const checkingCredentials = () => {


    return async ( dispatch ) => {
        dispatch( checkCredentials() );
    }

}

export const startGoogleSignIn = () => {

    return async( dispatch ) => {
        
        dispatch( checkCredentials() );
        
        const result = await signInWithGoogle();
        
        if( result.ok ) {
            dispatch( login( result ));    
        } else {
            dispatch( logout( result.errorMessage ));
        }
        
    }

}

export const startLoginEmailAndPassword = ({ email, password }) => {
    return async ( dispatch ) => {

        dispatch( checkCredentials() );

        const result = await loginWithEmailAndPassoword({ email, password });

        if( result.ok ) {
            dispatch( login( result ) );
        } else {
            dispatch( logout( { errorMessage: result.errorMessage} ) );
        }
    }
}

export const startRegisteringUserByEmailAndPassword = ({ displayName, email, password }) => {

    return async ( dispatch ) => {

        dispatch( checkCredentials() );

        const { uid, photoURL, ok, errorMessage } = await registerUserWithEmailAndPassword({ displayName, email, password });

        if( !ok ) return  dispatch(logout({ errorMessage }));

        dispatch(login( { uid, photoURL, email, displayName }))

    }
}

export const startLogout = () => {

    return async( dispatch ) => {
        
        await logoutFirebase();
        dispatch( logout() );
    }

}