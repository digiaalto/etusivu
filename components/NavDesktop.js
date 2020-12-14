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
      <DigiaaltoLink href="/#huippuluokan-sivut" text="Digiaalto" />
      <DigiaaltoLink href="/#laatutesti-google-lighthouse" text="Laatutesti" />
      <DigiaaltoLink href="/#kehitysprosessi" text="Kehitysprosessi" />
      <DigiaaltoLink href="/#hinnoittelu" text="Hinnoittelu" />
      <DigiaaltoLink href="/haastattelulomake" text="Haastattelulomake" />
    </ul>
  )
}

const Logo = () => (
  <a href="/" className={styles.logoContainer}>
    <img src="/brand/logo.png" className={styles.logoImage} />
  </a>
)

export default Navigation
