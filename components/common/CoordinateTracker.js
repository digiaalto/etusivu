import styles from "./CoordinateTracker.module.sass"

const CoordinateTracker = ({ coordinates }) => {
  const { x, y } = coordinates
  return (
    <span className={styles.tracker}>
      X: {x} Y: {y}
    </span>
  )
}

export default CoordinateTracker
