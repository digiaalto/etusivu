import PropTypes from "prop-types"
import styles from "./TextBar.module.sass"
import { FaArrowCircleDown } from "react-icons/fa"
import Link from "next/link"

const TextBar = ({ text, alt }) => {
  return (
    <h3 className={`${styles.bar} ${alt && styles.alt}`}>
      <p className={styles.text}>{text}</p>
      <Link href="/verkkosivut#uudet-verkkosivut">
        <a>
          <FaArrowCircleDown className={styles.arrow} />
        </a>
      </Link>
    </h3>
  )
}

export default TextBar

TextBar.propTypes = {
  text: PropTypes.string.isRequired,
}

TextBar.defaultProps = {
  text: "Teksti unohtui",
}
