import React from "react"
import styles from "../styles/Footer.module.sass"
import Link from "next/link"
import Logo from "./common/Logo"
import Button from "./utility/Button"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FirstColumn />
      <SecondColumn />
    </footer>
  )
}

const SecondColumn = () => {
  return (
    <div className={styles.column}>
      <SecondColumnFirstSection />
      <SecondColumnSecondSection />
    </div>
  )
}
const SecondColumnFirstSection = () => {
  return (
    <div>
      <h4 className={styles.ctaHeader}>
        Rakennetaan jotain mitä on mukava käyttää.
      </h4>
      <Button
        href="/haastattelu"
        text="Kickstarttaa projekti"
        customStyle={{
          paddingLeft: "3rem",
          paddingRight: "3rem",
          fontWeight: "600",
          letterSpacing: "1px",
        }}
        inverted
      />
    </div>
  )
}
const SecondColumnSecondSection = () => {
  return (
    <React.Fragment>
      <div className={styles.row}>
        <div className={styles.column}>
          <span className={styles.subheader}>Aloita keskustelu</span>
          <a className={styles.link} href="mailto:hei@digiaalto.fi">
            hei@digiaalto.fi
          </a>
          <a className={styles.link} href="mailto:0505543395">
            050 554 3395
          </a>
        </div>
        <div className={styles.column}>
          <span className={styles.subheader}>Navigointi</span>
          <Link href="/">
            <a className={styles.link}>Etusivu</a>
          </Link>
          <Link href="/verkkosivut">
            <a className={styles.link}>Verkkosivut</a>
          </Link>
          <Link href="/haastattelu">
            <a className={styles.link}>Haastattelu</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

const FirstColumn = () => {
  return (
    <div className={styles.column}>
      <Logo invert />
      <span className={styles.copyright}>© 2021 digiaalto.fi</span>
    </div>
  )
}

export default Footer
