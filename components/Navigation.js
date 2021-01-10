import styles from "../styles/Navigation.module.sass"
import Link from "next/link"
import Logo from "./common/Logo"
import { Fade } from "react-awesome-reveal"

const animCfg = {
  nav: {
    direction: "down",
    duration: 750,
  },
}

const Navigation = (props) => {
  const { topbar } = props
  return (
    <nav className={styles.nav} style={topbar ? null : { marginTop: "0" }}>
      <Fade {...animCfg.nav}>
        <Logo />
        <NavList />
      </Fade>
    </nav>
  )
}

const NavList = () => {
  return (
    <ul className={styles.navList}>
      <NavLink href={"/verkkosivut"} text="Verkkosivut" />
      <NavLink href={"/meista"} text="Meistä" />
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
