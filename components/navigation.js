import styles from "../styles/navigation.module.sass"
import Link from "next/link"
import { useState, Fragment } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
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
        <span className={styles.logo}>
          <Link href="/">
            <a>Digiaalto.fi</a>
          </Link>
        </span>
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
    !sidebar && (
      <button onClick={toggleSidebar} className={styles.burgerButton}>
        <HiMenuAlt3 className={styles.burgerIcon} />
      </button>
    )
  )
}
