import styles from "./button.module.sass"
import Link from "next/link"

const Button = (props) => {
  if (props.outside)
    return (
      <ButtonWrapper>
        <Anchor {...props} />
      </ButtonWrapper>
    )
  else
    return (
      <ButtonWrapper>
        <Link href={props.href}>
          <a className={styles.button}>
            {props.icon}
            {props.text}
          </a>
        </Link>
      </ButtonWrapper>
    )
}

export default Button

const ButtonWrapper = ({ children }) => (
  <div className={styles.buttonWrapper}>{children}</div>
)

const Anchor = ({ icon, text, href, secondary }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
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
