import PropTypes from "prop-types"
import styles from "./TextBar.module.sass"

const TextBar = ({ text, alt }) => {
  return (
    <h2 className={`${styles.bar} ${alt && styles.alt}`}>
      <p className={styles.text}>{text}</p>
    </h2>
  )
}

export default TextBar

TextBar.propTypes = {
  text: PropTypes.string.isRequired,
}

TextBar.defaultProps = {
  text: "Teksti unohtui",
}
