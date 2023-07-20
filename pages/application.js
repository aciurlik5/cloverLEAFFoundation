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


       <iframe  className={styles.iframe}src="https://survey.k12insight.com/zdm/embed.aspx?val=QsQsTSWWsQPPPsQUPP&key=VsXRVRsSRVsPsPsP"></iframe>

       <Footer></Footer>
       <LegalFooter></LegalFooter>  
                
        </div>
    )
}