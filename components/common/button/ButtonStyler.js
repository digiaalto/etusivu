import styles from "./ButtonStyler.module.sass"

const ButtonStyler = (props) => {
  const { children, alternative, primary, secondary, customStyle } = props
  const classes = `
    ${styles.wrapper}
    ${alternative ? styles.alternative : ""}
    ${primary ? styles.primary : ""}
    ${secondary ? styles.secondary : ""}
  `

  return (
    <div className={classes} style={customStyle}>
      {children}
    </div>
  )
}

export default ButtonStyler
