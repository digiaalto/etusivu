import styles from "./ScoreWidget.module.sass"
import React, { useEffect, useState, useRef } from "react"
import { animated, useSpring } from "react-spring"

const gray = "#bdc1c6"
const green = "#18b663"
const bgGreen = "#D1F0E0"
const orange = "#FB8C00"
const bgOrange = "#FEE8CC"
const red = "#E53935"
const bgRed = "#FAD7D7"

const ScoreWidget = (props) => {
  const {
    label,
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const [progressOffset, setProgressOffset] = useState(0) // Controls the length.
  const bgRef = useRef(null)
  const fgRef = useRef(null)

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setProgressOffset(progressOffset)
    const bgColor = progress < 50 ? bgRed : progress < 90 ? bgOrange : bgGreen
    const fgColor = progress < 50 ? red : progress < 90 ? orange : green
    bgRef.current.style = `stroke: ${bgColor}`
    fgRef.current.style = `stroke: ${fgColor}`
  }, [])

  const spring = useSpring({
    from: { strokeDashoffset: 0 },
    to: { strokeDashoffset: progressOffset },
  })

  return (
    <div className={styles.container}>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <svg className={styles.svg} width={size} height={size}>
            <circle
              ref={bgRef}
              className={styles.background}
              stroke={circleOneStroke}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <animated.circle
              ref={fgRef}
              className={styles.foreground}
              stroke={circleTwoStroke}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              style={spring}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className={styles.centerLabel}>{progress}</span>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  )
}

export default ScoreWidget

ScoreWidget.defaultProps = {
  hoverText: "Lighthouse tulokset.",
}

ScoreWidget.defaultProps = {
  circleOneStroke: gray,
  circleTwoStroke: gray,
}
