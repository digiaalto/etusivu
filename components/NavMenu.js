import styles from "../styles/NavMenu.module.sass"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { useRouter } from "next/router"
import Overlay from "./utility/Overlay"

/**
 * Navigation Menu for both desktop and mobile.
 *
 * Opens up an dark overlay with smooth animations on click.
 * Overlay closes once user clicks a link or the overlay itself.
 * Overlay also contains a close button for UX.
 */

const links = [
  {
    text: "Etusivu",
    href: "/#",
  },
  {
    text: "Verkkopalvelu",
    href: "/#verkkopalvelu",
  },
  {
    text: "Laatutesti",
    href: "/#laatutesti-google-lighthouse",
  },
  {
    text: "Kehitys",
    href: "/#kehitys",
  },
  {
    text: "Hinnat",
    href: "/#hinnat",
  },
]

const NavMenu = (props) => {
  const { menuOpen, toggleOverlay } = props
  return (
    <>
      <div className={styles.menu}>
        <button className={styles.menuButton} onClick={toggleOverlay}>
          {menuOpen ? <AiOutlineClose /> : <FiMenu />}
          Menu
        </button>
      </div>
      <Overlay
        visible={menuOpen}
        children={<LinkList links={links} toggleOverlay={toggleOverlay} />}
      />
    </>
  )
}

export default NavMenu

const LinkList = (props) => {
  const { links, toggleOverlay } = props
  const router = useRouter()

  return (
    <ul className={styles.linkList}>
      {links.map((link, index) => (
        <a
          className={styles.linkAnchor}
          key={`nav-link-${index}`}
          onClick={(e) => {
            toggleOverlay()
            router.push(link.href)
          }}
        >
          {link.text}
        </a>
      ))}
    </ul>
  )
}
