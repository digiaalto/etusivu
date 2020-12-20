import styles from "../styles/menu.module.sass"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import Overlay from "./utility/Overlay"

/**
 * Navigation Menu for both desktop and mobile.
 *
 * Opens up an dark overlay with smooth animations on click.
 * Overlay closes once user clicks a link or the overlay itself.
 * Overlay also contains a close button for UX.
 */

const Menu = (props) => {
  const { menuOpen, toggleOverlay } = props
  return (
    <>
      <div className={styles.menu}>
        <button className={styles.menuButton} onClick={toggleOverlay}>
          {menuOpen ? <AiOutlineClose /> : <FiMenu />}
          Menu
        </button>
      </div>
      <Overlay toggle={toggleOverlay} visible={menuOpen} />
    </>
  )
}

export default Menu

const LinkList = () => {
  return null
}
