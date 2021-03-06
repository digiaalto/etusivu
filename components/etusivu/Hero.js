import styles from "./Hero.module.sass"
import React, { useState, useEffect } from "react"
import { Link as LinkScroll } from "react-scroll"
import { BiMouse } from "react-icons/bi"

import { LinkButton } from "../common/button"

const switchDelay = 1000

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
    }, switchDelay)
    return () => clearInterval(animInterval)
  })

  return (
    <section className={styles.section} id="digiaalto" ref={refs}>
      <div className={styles.content}>
        <StylizedHeaders animElement={animElement} />
        <CtaButtons />
        <h1 className={styles.description}>
          Laatutestattuja verkkosivuja yrityksille ja järjestöille täydellä
          tyytyväisyystakuulla sekä välittävällä palvelulla.
        </h1>
        <LinkScroll
          className={styles.scrollLink}
          aria-label="Linkki alempaan osioon"
          smooth={true}
          to="palvelut"
        >
          <BiMouse />
        </LinkScroll>
      </div>
    </section>
  )
}

export default Hero

const CtaButtons = () => {
  return (
    <div className={styles.ctaButtons}>
      <LinkButton href="/tarjouspyynto" text="Uudet kotisivut" />
      <LinkButton href="palvelut" text="Lisätietoa" alternative smooth />
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
          Suunnittelemme.
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
          Kehitämme.
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
          Autamme.
        </span>
      </div>
    </h1>
  )
}
