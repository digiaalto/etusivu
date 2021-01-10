import styles from "./Input.module.sass"
import PropTypes from "prop-types"

const Input = ({ label, name, type, value, handleOnChange }) => {
  const isCheckbox = type === "checkbox"
  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        name={name}
        checked={isCheckbox && value}
        onChange={handleOnChange}
        id={name}
        className={styles.input}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired,
  ]),
  handleOnChange: PropTypes.func.isRequired,
}
