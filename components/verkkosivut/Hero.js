import styles from "./Hero.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import Button from "../utility/Button"

const animCfg = {
  section: {
    direction: "up",
    triggerOnce: true,
  },
}

const Hero = () => {
  return (
    <section className={styles.section}>
      <Fade {...animCfg.section}>
        <Background />
        <div className={styles.content}>
          <h1 className={styles.header}>
            Kehitetään verkkosivu josta on hyötyä yrityksellesi.
          </h1>
          <SisaltoLinkit />
          <div className={styles.ctaContainer}>
            <Button
              href="/verkkosivut#tarjouspyynto"
              text="Tarjouspyyntö"
              important
            />
          </div>
        </div>
      </Fade>
    </section>
  )
}

const SisaltoLinkit = () => {
  return (
    <ul className={styles.sisaltoLinkit}>
      <li className={styles.linkItem}>
        <Link href="/verkkosivut#muut-digitoimistot">
          <a className={styles.link}>Muut digitoimistot.</a>
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link href="/verkkosivut#miksi-digiaalto">
          <a className={styles.link}>Miksi Digiaalto?</a>
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
