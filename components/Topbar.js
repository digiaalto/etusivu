import styles from "../styles/Topbar.module.sass"
import React from "react"
import { MdEmail, MdLocalPhone } from "react-icons/md"

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <a href="mailto:hei@digiaalto.fi" className={styles.contactLink}>
        <MdEmail />
        <span className={styles.contactText}>hei@digiaalto.fi</span>
      </a>
      <a href="tel:+358505543395" className={styles.contactLink}>
        <MdLocalPhone />
        <span className={styles.contactText}>050 554 3395</span>
      </a>
    </div>
  )
}

export default Topbar
