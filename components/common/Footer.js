import styles from "./Footer.module.sass"
import React from "react"
import Link from "next/link"

import Logo from "./Logo"
import LahetaViesti from "./LahetaViesti"

const Footer = () => {
  return (
    <footer className={styles.footer} id="laheta-viesti">
      <ContactRow />
      <NavigationRow />
      <LogoRow />
    </footer>
  )
}

const ContactRow = () => {
  return (
    <div className={styles.column}>
      <LahetaViesti />
    </div>
  )
}
const NavigationRow = () => {
  return (
    <div className={styles.column}>
      <div className={styles.row}>
        <span className={styles.subheader}>Aloita keskustelu</span>
        <a className={styles.link} href="mailto:hei@digiaalto.fi">
          hei@digiaalto.fi
        </a>
        <a className={styles.link} href="mailto:0505543395">
          050 554 3395
        </a>
      </div>
      <div className={styles.row}>
        <span className={styles.subheader}>Navigointi</span>
        <Link href="/">
          <a className={styles.link}>Etusivu</a>
        </Link>
        <Link href="/verkkosivut">
          <a className={styles.link}>Verkkosivut</a>
        </Link>
        <Link href="/verkkosivut#tarjouspyynto">
          <a className={styles.link}>Tarjouspyyntö</a>
        </Link>
      </div>
    </div>
  )
}

const LogoRow = () => {
  return (
    <div className={styles.column}>
      <div className={styles.row}>
        <Logo invert />
        <span className={styles.copyright}>© 2021 digiaalto.fi</span>
      </div>
    </div>
  )
}

export default Footer
