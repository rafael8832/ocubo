import React, {useContext} from 'react';
import Context from '../state/Context';

export default function Resultado(){
    const Context = useContext (AuthContext);

    return(
        <>
            <h1>Resultado aqui   "aqui o codigo do context, do componente cubo, div resultado do state"</h1>
        </>

        );
    };
    