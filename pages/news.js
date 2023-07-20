import React from "react";
import styles from '../styles/News.module.css'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import LegalFooter from "../components/LegalFooter"
import Header from "../components/Header"
import content from '../resources/content.json'

export default function News(){
    return(
        <div>
        <Header></Header>
       <NavBar></NavBar>
       <p className={styles.content}> {content.News["News-Roll"]}</p>
       <Footer></Footer>
       <LegalFooter></LegalFooter> 


        </div>
    )
}