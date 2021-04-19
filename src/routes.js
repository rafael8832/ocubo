import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Etapa1 from './pages/Etapa1/Etapa1';
import Etapa2 from './pages/Etapa2/Etapa2';
import Etapa3 from './pages/Etapa3/Etapa3';
import Etapa4 from './pages/Etapa4/Etapa4';
import Etapa5 from './pages/Etapa5/Etapa5';
import Etapa6 from './pages/Etapa6/Etapa6';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/etapa1" component={Etapa1}/>
                <Route path="/etapa2" component={Etapa2}/>
                <Route path="/etapa3" component={Etapa3}/>
                <Route path="/etapa4" component={Etapa4}/>
                <Route path="/etapa5" component={Etapa5}/>
                <Route path="/etapa6" component={Etapa6}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;