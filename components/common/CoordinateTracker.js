import styles from "./CoordinateTracker.module.sass"
import { useState, useEffect } from "react"

const CoordinateTracker = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const updatePos = (e) => {
    setPos({ x: e.pageX, y: e.pageY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", updatePos)
    return () => window.removeEventListener("mousemove", updatePos)
  })

  return (
    <span className={styles.tracker}>
      X: {pos.x} Y: {pos.y}
    </span>
  )
}

export default CoordinateTracker
