import styles from "../styles/menu.module.sass"
import { FiMenu } from "react-icons/fi"

/**
 * Navigation Menu for both desktop and mobile.
 *
 * Opens up an dark overlay with smooth animations on click.
 * Overlay closes once user clicks a link or the overlay itself.
 * Overlay also contains a close button for UX.
 */

const Menu = () => {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
        <FiMenu />
        Menu
      </button>
    </div>
  )
}

export default Menu
