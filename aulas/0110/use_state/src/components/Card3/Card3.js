import { useState } from "react";
import styles from "./Card3.module.css";

function Card3(props) {
  const [array, setArray] = useState([]);

  return (
    <>
      <p>{props.titulo}</p>
      <button
        onClick={() => {
          setArray([...array, "Item " + (array.length + 1)]);
        }}
      >
        Adicionar item
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Card3;
