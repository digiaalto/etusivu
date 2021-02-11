import styles from "./Navigation.module.sass"
import Link from "next/link"
import Logo from "./Logo"

const Navigation = ({ topbar }) => {
  return (
    <nav
      role="navigation"
      className={styles.nav}
      style={{ top: topbar ? "48px" : "0px" }}
    >
      <Logo />
      <ol className={styles.links}>
        <NavLink href={"/hinnat"} text="Hinnat" />
        <NavLink href={"/usein-kysyttya"} text="Usein kysyttyä" />
        <NavLink href={"/blogi"} text="Blogi" />
      </ol>
    </nav>
  )
}

const NavLink = (props) => {
  const { href, text } = props
  return (
    <li>
      <Link href={href}>
        <a className={styles.link}>{text}</a>
      </Link>
    </li>
  )
}

export default Navigation
