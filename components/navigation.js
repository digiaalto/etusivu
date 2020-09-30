import styles from "../styles/navigation.module.sass"
import { useState, Fragment } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { VscChromeClose } from "react-icons/vsc"
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
			<header className={styles.header}>
				<nav className={styles.nav}>
					<BurgerMenu sidebar={sidebar} toggleSidebar={toggleSidebar} />
				</nav>
			</header>
			<Sidebar visible={sidebar} toggleSidebar={toggleSidebar} />
			<Overlay visible={sidebar} toggleSidebar={toggleSidebar} />
		</Fragment>
	)
}

export default Navigation

const BurgerMenu = ({ sidebar, toggleSidebar }) => {
	return (
		<button onClick={toggleSidebar} className={styles.burgerButton}>
			{sidebar ? (
				<VscChromeClose className={styles.burgerIcon} />
			) : (
				<HiMenuAlt3 className={styles.burgerIcon} />
			)}
		</button>
	)
}
