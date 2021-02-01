import styles from "./Hero.module.sass"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { LinkButton } from "../common/button"
import { ImArrowDown } from "react-icons/im"

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
        <StylizedHeaders animElement={animElement} />
        <CtaButtons />
        <h1 className={styles.description}>
          Hei. Emme ole markkinointitoimisto. Haluamme vain rakentaa tehokkaalla
          teknologialla verkkosivuja yrityksille jotka arvostavat nykyaikaista
          teknologiaa ja sivuston vaivatonta toimintaa.
        </h1>
        <Link href="/#palvelut">
          <a className={styles.nextArrow} aria-label="Linkki alempaan osioon">
            <ImArrowDown />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Hero

const CtaButtons = () => {
  return (
    <div className={styles.ctaButtons}>
      <LinkButton href="/verkkosivut#tarjouspyynto" text="Aloita Projekti" />
      <LinkButton href="/#palvelut" text="Miksi Digiaalto" alternative />
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
