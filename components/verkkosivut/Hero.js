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
        <div className={styles.headersWrap}>
          <h1 className={styles.header}>
            Älykäs kotisivu joka tukee liiketoimintaasi perusteellisesti.
          </h1>
          <h2 className={styles.description}>
            Yritystä ei kannata edustaa verkossa 20 vuotta vanhalla
            teknologialla.
          </h2>
          <LinkButton
            href="/verkkosivut#vanhat-verkkosivut"
            text="Selvitä miksi"
          />
        </div>
      </Fade>
    </section>
  )
}

const SisaltoLinkit = () => {
  return (
    <nav role="navigation">
      <ol className={styles.navList}>
        <li>
          <Link href="/verkkosivut#vanhat-verkkosivut">
            <a className={styles.navLink}>Vanhat sivut</a>
          </Link>
        </li>
        <li>
          <Link href="/verkkosivut#uudet-verkkosivut">
            <a className={styles.navLink}>Uudet sivut</a>
          </Link>
        </li>
        <li>
          <Link href="/verkkosivut#usein-kysyttya">
            <a className={styles.navLink}>Usein kysyttyä</a>
          </Link>
        </li>
      </ol>
    </nav>
  )
}

const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles.block} />
      <div className={styles.block} />
      <div className={styles.block} />
      {/* <div className={styles.block} /> */}
    </div>
  )
}

export default Hero
