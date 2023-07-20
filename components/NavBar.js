
import Link from "next/link"
import styles from '../styles/NavBar.module.css'




export default function Header() {
    return (
        <div  className={styles.container}>

    <ul>
      <li><Link class={styles.container.active} href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/application">Application</Link></li>
      <li><Link href="/board">Board</Link></li>
      <li><Link href="/giving">Giving</Link></li>
      <li><Link href="/news">News</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      </ul>
      </div>
      )}