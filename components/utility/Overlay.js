import styles from "./Overlay.module.sass"
import { Fragment } from "react"

const Overlay = (props) => {
  const { visible, children, zIndex = 999 } = props
  if (!visible) return null

  return (
    <Fragment>
      <div className={styles.overlay}>{children}</div>
    </Fragment>
  )
}

export default Overlay
