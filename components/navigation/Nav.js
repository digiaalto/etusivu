import styles from "./Nav.module.sass"
import Link from "next/link"
import disableScroll from "disable-scroll"
import { useRouter } from "next/router"
import { useState, Fragment } from "react"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false)
  const router = useRouter()

  function toggleSidebar(event) {
    if (event) event.preventDefault()
    if (!sidebar) disableScroll.on()
    else disableScroll.off()
    setSidebar(!sidebar)
  }

  function activateItem(href) {
    toggleSidebar(null)
    router.push(href).then(() => window.scrollTo(0, 0))
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
        <DesktopNav items={items} activateItem={activateItem} />
        <MobileNav
          items={items}
          sidebarOpen={sidebar}
          toggleSidebar={toggleSidebar}
          activateItem={activateItem}
        />
      </nav>
    </Fragment>
  )
}

export default Navigation

const items = [
  {
    href: "/#laatutestaus",
    text: "Laatutestaus",
  },
  {
    href: "/#toteutus",
    text: "Toteutus",
    subLinks: [
      {
        href: "/miten-verkkosivun-sisalto-suunnitellaan",
        text: "Sisällönsuunnittelu",
      },
    ],
  },
  {
    href: "/#hinnoittelu",
    text: "Hinnoittelu",
  },
  {
    href: "/#yhteystiedot",
    text: "Yhteystiedot",
  },
]
