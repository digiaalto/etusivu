import styles from "./MobileNav.module.sass"
import { GiHamburgerMenu } from "react-icons/gi"
import NavSidebar from "./NavSidebar"
import Overlay from "../utility/overlay"

const MobileNav = ({ sidebarOpen, toggleSidebar, activateItem, items }) => {
  return (
    <div className={styles.nav}>
      <BurgerMenu toggleSidebar={toggleSidebar} />
      <NavSidebar
        items={items}
        visible={sidebarOpen}
        toggleSidebar={toggleSidebar}
        activateItem={activateItem}
      />
      <Overlay visible={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default MobileNav

const BurgerMenu = ({ toggleSidebar }) => {
  return (
    <button onClick={toggleSidebar} className={styles.burgerButton}>
      <GiHamburgerMenu className={styles.burgerIcon} />
    </button>
  )
}
