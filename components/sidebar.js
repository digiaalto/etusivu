import { Fragment } from "react"
import styles from "../styles/sidebar.module.sass"
import { useRouter } from "next/router"
import { VscChromeClose } from "react-icons/vsc"

const Sidebar = ({ visible, toggleSidebar }) => {
  const router = useRouter()

  function activateLink(href) {
    toggleSidebar(null)
    router.push(href).then(() => window.scrollTo(0, 0))
  }

  return (
    <Fragment>
      <div className={`${styles.panel} ${visible ? styles.open : null}`}>
        <button onClick={toggleSidebar} className={styles.burgerButton}>
          <VscChromeClose className={styles.closeIcon} />
        </button>
        <div className={styles.content}>
          <h2 className={styles.header} onClick={() => activateLink("/")}>
            Etusivu
          </h2>
          <ul className={styles.navList}>
            <NavigationItem
              href="/#laatutestaus"
              text="Laatutestaus"
              activateLink={activateLink}
            />
            <NavigationItem
              href="/#toteutus"
              text="Toteutus"
              activateLink={activateLink}
            />
            <NavigationItem
              href="/#hinnoittelu"
              text="Hinnoittelu"
              activateLink={activateLink}
            />
            <NavigationItem
              href="/#yhteystiedot"
              text="Yhteystiedot"
              activateLink={activateLink}
            />
          </ul>
          <h2 className={styles.header} onClick={() => activateLink("/")}>
            Ohjeet
          </h2>
          <ul className={styles.navList}>
            <NavigationItem
              href="/miten-verkkosivun-sisalto-suunnitellaan"
              text="Sisällönsuunnittelu"
              activateLink={activateLink}
            />
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Sidebar

const NavigationItem = ({ text, href, activateLink }) => {
  return (
    <li className={styles.navItem}>
      <span onClick={() => activateLink(href)}>{text}</span>
    </li>
  )
}
