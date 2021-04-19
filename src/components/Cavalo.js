import React from 'react';
import { Link } from "react-router-dom";

export default function Cavalo(){
    return(
        <section class="O-Cavalo">
        
        <h2>Etapa 5 - O Cavalo</h2>

        <div class="question">
            <h3>-É um cavalo grande e forte ou pequeno e delicado?</h3>
            <select name="" id="">
                <option selected>Grande e forte</option>
                <option value="1">Pequeno e delicado</option>
            </select>
        </div>

        <div class="question">
            <h3>-É um cavalo branco, preto ou marrom?</h3>
            <select name="" id="">
                <option selected>Branco</option>
                <option value="1">Preto</option>
                <option value="1">Marrom</option>
            </select>
        </div>

        <div class="question">
            <h3>-Ele tá perto ou longe do cubo?</h3>
            <select name="" id="">
                <option selected>Perto</option>
                <option value="1">Longe</option>
            </select>
        </div>

        <div class="question">
            <h3>-Ele tá voando?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div class="question">
            <h3>-É um cavalo selvagem ou tá amarrado?</h3>
            <select name="" id="">
                <option selected>Selvagem</option>
                <option value="1">Amarrado</option>
            </select>
        </div>

        <div class="question">
            <h3>-Ele tá estranhando a escada?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <button>
            <Link to="/Etapa6">Enviar Resultado</Link>
        </button>

        </section>
    );
};