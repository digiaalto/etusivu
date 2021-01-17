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
            Hyödylliset verkkosivut yritykselle.
          </h1>
          <LinkButton
            href="/verkkosivut#tarjouspyynto"
            text="Tarjouspyyntö"
            primary
            customStyle={{ marginTop: "2rem", marginBottom: "1rem" }}
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
        <Link href="/verkkosivut#vanha-tekniikka">
          <a className={styles.link}>Vanha tekniikka</a>
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link href="/verkkosivut#uusi-tekniikka">
          <a className={styles.link}>Uusi tekniikka</a>
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link href="/verkkosivut#tarjouspyynto">
          <a className={styles.link}>Paljonko maksaa?</a>
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
