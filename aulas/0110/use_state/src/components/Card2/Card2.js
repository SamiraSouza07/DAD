import styles from "./Card2.module.css"
import {useState} from 'react'


function Card2(props){
    const [nome,setNome] = useState()
    return (
        <>
        <p>{props.titulo}</p>
        <input onChange={(e)=>{
            setNome(e.target.value)
        }} placeholder="Digite seu nome"></input>
        <p id="nome">{nome}</p>
        </>
    )
}

export default Card2