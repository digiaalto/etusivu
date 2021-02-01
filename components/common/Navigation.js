import styles from "./Navigation.module.sass"
import Link from "next/link"
import Logo from "./Logo"

const Navigation = (props) => {
  const { topbar } = props
  return (
    <nav role="navigation" className={styles.nav}>
      <Logo />
      <NavList />
    </nav>
  )
}

const NavList = () => {
  return (
    <ol className={styles.navList}>
      <NavLink href={"/verkkosivut"} text="Verkkosivut" />
      <NavLink href={"/tarjouspyynto"} text="Tarjouspyyntö" />
      <NavLink href={"/usein-kysyttya"} text="Usein kysyttyä" />
      <NavLink href={"/blogi"} text="Blogi" />
    </ol>
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
