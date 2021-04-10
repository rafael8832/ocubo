import React from 'react';

export default function Flores(){
    return(
        <section className="As-Flores">
        
        <h2>Etapa 4 - As Flores</h2>

        <div className="question">
            <h3>-Quantas flores são?</h3>
            <select name="" id="">
                <option selected>Nenhuma</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">Muitas</option>
            </select>
        </div>

        <div className="question">
            <h3>-Elas estão perto ou longe do cubo?</h3>
            <select name="" id="">
                <option selected>Perto</option>
                <option value="1">Longe</option>
            </select>
        </div>

        <div className="question">
            <h3>-Elas estão dentro de um vaso, em um jardim ou dentro do cubo?</h3>
            <select name="" id="">
                <option selected>Dentro de um vaso</option>
                <option value="1">Em um jardim</option>
                <option value="1">Dentro do cubo</option>
            </select>
        </div>

        <div className="question">
            <h3>-Elas estão atrás do cubo?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-São flores secas?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-São flores silvestres?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <button>Enviar Resultado</button>

    </section>
    );
};