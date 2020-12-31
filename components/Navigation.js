import styles from "../styles/Navigation.module.sass"
import Link from "next/link"
import Logo from "./common/Logo"

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <NavList />
    </nav>
  )
}

const NavList = () => {
  return (
    <ul className={styles.navList}>
      <NavLink href={"/verkkosivut"} text="Verkkosivut" />
      <NavLink href={"/haastattelu"} text="Haastattelu" />
    </ul>
  )
}

const NavLink = (props) => {
  const { href, text } = props
  return (
    <li>
      <Link href={href}>
        <a className={styles.navLink}>{text}</a>
      </Link>
    </li>
  )
}

export default Navigation
