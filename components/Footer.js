import React from "react"
import styles from "../styles/Footer.module.sass"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <FooterNav />
        <FooterContactInfo />
      </div>
    </footer>
  )
}

const FooterContactInfo = () => {
  return (
    <div className={styles.footerItem}>
      <span className={styles.footerHeader}>Ota yhteyttä</span>
      <ul className={styles.itemList}>
        <li>
          <a href="mailto:hei@digiaalto.fi">hei@digiaalto.fi</a>
        </li>
        <li>
          <a href="tel:+358505543395">+358 50554 3395</a>
        </li>
      </ul>
    </div>
  )
}

const FooterNav = () => {
  return (
    <div className={styles.footerItem}>
      <span className={styles.footerHeader}>Linkit</span>
      <ul className={styles.itemList}>
        <li>
          <Link href="/">
            <a>Etusivu</a>
          </Link>
        </li>
        <li>
          <Link href="/#laatutesti-google-lighthouse">
            <a>Laatutesti</a>
          </Link>
        </li>
        <li>
          <Link href="/#kehitysprosessi">
            <a>Kehitysprosessi</a>
          </Link>
        </li>
        <li>
          <Link href="/#hinnoittelu">
            <a>Hinnoittelu</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
