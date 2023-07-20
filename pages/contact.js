import React from "react";
import styles from '../styles/Contact.module.css'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import LegalFooter from "../components/LegalFooter"
import Header from "../components/Header"
import EmailForm from "../components/EmailForm";

export default function Contact(){
    return(
        <div>
            <Header></Header>
            <NavBar></NavBar>

            <EmailForm></EmailForm>

            <Footer></Footer>
            <LegalFooter></LegalFooter>
        </div>
    )
}