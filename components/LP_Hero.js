import styles from "../styles/LP_Hero.module.sass"
import Link from "next/link"
import { Zoom } from "react-awesome-reveal"

const Hero = () => {
  return (
    <section className={styles.section}>
      <Zoom delay={200} triggerOnce>
        <div className={styles.content}>
          <span className={styles.salesPitch}>
            Haluatko <span className={styles.highlight}> löytyä </span>
            verkosta <span className={styles.highlight2}> helposti </span>
            sekä <span className={styles.highlight3}> nopeasti?</span>
          </span>
          <h1 className={styles.header}>
            Verkkokehittäjä Digiaalto on erikoistunut suunnittelemaan
            laatutestattuja verkkosivuja yrittäjälle kenen kalenteri on täynnä.
          </h1>
          <Link href="#verkkosivujen-haasteita">
            <a>
              <img
                src="lue-lisaa.svg"
                className={styles.ctaBtn}
                alt="Lue Lisää"
              />
            </a>
          </Link>
        </div>
      </Zoom>
    </section>
  )
}

export default Hero
