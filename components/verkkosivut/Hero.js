import styles from "./Hero.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import Button from "../utility/Button"

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

const Hero = () => {
  return (
    <section className={styles.section}>
      <Fade {...animCfg.section}>
        <Background />
      </Fade>
      <Fade {...animCfg.content}>
        <div className={styles.content}>
          <SisaltoLinkit />
          <h1 className={styles.header}>
            Hyödylliset verkkosivut yritykselle.
          </h1>
          <Button
            href="/verkkosivut#tarjouspyynto"
            text="Tarjouspyyntö"
            primaryColor
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
        <Link href="/verkkosivut#miksi-digiaalto">
          <a className={styles.link}>Miksi Digiaalto</a>
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link href="/verkkosivut#tarjouspyynto">
          <a className={styles.link}>Paljonko maksaa</a>
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
