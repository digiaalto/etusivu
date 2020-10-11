import styles from "../styles/hero.module.sass"
import { Zoom } from "react-awesome-reveal"
import Button from "../components/utility/button"

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Zoom triggerOnce>
          <h1 className={styles.header}>
            Haluatko <span className={styles.highlight}> löytyä </span>
            verkosta <span className={styles.highlight2}> helposti </span>
            sekä <span className={styles.highlight3}> nopeasti?</span>
          </h1>
          <h2 className={styles.subheader}>
            Digiaalto voi auttaa rakentamalla sinulle tarkasti optimoidut
            verkkosivut, joiden toteutuksen takaa Googlen kehittämä
            verkkosivujen laatutesti.
          </h2>
          <Button text="Lue lisää" href="#laatutestaus" />
        </Zoom>
      </div>
    </section>
  )
}

export default Hero
