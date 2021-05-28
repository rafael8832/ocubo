import React, {useState} from 'react';
import { Link } from "react-router-dom";

import '../App.css';

export default function Cubo(){

    const [valorq1, setValorq1] = useState("Sem Resposta");
    const [valorq2, setValorq2] = useState("Sem Resposta");
    const [valorq3, setValorq3] = useState("Sem Resposta");
    const [valorq4, setValorq4] = useState("Sem Resposta");
    const [valorq5, setValorq5] = useState("Sem Resposta");
    const [valorq6, setValorq6] = useState("Sem Resposta");
    const [valorq7, setValorq7] = useState("Sem Resposta");
    const [valorq8, setValorq8] = useState("Sem Resposta");
    const [valorq9, setValorq9] = useState("Sem Resposta");

    return(

        <section className="O-Cubo">

        <h2>Etapa 1 - O Cubo</h2>

        <div className="question">
            <h3>-Qual é o tamanho dele?</h3>
            <select onChange={(event) => {
            setValorq1(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value=" É uma pessoa que tem um ego grande, é confiante, tem auto-estima alta.">Grande</option>
                <option value="É uma pessoa equilibrada, confiante, mas que não se acha nem superior nem inferior aos outros.">Médio</option>
                <option value="É uma pessoa simples, que tem um ego pequeno.">Pequeno</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá flutuando ou tá no chão?</h3>
            <select onChange={(event) => {
            setValorq2(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value="É uma pessoa criativa, sonhadora, otimista, idealista, vive de idéias fantasiosas e impraticáveis.">Flutuando</option>
                <option value="É uma pessoa que geralmente tem a sua posição sobre a sociedade.">No chão</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá acima ou abaixo da linha do horizonte?</h3>
            <select onChange={(event) => {
            setValorq3(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value="É uma pessoa idealista, intelectual, espiritual, sonhadora.">Acima</option>
                <option value="É uma pessoa prática, realista, tem os pés no chão.">Abaixo</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele tá perto ou longe da sua visão?</h3>
            <select onChange={(event) => {
            setValorq4(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value="Se sente confortável com a proximidade das pessoas, vive no presente.">Perto</option>
                <option value="É protetora de seu espaço, independente.">Longe</option>
            </select>
        </div>

        <div className="question">
            <h3>-Qual é a cor dele?</h3>
            <select onChange={(event) => {
            setValorq5(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value="É elegante, rigorosa, misteriosa, reservada, contida.">Preto</option>
                <option value="Tem mente clara, é ingênua, aberta, realista, vulnerável, calma.">Claro</option>
                <option value="É valiosa, ponderada, refinada, leal, verdadeira, desejável.">Ouro</option>
                <option value="É mundana, calorosa, séria, estudiosa.">Marrom</option>
                <option value="É serena, espiritual, elétrica, leal, distante, algumas vezes triste, afastada.">Azul</option>
                <option value="É conservadora, neutra, justa, ambivalente, sutil, entediada.">Cinza</option>
                <option value="É passional, esquentada, algumas vezes agressiva, impaciente.">Vermelho</option>
                <option value="Esperançosa, otimista, saudável, amante da natureza.">Verde</option>
                <option value="É alegre, animada, otimista.">Amarelo</option>
            </select>
        </div>

        <div className="question">
            <h3>-Ele é feito de material sólido, de ouro ou de vidro?</h3>
            <select onChange={(event) => {
            setValorq6(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value="É uma pessoa que tem auto-estima alta e boa personalidade.">Material sólido</option>
                <option value="Se acha muito preciosa.">Ouro</option>
                <option value="Se considera uma pessoa pura.">Vidro</option>
            </select>
        </div>

        <div className="question">
            <h3>-É um cubo oco ou tá cheio de coisas viscosas por dentro?</h3>
            <select onChange={(event) => {
            setValorq7(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value="Se sente vazia por dentro.">Oco</option>
                <option value="Se odeia.">Cheio de coisas viscosas</option>
                <option value="Nenhuma das Opções">Nenhuma das Opções</option>
            </select>
        </div>

        <div className="question">
            <h3>-É um cubo duro ou mole?</h3>
            <select onChange={(event) => {
            setValorq8(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value="Tem personalidade forte, tem caráter.">Duro</option>
                <option value="É uma pessoa sensível, sente remorso quando erra.">Mole</option>
            </select>
        </div>

        <div className="question">
            <h3>-Consegue ver o interior do cubo?</h3>
            <select onChange={(event) => {
            setValorq9(event.target.value);
          }}>
                <option value="Sem Resposta"selected>---Selecione---</option>
                <option value="Não tem vergonha de ser quem é, não se incomoda de mostrar sua personalidade, como ela é.">Sim</option>
                <option value="Tem um lado misterioso que pouca gente conhece.">Não</option>
            </select>
        </div>

        <div id="text" style={{backgroundColor: "white", width:"300px", height:"500px"}}>
            <p>{valorq1}</p>
                <br/>
            <p>{valorq2}</p>
                <br/>
            <p>{valorq3}</p>
                <br/>
            <p>{valorq4}</p>
                <br/>
            <p>{valorq5}</p>
                <br/>
            <p>{valorq6}</p>
                <br/>
            <p>{valorq7}</p>
                <br/>
            <p>{valorq8}</p>
                <br/>
            <p>{valorq9}</p>
                <br/>
        </div>
     
        <button> <Link to="/Etapa2">Enviar Resultado</Link></button>

        </section>

    );

};


  
