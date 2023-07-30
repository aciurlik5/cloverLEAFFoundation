
import styles from '../styles/Footer.module.css'
import content from '../resources/content.json'
import Link from 'next/link'



export default function Footer() {
    return (
<div className={styles.containerInfo}>

<div  className={styles.row}>

<div className={styles.column}>
    <p className={styles.infoHeader}>{content.Footer["What We Do Header"]}</p>
    <p className={styles.infoText}> {content.Footer["What We Do Info"]}</p>
    
</div>
<div className={styles.column}> 

<ul className={styles.smallNav}>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/board">Board</Link></li>
      <li><Link href="/giving">Giving</Link></li>
      <li><Link href="/application">Application</Link></li>
    </ul>


</div>
<div className={styles.column}>
<p className={styles.infoHeader}>{content.Footer["Contact Header"]}</p>
<p className={styles.infoText}> {content.Footer["Contact Info"].Address}</p>
<p className={styles.infoText}> {content.Footer["Contact Info"].EmailHeader} 
<a className={styles.infoHeader} href = 'mailto:cloverleafsc@gmail.com'>{content.Footer["Contact Info"].EmailAddress}</a>



</p>

</div>


  </div >
        


            
 </div>
   
     
    )
  }