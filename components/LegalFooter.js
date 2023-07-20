


import styles from '../styles/Footer.module.css'
import content from '../resources/content.json'



export default function Footer() {
    return (
    <div className={styles.leagalInfo}>{content.Footer["Legal Information"]}</div>
   
     
    )
  }
