import styles from "../styles/NavDesktop.module.sass"
import Link from "next/link"

const Navigation = () => {
  return (
    <div className={styles.navigationBar}>
      <Logo />
      <Links />
    </div>
  )
}

const Links = () => {
  const DigiaaltoLink = ({ href, text }) => (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  )
  return (
    <ul className={styles.linkList}>
      <DigiaaltoLink href="#huippuluokan-sivut" text="Digiaalto" />
      <DigiaaltoLink href="#testaa-verkkosivuja" text="Laatutesti" />
      <DigiaaltoLink href="#toteutusprosessi" text="Prosessi" />
      <DigiaaltoLink href="#hinta" text="Hinta" />
    </ul>
  )
}

const Logo = () => (
  <a href="/" className={styles.logoContainer}>
    <img src="/brand/logo.png" className={styles.logoImage} />
    <span className={styles.logoHeader}>Digiaalto.fi</span>
  </a>
)

export default Navigation
