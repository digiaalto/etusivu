import React from "react"
import styles from "./contacts.module.sass"
import { MdEmail, MdLocalPhone } from "react-icons/md"

const Contacts = ({ invertedColors }) => {
  const iconStyle = {
    display: "inline-block",
    fontSize: "1.5rem",
  }
  if (invertedColors) iconStyle.color = "#eee"

  return (
    <div className={styles.container}>
      <a href="mailto:hei@digiaalto.fi" className={styles.contactLink}>
        <MdEmail className={styles.icon} />
        <span className={styles.contactText}>hei@digiaalto.fi</span>
      </a>
      <a href="tel:+358505543395" className={styles.contactLink}>
        <MdLocalPhone className={styles.icon} />
        <span className={styles.contactText}>+358505543395</span>
      </a>
    </div>
  )
}

Contacts.defaultProps = {
  invertedColors: false,
  withText: false,
}

export default Contacts
