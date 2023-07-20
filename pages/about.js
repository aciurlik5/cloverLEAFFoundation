import React from "react";
import styles from '../styles/About.module.css'
import content from '../resources/content.json'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import LegalFooter from "../components/LegalFooter"
import Header from "../components/Header"

export default function About(){
    return(
        <div>


        <Header></Header>
        <NavBar></NavBar>

        <h2 className={styles.header}>{content.About["About-Header"]}</h2>
            <p>
            <p className={styles.content}>{content.About["About-Content"]}</p>
        </p>


        <Footer></Footer>
        <LegalFooter></LegalFooter>
       
        </div>
    )
}