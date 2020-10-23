import styles from "./DesktopNav.module.sass"
import React from "react"
import Link from "next/link"

const ForwardLink = React.forwardRef(({ activateItem, text, href }, ref) => {
  return (
    <a href={href} onClick={() => activateItem(href)} ref={ref}>
      {text}
    </a>
  )
})

const DesktopNav = ({ items, activateItem }) => {
  return (
    <ul className={styles.navList}>
      {items.map((linkObject, index) => (
        <li className={styles.navItem} key={`desktop-nav-item-${index}`}>
          <Link href={linkObject.href} passHref>
            <ForwardLink activateItem={activateItem} text={linkObject.text} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DesktopNav
