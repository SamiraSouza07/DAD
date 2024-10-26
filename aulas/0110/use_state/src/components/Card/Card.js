import styles from "./Card.module.css"
import {useState} from 'react'

function Card(props){
    const [contador,setContador] = useState(17)
    return(
        <>
        <p> {props.titulo} {contador}</p>
        <button onClick={()=>{
            setContador(contador+1)
        }}>{props.aumentar}</button>
        <button onClick={()=>{
            setContador(contador-1)
        }}>{props.diminuir}</button>
        </>
    )
}

export default Card;