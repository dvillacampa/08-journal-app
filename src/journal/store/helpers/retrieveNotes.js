
import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../../../firebase/config';

export const retrieveNotes = async ( uid ) => {

    try {
        if ( uid === null ) throw new Error('El UID del usuario no existe');

        // Obtenemos la referencia a la colección
        const collectionRef = collection( firebaseDB, `${ uid }/journal/notes`);
        // Obtenemos los documentos de la colección
        const docsResp = await getDocs( collectionRef );
    
        // Para cada documento, obtenemos la información del documentos. 
        //Usamos el operador...X para esparcir todos los atributos e información del documento
        const notes = [];
        docsResp.forEach( doc => {
            notes.push({ id: doc.id, ...doc.data() });
        });
        
        return notes;

    } catch( error ) {
        
        return {
            notes: [],
        }
    }


}