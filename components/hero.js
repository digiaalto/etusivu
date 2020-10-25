import styles from "../styles/hero.module.sass"

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h6 className={styles.salesPitch}>
          Haluatko <span className={styles.highlight}> löytyä </span>
          verkosta <span className={styles.highlight2}> helposti </span>
          sekä <span className={styles.highlight3}> nopeasti?</span>
        </h6>
        <h2 className={styles.header}>
          Verkkokehittäjä Digiaalto on erikoistunut luomaan markkinointisivuja
          modernilla, ylivoimaisella web-app techillä.
        </h2>
      </div>
      <div className={styles.lueLisaaContainer}>
        <img src="lue-lisaa.svg" className={styles.lueLisaa} />
      </div>
    </section>
  )
}

export default Hero
