import React from 'react';

export default function Escada (){
    return(
        <section className="A-Escada">
        
        <h2>Etapa 2 - A Escada</h2>

        <div className="question">
            <h3>-É uma escada longa e com muitos degraus ou curta e com poucos degraus?</h3>
            <select name="" id="">
                <option selected>Longa e com muitos degraus</option>
                <option value="1">Curta e com poucos degraus</option>
            </select>
        </div>

        <div className="question">
            <h3>-É uma escada forte ou tá num estado ruim?</h3>
            <select name="" id="">
                <option selected>Forte</option>
                <option value="1">Estado ruim</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ela tá prendendo o cubo no solo?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ela tá construída em uma das faces do cubo?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ela tá longe do cubo?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-A escada tá na vertical ou na horizontal?</h3>
            <select name="" id="">
                <option selected>Vertical</option>
                <option value="1">Horizontal </option>
            </select>
        </div>

        <div className="question">
            <h3>-Ela tá flutuando?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <div className="question">
            <h3>-Do que ela é feita?</h3>
            <select name="" id="">
                <option selected>Ferro</option>
                <option value="1">Corda</option>
                <option selected>Madeira velha</option>
                <option value="1">Madeira nova</option>
                <option selected>Madeira acabada</option>
                <option value="1">Aço</option>
            </select>
        </div>

        <div className="question">
            <h3>-A escada é muito maior do que o cubo?</h3>
            <select name="" id="">
                <option selected>Sim</option>
                <option value="1">Não</option>
            </select>
        </div>

        <button>Enviar Resultado</button>

    </section>
    );
};