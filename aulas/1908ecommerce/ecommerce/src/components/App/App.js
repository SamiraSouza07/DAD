import {useState} from "react"
import styles from "./App.module.css";
import Promo from "../Promo/Promo.js"
import Header from "../Header/Header.js"
import Main from "../Main/Main.js"
import Footer from "../Footer/Footer.js"


function App() {
  return (
    <>
    <Promo/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
