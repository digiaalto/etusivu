import React from "react"
import styles from "../styles/infobar.module.sass"
import Link from "next/link"
import Contacts from "../utils/contacts"
import PropTypes from "prop-types"

const Infobar = ({ text, ctaHref = "/" }) => {
  return (
    <div className={styles.infobar}>
      <div>
        <Contacts invertedColors />
      </div>
      <div>
        <span>
          <Link href={ctaHref}>
            <a className={styles.ctaLink}>{text} →</a>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Infobar

Infobar.defaultProps = {
  text: "Aloita täyttämällä lomake",
  ctaHref: "/#yhteystiedot",
}

Infobar.propTypes = {
  text: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
}
