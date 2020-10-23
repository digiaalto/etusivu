import styles from "./DesktopNav.module.sass"
import Link from "next/link"

const DesktopNav = ({ items, activateItem }) => {
  return (
    <ul className={styles.navList}>
      {items.map((linkObject, index) => (
        <li className={styles.navItem} key={`desktop-nav-item-${index}`}>
          <Link href={linkObject.href}>
            <a>{linkObject.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DesktopNav
