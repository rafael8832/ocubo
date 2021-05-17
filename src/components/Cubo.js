import React from 'react';
import { Link } from "react-router-dom";

import '../App.css';

export default function Cubo(){

    return(

        <section className="O-Cubo">

        <h2>Etapa 1 - O Cubo</h2>

        <div className="question">
            <h3>-Qual é o tamanho dele?</h3>
            <select name="" id="cuboselect">
                <option value="1"selected>Grande</option>
                <option value="2">Médio</option>
                <option value="3">Pequeno</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá flutuando ou tá no chão?</h3>
            <select name="" id="">
                <option value="4" selected>Flutuando</option>
                <option value="5">No chão</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá acima ou abaixo da linha do horizonte?</h3>
            <select name="" id="">
                <option value="6" selected>Acima</option>
                <option value="7">Abaixo</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá perto ou longe da sua visão?</h3>
            <select name="" id="">
                <option value="8" selected>Perto</option>
                <option value="9">Longe</option>
            </select>
        </div>

        <div className="question">
            <h3>-Qual é a cor dele?</h3>
            <select name="" id="">
                <option value="10" selected>Preto</option>
                <option value="11">Claro</option>
                <option value="12">Ouro</option>
                <option value="13">Marrom</option>
                <option value="14">Azul</option>
                <option value="15">Cinza</option>
                <option value="16">Vermelho</option>
                <option value="17">Verde</option>
                <option value="18">Amarelo</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele é feito de material sólido, de ouro ou de vidro?</h3>
            <select name="" id="">
                <option value="19" selected>Material sólido</option>
                <option value="20">Ouro</option>
                <option value="21">Vidro</option>
            </select>
        </div>

        <div className="question">
            <h3>-É um cubo oco ou tá cheio de coisas viscosas por dentro?</h3>
            <select name="" id="">
                <option value="22" selected>Oco</option>
                <option value="23">Cheio de coisas viscosas</option>
                <option value="24">Nenhuma das Opções</option>
            </select>
        </div>

        <div className="question">
            <h3>-É um cubo duro ou mole?</h3>
            <select name="" id="">
                <option value="25" selected>Duro</option>
                <option value="26">Mole</option>
            </select>
        </div>

        <div className="question">
            <h3>-Consegue ver o interior do cubo?</h3>
            <select name="" id="">
                <option value="27" selected>Sim</option>
                <option value="28">Não</option>
            </select>
        </div>

        <div id="text" style={{backgroundColor: "white", width:"300px", height:"300px"}}></div>

        <button>
            <Link to="/Etapa2">Enviar Resultado</Link>
        </button>

    </section>

    );

};
