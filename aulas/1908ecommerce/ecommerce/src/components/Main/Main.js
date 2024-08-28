import styles from "./Main.module.css"
import Carrossel from "../Carrossel/Carrossel.js"
import Categoria from "../Categoria/Categoria.js"
import GrupoProdutos from "../GrupoProdutos/GrupoProdutos.js"
import TituloProduto from "../TituloProdutos/TituloProdutos.js"

function Main(){
    return(
        <>
        <Carrossel/>
        <Categoria titulo="Today's"/>
        <TituloProduto 
        titulo="Flash Sales" cronometro="true" dias="03" horas="23" minutos="19" segundos="56"/>
        <GrupoProdutos/>
        </>
    )
}

export default Main