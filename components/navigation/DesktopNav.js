import styles from "./DesktopNav.module.sass"

const DesktopNav = ({ items, activateItem }) => {
  return (
    <ul className={styles.navList}>
      {items.map((linkObject, index) => (
        <li className={styles.navItem} key={`desktop-nav-item-${index}`}>
          <span onClick={() => activateItem(linkObject.href)}>
            {linkObject.text}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default DesktopNav
