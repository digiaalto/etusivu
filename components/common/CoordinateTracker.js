import styles from "./CoordinateTracker.module.sass"
import { useRef } from "react"
import { useMouse } from "react-use"

const CoordinateTracker = () => {
  const ref = useRef(null)
  const { docX, docY } = useMouse(ref)

  return (
    <span className={styles.tracker} ref={ref}>
      X: {docX} Y: {docY}
    </span>
  )
}

export default CoordinateTracker
