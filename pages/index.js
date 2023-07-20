import Link from "next/link"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import LegalFooter from "../components/LegalFooter"
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import mainImage from '../resources/cloverLeafMainPic.jpeg';
import Image from "next/image"

export default function Home() {
  return (
    <div>

      <main>
       <Header></Header>
       <NavBar></NavBar>
   
       <div  className={styles.container}>
      <Image src={mainImage}       
      alt="Clover LEAF Logo"></Image>
  
      </div>
      <div className={styles.donateBanner}>
        <h1><Link href="https://www.paypal.com/donate?hosted_button_id=QL6W9GJDW9TXW">DONATE TODAY!</Link></h1>
      </div>

      <div className={styles.row}>
      <div className={styles.column}>
            <h2> <FontAwesomeIcon icon={faGraduationCap}  size="2x" /> Founded in 1986</h2>
            <p>For more than 30 years, Clover LEAF has provided grants to teachers to support innovative classroom projects that foster engagement in our community.</p>
      </div>
      <div className={styles.column}>
          <h2> <FontAwesomeIcon icon={faMoneyBill}  size="2x" /> Project Funding</h2>
           <p>Thousands of students have been positively impacted through innovative projects that, without our financial support, would not have been realized.</p>
      </div>
      <div className={styles.column}>
      <h2>  <FontAwesomeIcon icon={faUser}  size="2x" /> Our Board Members</h2>
      <p>Clover LEAF is comprised of volunteer community members who have a love and passion for the students and teachers of the Clover School District.</p>
      </div>
      </div>



       <Footer></Footer>
       <LegalFooter></LegalFooter>

      </main>




      
    </div>





  )





}


