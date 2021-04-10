import React from 'react';

import '../App.css';

export default function Cubo(){
    return(
        <section className="O-Cubo">
        
        <h2>Etapa 1 - O Cubo</h2>

        <div className="question">
            <h3>-Qual é o tamanho dele?</h3>
            <select name="" id="">
                <option selected>Grande</option>
                <option value="1">Médio</option>
                <option value="2">Pequeno</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá flutuando ou tá no chão?</h3>
            <select name="" id="">
                <option selected>Flutuando</option>
                <option value="1">No chão</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá acima ou abaixo da linha do horizonte?</h3>
            <select name="" id="">
                <option selected>Acima</option>
                <option value="1">Abaixo</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá perto ou longe da sua visão?</h3>
            <select name="" id="">
                <option selected>Perto</option>
                <option value="1">Longe</option>
            </select>
        </div>

        <div className="question">
            <h3>-Qual é a cor dele?</h3>
            <select name="" id="">
                <option selected>Preto</option>
                <option value="1">Claro</option>
                <option value="1">Ouro</option>
                <option value="1">Marrom</option>
                <option value="1">Azul</option>
                <option value="1">Cinza</option>
                <option value="1">Vermelho</option>
                <option value="1">Verde</option>
                <option value="1">Amarelo</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele é feito de material sólido, de ouro ou de vidro?</h3>
            <select name="" id="">
                <option selected>Material sólido</option>
                <option value="1">Ouro</option>
                <option value="1">Vidro</option>
            </select>
        </div>

        <div className="question">
            <h3>-É um cubo oco ou tá cheio de coisas viscosas por dentro?</h3>
            <select name="" id="">
                <option selected>Oco</option>
                <option value="1">Cheio de coisas viscosas</option>
                <option value="1">Nenhuma das Opções</option>
            </select>
        </div>

        <div className="question">
            <h3>-É um cubo duro ou mole?</h3>
            <select name="" id="">
                <option selected>Duro</option>
                <option value="1">Mole</option>
            </select>
        </div>

        <div className="question">
            <h3>-Consegue ver o interior do cubo?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <button>Enviar Resultado</button>

    </section>

    );
};