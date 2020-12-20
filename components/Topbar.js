import styles from "../styles/Topbar.module.sass"
import React from "react"
import PropTypes from "prop-types"
import { MdEmail, MdLocalPhone } from "react-icons/md"

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <a href="mailto:hei@digiaalto.fi" className={styles.contactLink}>
        <MdEmail />
        <span className={styles.contactText}>hei@digiaalto.fi</span>
      </a>
      <div className={styles.divider}></div>
      <a href="tel:+358505543395" className={styles.contactLink}>
        <MdLocalPhone />
        <span className={styles.contactText}>050 554 3395</span>
      </a>
    </div>
  )
}

export default Topbar

Topbar.defaultProps = {
  text: "yhteydenottolomake",
  ctaHref: "/#yhteydenottolomake",
}

Topbar.propTypes = {
  text: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
}
