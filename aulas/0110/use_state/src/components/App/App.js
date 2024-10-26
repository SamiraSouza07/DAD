import Card from "../Card/Card";
import styles from "./App.module.css";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";
import Card4 from "../Card4/Card4";

function App() {
  return (
    <>
      <Card
        titulo="Contador simples"
        aumentar="Incrementar"
        diminuir="Decrementar"
      />
      <Card2 titulo="Manipulação de string" />
      <Card3 titulo="Manipulação array" />
      <Card4 titulo="Manipulação de Objeto" />
    </>
  );
}

export default App;
