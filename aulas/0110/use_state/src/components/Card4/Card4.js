import styles from "./Card4.module.css";
import { useState } from "react";

function Card4(props) {
  const [pessoa, setDicionario] = useState({ nome: "", idade: "" });

  return (
    <>
      <p>{props.titulo}</p>
      <input
        onChange={(e) => {
          setDicionario({ ...pessoa, nome: e.target.value });
        }}
        placeholder="Digite seu nome"
      ></input>
      <input
        onChange={(e) => {
          setDicionario({ ...pessoa, idade: e.target.value });
        }}
        placeholder="Digite sua idade"
      ></input>
      <p id="nome">
        {pessoa.nome} {pessoa.idade}
      </p>
    </>
  );
}

export default Card4;
