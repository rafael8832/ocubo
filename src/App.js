import React from 'react';

import Inicio from './componentes/Inicio';
import Cubo from './componentes/Cubo';
import Escada from './componentes/Escada';
import Tempestade from './componentes/Tempestade';
import Flores from './componentes/Flores';
import Cavalo from './componentes/Cavalo';
import Rodape from './componentes/Rodape';

export default function App(){
  return(
    <>
      <Inicio/>
      <Cubo/>
      <Escada/>
      <Tempestade/>
      <Flores/>
      <Cavalo/>
      <Rodape/>
    </>
  );
};