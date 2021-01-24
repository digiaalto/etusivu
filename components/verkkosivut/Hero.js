import styles from "./Hero.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import { LinkButton } from "../common/button"

const animCfg = {
  section: {
    direction: "up",
    triggerOnce: true,
  },
  content: {
    direction: "up",
    delay: 400,
    triggerOnce: true,
  },
}

const Hero = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="verkkosivut">
      <Fade {...animCfg.section}>
        <Background />
      </Fade>
      <Fade {...animCfg.content}>
        <div className={styles.content}>
          <SisaltoLinkit />
          <h1 className={styles.header}>
            Nettisivu joka kasvaa yrityksesi kanssa.
          </h1>
          <h2 className={styles.description}>
            Laadukkaalla nettisivulla kilpailuetuja verkossa.
          </h2>
          <LinkButton
            href="/verkkosivut#tarjouspyynto"
            text="Tarjouspyyntö"
            primary
          />
        </div>
      </Fade>
    </section>
  )
}

const SisaltoLinkit = () => {
  return (
    <ul className={styles.sisaltoLinkit}>
      <li className={styles.linkItem}>
        <Link href="/verkkosivut#vanhat-verkkosivut">
          <a className={styles.link}>Vanhat sivut</a>
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link href="/verkkosivut#uudet-verkkosivut">
          <a className={styles.link}>Uudet sivut</a>
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link href="/verkkosivut#usein-kysyttya">
          <a className={styles.link}>Usein kysyttyä</a>
        </Link>
      </li>
    </ul>
  )
}

const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles.block} />
      <div className={styles.block} />
      <div className={styles.block} />
      <div className={styles.block} />
    </div>
  )
}

export default Hero
