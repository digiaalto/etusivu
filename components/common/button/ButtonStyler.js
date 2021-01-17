import styles from "./ButtonStyler.module.sass"

const ButtonStyler = (props) => {
  const {
    children,
    alternative,
    primary,
    secondary,
    customClass,
    customStyle,
  } = props
  const classes = `
    ${styles.wrapper}
    ${alternative ? styles.alternative : ""}
    ${primary ? styles.primary : ""}
		${secondary ? styles.secondary : ""}
		${customClass ? customClass : ""}
  `

  return (
    <div className={classes} style={customStyle}>
      {children}
    </div>
  )
}

export default ButtonStyler
