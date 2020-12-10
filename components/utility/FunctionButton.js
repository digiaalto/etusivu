import React, { useEffect } from "react"
import styles from "../../styles/functionButton.module.sass"

const FunctionButton = React.forwardRef((props, ref) => {
  const { text, name, onClick, icon, disabled } = props
  useEffect(() => {
    if (!disabled && ref) ref.current.focus()
  }, [disabled])

  return (
    <button
      type="button"
      ref={ref}
      className={`${styles.functionButton} ${!text ? styles.noText : null}`}
      style={disabled ? { backgroundColor: "#ccc" } : null}
      onClick={onClick}
      name={name}
      disabled={disabled}
    >
      {text && text}
      {icon && icon}
    </button>
  )
})
export default FunctionButton
