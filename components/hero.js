import styles from "../styles/hero.module.sass"
import { Zoom } from "react-awesome-reveal"
import { GoTriangleDown } from "react-icons/go"

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h6 className={styles.salesPitch}>
          Haluatko <span className={styles.highlight}> löytyä </span>
          verkosta <span className={styles.highlight2}> helposti </span>
          sekä <span className={styles.highlight3}> nopeasti?</span>
        </h6>
        <div className={styles.directionIcons}>
          <Zoom triggerOnce delay={1500}>
            <GoTriangleDown className={styles.directionIcon} />
          </Zoom>
          <Zoom triggerOnce delay={1800}>
            <GoTriangleDown className={styles.directionIcon} />
          </Zoom>
        </div>
        <h2 className={styles.header}>
          Verkkokehittäjä Digiaalto on erikoistunut luomaan markkinointisivuja
          modernilla, tehostetulla web-app teknologialla.
        </h2>
        <img src="lue-lisaa.svg" className={styles.lueLisaa} />
      </div>
    </section>
  )
}

export default Hero
