
import { collection, doc, setDoc } from '@firebase/firestore/lite';

import { addNewEmptyNote, setActiveNote, setSaving } from './journalSlice';
import { firebaseDB } from '../../firebase/config';

export const startAddNewEmptyNote = ( ) => {
    return async ( dispatch, getState ) => {

        dispatch ( setSaving( true ) );

        const { uid } = getState().auth;

        const emptyNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            // Crea el documento y la collection
            const newDoc = doc ( collection( firebaseDB, `${ uid }/journal/notes` ));
            // Inserta la nueva nota
            const setDocResp = await setDoc ( newDoc, emptyNote );
    
            emptyNote.id = newDoc.id;
            
            dispatch( addNewEmptyNote( emptyNote ));

            dispatch( setActiveNote( emptyNote ));

            dispatch( setSaving( false ));
    

        } catch ( error ) {
            const errorCode = error.errorCode;

            console.error( errorCode );
        }


    }
}