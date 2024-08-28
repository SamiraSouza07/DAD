function Alunos(props){
    return(
        <ul>
            {props.lista.map((aluno)=>(
                <li key={aluno}>{(aluno)}</li>
            ))} 
        </ul>

    )
}

export default Alunos;