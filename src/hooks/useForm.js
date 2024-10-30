import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators();

    }, [ formState ])

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[ formValue ] !== null ) return false;
        }


        return true;

    }, [ formValidation ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[ formField ];
            /* 
            La primera parte es para formar el nombre de la propiedad a devolver
            concatenando al nombre del campo el texto Valid

            La segunda parte es para evluar la función, la función recibe como primer parámetro
            el valor del campo, para ello, extraemos el valor del formState[nombre del campo]
            
            Si evalua a cierto, devolvemos null, pero si evalua a false, devolvemos el mensaje de error
            configurado en el objeto que se ha recibido como argumento de este custom hook (formValidations)
             */
        
            formCheckedValues[`${ formField }Valid`] = 
                fn( formState[formField] ) ? null : errorMessage;

            setFormValidation( formCheckedValues );

        }
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}