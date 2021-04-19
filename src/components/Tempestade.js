import React from 'react';
import { Link } from "react-router-dom";

export default function Tempestade(){
    return(
        <section className="A-Tempestade">
        
        <h2>Etapa 3 - A Tempestade</h2>

        <div className="question">
            <h3>-A tempestade tá se aproximando ou tá longe de você?</h3>
            <select name="" id="">
                <option selected>Perto</option>
                <option value="1">Longe </option>
            </select>
        </div>

        <div className="question">
            <h3>-Ela tá bem acima do cubo?</h3>
            <select name="" id="">
                <option selected>Sim </option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-É uma tempestade muito grande ou é pequena?</h3>
            <select name="" id="">
                <option selected>Grande</option>
                <option value="1">Pequena</option>
            </select>
        </div>

        <div className="question">
            <h3>-É uma tempestade que tem raios, relâmpagos?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-A tempestade é na verdade um tornado?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-É só um vendaval?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-É uma tempestade de neve, de areia ou de chuva?</h3>
            <select name="" id="">
                <option selected>Tempestade de neve</option>
                <option value="1">Tempestade de areia</option>
                <option value="1">Tempestade de chuva</option>
            </select>
        </div>

        <button>
            <Link to="/Etapa4">Enviar Resultado</Link>
        </button>

    </section>
    );
};