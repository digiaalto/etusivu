import styles from "./Hero.module.sass"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { LinkButton } from "../common/button"
import { Fade } from "react-awesome-reveal"
import { AiOutlineArrowDown } from "react-icons/ai"

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
  description: {
    delay: 600,
    duration: 1000,
    direction: "up",
    triggerOnce: true,
  },
  delayedAppear: {
    delay: 1200,
    triggerOnce: true,
  },
}
const sisalto = {
  header:
    "Huippuluokan verkkosivut kiireiselle yrittäjälle. Välittävällä palvelulla ilman julkaisun jälkeisiä ylläpitokustannuksia.",
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
        <Fade {...animCfg.description}>
          <h1 className={styles.description}>{sisalto.header}</h1>
          <Fade {...animCfg.delayedAppear}>
            <Link href="/#palvelut">
              <a className={styles.nextArrow}>
                <AiOutlineArrowDown />
              </a>
            </Link>
          </Fade>
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
