import styles from "./Footer.module.sass"
import React from "react"
import Link from "next/link"

import Logo from "./Logo"
import LahetaViesti from "./LahetaViesti"

const Footer = () => {
  return (
    <footer className={styles.footer} id="laheta-viesti">
      <LahetaViesti />
      <NavigationRow />
      <LogoRow />
    </footer>
  )
}

const NavigationRow = () => {
  return (
    <div className={styles.column}>
      <div className={styles.linkBlock}>
        <span className={styles.linkHeader}>Aloita keskustelu</span>
        <a className={styles.link} href="mailto:hei@digiaalto.fi">
          hei@digiaalto.fi
        </a>
        <a className={styles.link} href="mailto:0505543395">
          050 554 3395
        </a>
      </div>
      <div className={styles.linkBlock}>
        <span className={styles.linkHeader}>Navigointi</span>
        <Link href="/">
          <a className={styles.link}>Etusivu</a>
        </Link>
        <Link href="/tarjouspyynto">
          <a className={styles.link}>Hinnat</a>
        </Link>
        <Link href="/usein-kysyttya">
          <a className={styles.link}>Usein kysyttyä</a>
        </Link>
        <Link href="/blogi">
          <a className={styles.link}>Blogi</a>
        </Link>
      </div>
    </div>
  )
}

const LogoRow = () => {
  return (
    <div className={styles.column}>
      <Logo invert />
      <span className={styles.copyright}>© 2021 digiaalto.fi</span>
    </div>
  )
}

export default Footer
