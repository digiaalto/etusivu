import styles from "./button.module.sass"
import Link from "next/link"

const Button = (props) => {
  if (props.outside)
    return (
      <ButtonWrapper center={props.center}>
        <Anchor {...props} />
      </ButtonWrapper>
    )
  else
    return (
      <ButtonWrapper center={props.center}>
        <Link href={props.href}>
          <a className={styles.buttonAnchor}>
            {props.icon}
            {props.text}
          </a>
        </Link>
      </ButtonWrapper>
    )
}

export default Button

const ButtonWrapper = ({ center, children }) => {
  return (
    <div
      className={`${styles.buttonWrapper} ${
        center ? styles.buttonWrapperCenter : null
      }`}
    >
      {children}
    </div>
  )
}

const Anchor = ({ icon, text, href, secondary }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.buttonAnchor}
    >
      {icon}
      {text}
    </a>
  )
}
Button.defaultProps = {
  href: "/",
  text: "Placeholder",
}
