import styles from "./NavSidebar.module.sass"
import { VscChromeClose } from "react-icons/vsc"

const Sidebar = ({ items, visible, toggleSidebar, activateItem }) => {
  return (
    <div className={`${styles.panel} ${visible ? styles.open : null}`}>
      <button onClick={toggleSidebar} className={styles.burgerButton}>
        <VscChromeClose className={styles.closeIcon} />
      </button>
      <div className={styles.content}>
        <h2 className={styles.header} onClick={() => activateItem("/")}>
          Etusivu
        </h2>
        <ul className={styles.navList}>
          {items.map((linkObject, index) => (
            <li className={styles.navItem} key={`desktop-nav-item-${index}`}>
              <span onClick={() => activateItem(linkObject.href)}>
                {linkObject.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
