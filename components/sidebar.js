import { Fragment } from "react"
import styles from "../styles/sidebar.module.sass"
import { useRouter } from "next/router"

const Sidebar = ({ visible, toggleSidebar }) => {
  const router = useRouter()

  function activateLink(href) {
    toggleSidebar(null)
    router.push(href).then(() => window.scrollTo(0, 0))
  }

  return (
    <Fragment>
      <div className={`${styles.background} ${visible ? styles.open : null}`}>
        <div className={styles.content}>
          <h2 className={styles.header} onClick={() => activateLink("/")}>
            Etusivu
          </h2>
          <ul className={styles.navList}>
            <NavigationItem
              href="/miten-verkkosivun-sisalto-suunnitellaan"
              text="Sisällönsuunnittelu"
              activateLink={activateLink}
            />
            <NavigationItem
              href="/laatutestaus"
              text="Laatutestaus"
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
