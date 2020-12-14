import styles from "./Button.module.sass"
import React from "react"
import Link from "next/link"

/**
 *
 * @params {{href: string, text: string, icon: object, customStyle: object}}
 */

const Button = (props) => {
  const { outside } = props
  return outside ? (
    <ExternalButton value={props} />
  ) : (
    <InternalButton value={props} />
  )
}

const InternalButton = ({ value }) => {
  return (
    <Link href={value.href}>
      <a className={styles.buttonLink}>
        {value.icon && value.icon} {value.text}
      </a>
    </Link>
  )
}

const ExternalButton = ({ value }) => {
  return (
    <a
      href={value.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.buttonLink}
    >
      {value.icon && value.icon} {value.text}
    </a>
  )
}

export default Button
