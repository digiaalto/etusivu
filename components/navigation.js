import styles from "../styles/navigation.module.sass"
import Link from "next/link"
import { useState, Fragment } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from "./sidebar"
import Overlay from "./utility/overlay"
import disableScroll from "disable-scroll"

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false)

  function toggleSidebar(event) {
    if (event) event.preventDefault()
    if (!sidebar) disableScroll.on()
    else disableScroll.off()
    setSidebar(!sidebar)
  }

  return (
    <Fragment>
      <nav className={styles.nav}>
        <button className={styles.titleButton}>
          <Link href="/">
            <a className={styles.titleLinkWrapper}>
              <img src="logo.svg" className={styles.logoImage} />
              <span className={styles.logoText}>Digiaalto</span>
            </a>
          </Link>
        </button>
        <BurgerMenu sidebar={sidebar} toggleSidebar={toggleSidebar} />
      </nav>
      <Sidebar visible={sidebar} toggleSidebar={toggleSidebar} />
      <Overlay visible={sidebar} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default Navigation

const BurgerMenu = ({ sidebar, toggleSidebar }) => {
  return (
    <button onClick={toggleSidebar} className={styles.burgerButton}>
      <GiHamburgerMenu className={styles.burgerIcon} />
    </button>
  )
}
