import styles from "../styles/LP_Hero.module.sass"
import React, { useState, useEffect } from "react"
import Link from "next/link"

const Hero = () => {
  const [animElement, setAnimElement] = useState(0)

  useEffect(() => {
    const animInterval = setInterval(() => {
      let animElementIndex = animElement + 1
      if (animElementIndex > 2) {
        animElementIndex = 0
      }
      console.log(`setting animElement: ${animElementIndex}`)
      setAnimElement(animElementIndex)
    }, 2500)
    return () => clearInterval(animInterval)
  })

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.salesPitch}>
          <span
            className={`${styles.highlightBackground} ${
              animElement === 0 ? styles.reverseFadeAnimation : null
            }`}
          >
            <span
              className={`${styles.highlightForeground} ${
                animElement === 0 ? styles.fadeAnimation : null
              }`}
            >
              Suunnittelu.
            </span>
          </span>
          <div
            className={`${styles.highlightBackground2} ${
              animElement === 1 ? styles.reverseFadeAnimation : null
            }`}
          >
            <span
              className={`${styles.highlightForeground2} ${
                animElement === 1 ? styles.fadeAnimation : null
              }`}
            >
              Kehitys.
            </span>
          </div>
          <div
            className={`${styles.highlightBackground3} ${
              animElement === 2 ? styles.reverseFadeAnimation : null
            }`}
          >
            <span
              className={`${styles.highlightForeground3} ${
                animElement === 2 ? styles.fadeAnimation : null
              }`}
            >
              Julkaisu.
            </span>
          </div>
        </h1>
        <h1 className={styles.subheader}>
          Laatutestattuja yrityssivuja vaivattomasti kiireisille Suomalaisille
          yrittäjille.
        </h1>
        <Link href="#kehityksen-haasteita">
          <a>
            <img
              src="lue-lisaa.svg"
              className={styles.ctaBtn}
              alt="Lue Lisää"
            />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Hero
