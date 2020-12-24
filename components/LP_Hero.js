import styles from "../styles/LP_Hero.module.sass"
import React, { useState, useEffect } from "react"
import Button from "./utility/Button"
import { Fade } from "react-awesome-reveal"

const Hero = (props) => {
  const { refs } = props
  const [animElement, setAnimElement] = useState(0)

  useEffect(() => {
    const animInterval = setInterval(() => {
      let animElementIndex = animElement + 1
      if (animElementIndex > 2) {
        animElementIndex = 0
      }
      setAnimElement(animElementIndex)
    }, 2100)
    return () => clearInterval(animInterval)
  })

  return (
    <section className={styles.section} id="digiaalto" ref={refs}>
      <div className={styles.content}>
        <Fade delay={400} triggerOnce>
          <StylizedHeaders />
          <CtaButtons />
        </Fade>
        <Fade delay={700} direction="up" triggerOnce>
          <h1 className={styles.subheader}>
            Verkkokehittäjä Digiaalto rakentaa modernilla tavalla oikeasti
            tehokkaita ja laatutestattuja kotisivuja kiireisille yrittäjille.
            Kaikilla lisäpalveluilla.
          </h1>
        </Fade>
      </div>
    </section>
  )
}

export default Hero

const CtaButtons = () => {
  return (
    <div className={styles.ctaButtons}>
      <Button href="/tilaus" text="Uudet Kotisivut" />
      <Button href="/#kotisivujen-hankinta" text="Lue Lisää" secondary={true} />
    </div>
  )
}

const StylizedHeaders = ({ animElement }) => {
  return (
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
  )
}
