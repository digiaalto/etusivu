import React from "react"
import styles from "../styles/infobar.module.sass"
import Link from "next/link"
import PropTypes from "prop-types"
import { MdEmail, MdLocalPhone } from "react-icons/md"

const Infobar = ({ text, ctaHref = "/" }) => {
  return (
    <div className={styles.infobar}>
      <a href="mailto:hei@digiaalto.fi" className={styles.contactLink}>
        <MdEmail />
        <span className={styles.contactText}>hei@digiaalto.fi</span>
      </a>
      <div className={styles.divider}></div>
      <a href="tel:+358505543395" className={styles.contactLink}>
        <MdLocalPhone />
        <span className={styles.contactText}>+358505543395</span>
      </a>
      <div className={styles.divider}></div>
      <Link href={ctaHref}>
        <a className={styles.contactForm}>{text} →</a>
      </Link>
    </div>
  )
}

export default Infobar

Infobar.defaultProps = {
  text: "yhteydenottolomake",
  ctaHref: "/#yhteydenottolomake",
}

Infobar.propTypes = {
  text: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
}
