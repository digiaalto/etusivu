import styles from "../styles/Navigation.module.sass"
import Link from "next/link"

const Navigation = () => {
  return (
    <div className={styles.navigationBar}>
      <Logo />
      <Links />
      <Logo />
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
      <DigiaaltoLink href="#avaimet-kateen" text="Avaimet käteen verkkosivu!" />
      <DigiaaltoLink href="#testaa-verkkosivuja" text="Google Lighthouse" />
      <DigiaaltoLink href="#toteutusprosessi" text="Toteutusprosessi" />
      <DigiaaltoLink href="#paljonko-maksaa" text="Paljon maksaa?" />
    </ul>
  )
}

const Logo = () => (
  <div className={styles.logoContainer}>
    <a href="/" className={styles.logoContainerLink}>
      <img src="brand/logo.svg" className={styles.logoImage} />
      <div className={styles.logoTexts}>
        <span className={styles.logoHeader}>Digiaalto</span>
        <span className={styles.logoSubheader}>
          Surffaa
          <br />
          aallonharjalla
        </span>
      </div>
    </a>
  </div>
)

export default Navigation
