import React from "react";
import styles from '../styles/Board.module.css'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import LegalFooter from "../components/LegalFooter"
import Header from "../components/Header"

export default function Board(){
    return(
        <div>
        <Header></Header>
        <NavBar></NavBar>
        <h2 className={styles.header}>
        Meet Our Board Members 
        </h2>
        <p className={styles.content}> 
        Clover LEAF is comprised of community members who have a passion for the students and teachers of the Clover School District. The all-volunteer board manages the grants program and administers fundraising projects each year to ensure the viability of the organization for years to come.
        </p>
     
    
        <div className={styles.row}>
        <div className={styles.column}>  
        <h2 className={styles.header}>Board Members</h2>
        <p className={styles.content}> 
        Windy Bartee {"\n"}
        Gerald Bolin {"\n"}
        Sherri Ciurlik {"\n"}
        Jessica Cody {"\n"}
        Diana Currence {"\n"}
        Esther Davis {"\n"}
        Bryan Dillon {"\n"}
        Jay Dover {"\n"}
        Frank Gadsden {"\n"}
        Teresa Glass {"\n"}
        Jim Gover {"\n"}
        Dr. Christopher Haring {"\n"}
        Roberta Herold {"\n"}
        Jackie Hicks {"\n"}
        Kelly Hodges {"\n"}
        Ken Love {"\n"}
        Kathy MacMahon {"\n"}
        Ginger Marr, CSD Representative {"\n"}
        Penny McClure {"\n"}
        Catherine Myrick {"\n"}
        Franklin Pendleton {"\n"}
        Cara Tully {"\n"}
        Scott Wallace {"\n"}
        Amarintha Whitener {"\n"}
         </p>
        
        
        
        
        </div>
        <div className={styles.column}>  
        <h2 className={styles.header}>Officers</h2>
        <p className={styles.content}> 
        Jackie Hicks, President {"\n"}
        Sherri Ciurlik, Vice President {"\u2013"} Grants {"\n"}
        Jessica Cody, Vice President {'\u2013'} Fundraising {"\n"}
        George Pendleton, Treasurer {"\n"}
        Wendy Bartee, Co-Secretary {"\n"}
        Bryan Dillon, Co-Secretary
        </p>

        <h2 className={styles.header}>
        Ex-Officio Members
        </h2>
        <p className={styles.content}>
        Dr. Sheila Quinn, CSD Superintendent {"\n"}
        Ginger Marr, CSD Board of Trustees Vice Chair
        </p>
        
        
           </div>
     
</div>
<Footer></Footer>
           <LegalFooter></LegalFooter>



        </div>
    )
}