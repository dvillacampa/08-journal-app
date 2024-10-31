import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {

        const result = await signInWithPopup( firebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, photoURL, email, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }


    } catch (error) {

        const errorCode = error.code;
        const errorMessage =error.message;

        return {
            ok: false,
            errorCode: errorCode, 
            errorMessage: errorMessage
        }
    }
}

export const registerUserWithEmailAndPassword = async ({ displayName, email, password }) => {

    try {

        const result = await createUserWithEmailAndPassword( firebaseAuth, email, password );
        const { uid, photoURL} = result.user;

        await updateProfile( firebaseAuth.currentUser, { displayName } );        
        
        return {
            ok: true,
            uid, photoURL, displayName, email
        }


    } catch (error) {

        const errorCode = error.code;
        const errorMessage =error.message;

        return {
            ok: false,
            errorCode: errorCode, 
            errorMessage: errorMessage
        }
    }

}


export const loginWithEmailAndPassoword = async({ email, password }) => {

    try {

        const result = await signInWithEmailAndPassword( firebaseAuth, email, password);
        const { displayName, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }


    } catch (error) {

        const errorCode = error.code;
        const errorMessage =error.message;

        return {
            ok: false,
            errorCode: errorCode, 
            errorMessage: errorMessage
        }
    }
}

export const logoutFirebase = async() => {
    
    return await firebaseAuth.signOut();
}