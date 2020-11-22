import styles from "../styles/Navigation.module.sass"
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
  <div className={styles.logoContainer}>
    <a href="/" className={styles.logoContainerLink}>
      <span className={styles.logoHeader}>Digiaalto.fi</span>
    </a>
  </div>
)

export default Navigation
