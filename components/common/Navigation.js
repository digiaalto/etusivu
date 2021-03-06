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
      <span className={styles.description}>Takuulla kotisivuja.</span>
      <ol className={styles.links}>
        <NavLink href={"/tarjouspyynto"} text="Tarjouspyyntö" />
        <NavLink href={"/#usein-kysyttya"} text="Usein Kysyttyä" />
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
