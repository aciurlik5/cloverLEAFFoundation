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
        Penny McClure {"\n"}
        Elizabeth Boyd {"\n"}
        Alicia Griffith {"\n"}
        Tina Farris {"\n"}
        Allison Harvey {"\n"}
        Rodney Tate {"\n"}
        Freddie Campbell {"\n"}
        Millicent Dickey {"\n"}
        Tiran Thomas {"\n"}  
        Terry Hilderbrand {"\n"}  
        George Pendleton {"\n"}  
        Marty Cotton {"\n"}  
        Ray Scott {"\n"}  
        Pam Olivieri {"\n"}  
        Ashley Mosbacher {"\n"}  

         </p>
        
        
        
        
        </div>
        <div className={styles.column}>  
        <h2 className={styles.header}>Officers</h2>
        <p className={styles.content}> 
        Jackie Hicks, President {"\n"}
        Sherri Ciurlik, Vice President {"\u2013"} Fundraising {"\n"}
        Catherine Myrick, Vice President {'\u2013'} Grants {"\n"}
        Kyle Eller, Treasurer {"\n"}
        Windy Bartee, Secretary
        </p>

        <h2 className={styles.header}>
        Ex-Officio Members
        </h2>
        <p className={styles.content}>
        Dr. Sheila Quinn, CSD Superintendent {"\n"}
        Rob Wallace, School Board Chair{"\n"}
        Keron Meeks, School Board Liaison {"\n"}
        Bryan Dillon {"\n"}
        Stephanie Knott {"\n"}
        Franklin Pendleton, Emeritus {"\n"}

        </p>
        
        
           </div>
     
</div>
<Footer></Footer>
           <LegalFooter></LegalFooter>



        </div>
    )
}