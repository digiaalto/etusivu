import styles from "./Input.module.sass"
import PropTypes from "prop-types"
import TextareaAutosize from "react-textarea-autosize"

const Input = ({
  label,
  info,
  name,
  type,
  value,
  withRow,
  autoSize,
  handleOnChange,
  refs,
}) => {
  const isCheckbox = type === "checkbox"

  return (
    <div className={styles.container}>
      <div
        className={`${styles.inputWrapper} ${withRow ? styles.withRow : null}`}
      >
        {autoSize ? (
          <TextareaAutosize
            type={type}
            name={name}
            id={name}
            minRows={4}
            maxRows={8}
            maxLength={500}
            value={value}
            onChange={handleOnChange}
            className={styles.input}
            ref={refs}
          />
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            checked={isCheckbox && value}
            onChange={handleOnChange}
            className={styles.input}
            maxLength={100}
            ref={refs}
          />
        )}

        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      </div>
      {info && (
        <label className={styles.info} htmlFor={name}>
          {info}
        </label>
      )}
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
