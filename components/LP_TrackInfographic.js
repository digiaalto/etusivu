import styles from "../styles/LP_TrackInfographic.module.sass"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

const LP_RaceInfoGraphic = () => {
  const { ref, inView, entry } = useInView()
  const [initialY, setInitialY] = useState(0)
  const [y, setY] = useState(0)

  function handleScroll() {
    setY(window.scrollY)
  }

  useEffect(() => {
    if (inView) {
      if (initialY === 0) setInitialY(window.scrollY)
      window.addEventListener("scroll", handleScroll)
    } else {
      setInitialY(0)
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [inView])

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.content}>
        <Track
          inView={inView}
          line="Tehokas, ei turha"
          xInPercentage={-50 + (y / initialY - 1) * 150}
        />
        <Track
          inView={inView}
          line="Optimoitu, ei laiska"
          xInPercentage={(y / initialY - 1) * -100}
          separator={" ← "}
        />
        <Track
          inView={inView}
          line="Räätälöity, Ei kopioitu"
          xInPercentage={-50 + (y / initialY - 1) * 150}
        />
      </div>
    </section>
  )
}

export default LP_RaceInfoGraphic

const Track = ({ inView, line, xInPercentage, separator = " → " }) => {
  return (
    <div className={styles.track}>
      <div
        className={styles.lines}
        style={
          inView
            ? {
                willChange: "transform",
                transform: `translateX(${xInPercentage}%)`,
              }
            : null
        }
      >
        {[...Array(16)].map((e, i) => (
          <span key={`${line}-${i}`}>
            {line}
            <span className={styles.seperator}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
