import styles from "../styles/LP_RaceInfographic.module.sass"
import { useState, useEffect, useRef } from "react"
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
  })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.content}>
        <Track
          inView={inView}
          lines={[
            "Uusi ratkaisu",
            "Parempi optimointi",
            "Pieni poistumisprosentti",
          ]}
          xInPercentage={-50 + (y / initialY - 1) * 150}
        />
        <Track
          inView={inView}
          lines={[
            "Vanha metodologia",
            "Huono käyttökokemus",
            "Iso poistusmiprosentti",
          ]}
          xInPercentage={(y / initialY - 1) * -100}
          separator={" < "}
        />
      </div>
    </section>
  )
}

export default LP_RaceInfoGraphic

const Track = ({ inView, lines, xInPercentage, separator = " > " }) => {
  return (
    <div className={styles.track}>
      <div
        className={styles.lines}
        style={inView ? { transform: `translateX(${xInPercentage}%)` } : null}
      >
        {[...Array(6)].map((e, i) =>
          lines.map((line, index) => {
            return (
              <span className={styles.line} key={`line-${i}-${index}`}>
                {line}
                <span className={styles.seperator}>{separator}</span>
              </span>
            )
          })
        )}
      </div>
    </div>
  )
}
