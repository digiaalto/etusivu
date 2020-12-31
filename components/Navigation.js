import styles from "../styles/Navigation.module.sass"
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <NavList />
    </nav>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>Digiaalto</a>
    </Link>
  )
}

const NavList = () => {
  return (
    <ul className={styles.navList}>
      <NavLink href={"/verkkosivut"} text="Verkkosivut" />
      <NavLink href={"/yhteydenotto"} text="Yhteydenotto" />
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
