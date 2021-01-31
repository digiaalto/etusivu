import styles from "./Topbar.module.sass"
import React from "react"

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <a href="mailto:hei@digiaalto.fi" className={styles.contactLink}>
        <span className={styles.contactText}>hei@digiaalto.fi</span>
      </a>
      <a href="tel:+358505543395" className={styles.contactLink}>
        <span className={styles.contactText}>050 554 3395</span>
      </a>
    </div>
  )
}

export default Topbar
