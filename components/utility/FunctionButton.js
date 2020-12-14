import styles from "../../styles/functionButton.module.sass"

const FunctionButton = (props) => {
  const { text, type = "button", name, onClick, icon, disabled } = props

  return (
    <button
      type={type}
      className={`${styles.functionButton} ${!text && styles.noText}`}
      style={disabled ? { backgroundColor: "#ccc" } : null}
      onClick={onClick}
      name={name}
      disabled={disabled}
    >
      {text && text}
      {icon && icon}
    </button>
  )
}

export default FunctionButton
