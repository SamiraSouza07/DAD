import Alunos from "./Alunos";
import "./App.css";


const nome = "Samira";
const alunos = ["Pablo", "Vanessa", "Robson"];

function App() {
  return (
    <div className="App">
      <h1>Olá {nome}</h1>
      <h2>Alunos:</h2>
      <Alunos lista={alunos}/>
    </div>
  );
}

export default App;
