import styles from "./Navigation.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

import Logo from "./Logo"

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
      <NavLink href={"/verkkosivut#tarjouspyynto"} text="Tarjouspyyntö" />
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
