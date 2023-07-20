import React from "react";
import styles from '../styles/Giving.module.css'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import LegalFooter from "../components/LegalFooter"
import Header from "../components/Header"
import donateImage from '../resources/DonateNow.png'
import Image from "next/image"
import Link from 'next/link'

export default function Giving(){
    return(
        <div>
           <Header></Header>
            <NavBar></NavBar>
            <h2>Here{"\u2019"}s how YOU can help make a difference!</h2>

            <h2>Make a financial contribution to Clover LEAF!</h2>

            <p>Your generous contribution to Clover LEAF will support academic excellence and make a meaningful difference to both teachers and students.
        At this time, we are only able to accept donations via check, cash, or NOW CREDIT CARD!</p>

        <Link href='https://www.paypal.com/donate?hosted_button_id=QL6W9GJDW9TXW' passHref>
            <a>
            <Image src={donateImage}       
      alt="Clover LEAF Donate"></Image>
            </a>




</Link>
<p className={styles.formattedContent}>MAIL YOUR DONATION {"\n"}
        Print out the donation form located below, complete, and return it along with your check to: {"\n"}
        Clover LEAF Foundation, Inc.{"\n"}
        604 Bethel Street{"\n"}
        Clover, SC 29710 {"\n"}</p>



<Link href="http://www.cloverleaffoundation.net/wp-content/uploads/2015/04/Donation-Form.pdf" passHref>
            <a>
            <button> DONATION FORM</button>
            </a>




</Link>



<h2>Be a part of Taste of the Town!	</h2>
<p> For more information about participating, Email the Taste of the Town Chairperson at cloverleafsc@gmail.com.</p>

            <Footer></Footer>
            <LegalFooter></LegalFooter>
        </div>
    )
}