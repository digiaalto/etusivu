import styles from "./Button.module.sass"
import React from "react"
import Link from "next/link"

/**
 *
 * @params {{href: string, text: string, icon: object, secondary: object, customStyle: object}}
 */

const Button = (props) => {
  const { outside } = props
  return outside ? <ExternalButton {...props} /> : <InternalButton {...props} />
}

const InternalButton = (props) => {
  const { href, text, icon, secondary, customStyle } = props
  return (
    <Link href={href}>
      <a
        className={`${styles.anchor} ${secondary && styles.secondary}`}
        style={customStyle ? customStyle : null}
      >
        {text}
        {icon && icon}
      </a>
    </Link>
  )
}

const ExternalButton = (props) => {
  const { href, text, icon, secondary, customStyle } = props
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.anchor} ${secondary && styles.secondary}`}
      style={customStyle ? customStyle : null}
    >
      {text}
      {icon && icon}
    </a>
  )
}

export default Button
