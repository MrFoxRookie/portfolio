// import styles from "./App.module.css"

import {useState} from "react"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

import {es} from "../../locales/es"
import  {en} from "../../locales//en"


function App() {

const [language, setLanguage] =
  useState<"es" | "en">("es");

  const texts =
  language === "es"
    ? es
    : en;

  function handleLanguage() {
  setLanguage(
    language === "es"
      ? "en"
      : "es"
  );

}

  return (
    <>
  <Header handleLanguage={handleLanguage} texts={texts}/>
  <Main/>
  <Footer/>
    </>
  )
}

export default App
