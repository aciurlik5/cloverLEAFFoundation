
import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'
import headerImage from '../resources/WEB_Logo_Color1.png'






export default function Header() {
    return (
        <div  className={styles.container}>
      <Image src={headerImage}       
      alt="Clover LEAF Logo"></Image>
  
      </div>
      )}