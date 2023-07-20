import React from "react";
import content from '../resources/content.json'
import styles from '../styles/Application.module.css'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import LegalFooter from "../components/LegalFooter"
import Header from "../components/Header"

export default function Application(){
    return(
        <div>

        <Header></Header>
       <NavBar></NavBar>
       <p className={styles.content}> {content.Application["Application-Content"]}</p>
       <Footer></Footer>
       <LegalFooter></LegalFooter>  
                
        </div>
    )
}