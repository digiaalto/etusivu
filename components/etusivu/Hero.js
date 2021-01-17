import styles from "./Hero.module.sass"
import React, { useState, useEffect } from "react"
import { LinkButton } from "../common/button"
import { Fade } from "react-awesome-reveal"

const animCfg = {
  header: {
    delay: 400,
    duration: 1500,
    triggerOnce: true,
  },
  ctaBtns: {
    delay: 600,
    duration: 1500,
    triggerOnce: true,
  },
  subheader: {
    delay: 600,
    duration: 1000,
    direction: "up",
    triggerOnce: true,
  },
}

const sisalto = {
  header:
    "Kovemman luokan verkkosivut pk-yrittäjälle. Välittävällä palvelulla ilman julkaisun jälkeisiä ylläpitokustannuksia.",
}

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
        <Fade {...animCfg.header}>
          <StylizedHeaders animElement={animElement} />
        </Fade>
        <Fade {...animCfg.ctaBtns}>
          <CtaButtons />
        </Fade>
        <Fade {...animCfg.subheader}>
          <h1 className={styles.subheader}>{sisalto.header}</h1>
        </Fade>
      </div>
    </section>
  )
}

export default Hero

const CtaButtons = () => {
  return (
    <div className={styles.ctaButtons}>
      <LinkButton href="/verkkosivut#tarjouspyynto" text="Aloita projekti" />
      <LinkButton href="/#palvelut" text="Miksi Digiaalto?" alternative />
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
