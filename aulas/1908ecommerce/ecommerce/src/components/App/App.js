import {useState} from "react"
import styles from "./App.module.css";
import Promo from "../Principais/Promo/Promo.js"
import Header from "../Principais/Header/Header.js"
import Main from "../Principais/Main/Main.js"
import Footer from "../Principais/Footer/Footer.js"


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
