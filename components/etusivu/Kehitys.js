import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import KehitysEdut from "./KehitysEdut"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator
        overline="Kehitys"
        header="Luotettava ja tehokas moottori."
        second
      />
      <h2 className={styles.description}>
        Verkkosivun ylläpidon pitää olla vaivatonta sekä käyttö nopeaa, sillä
        tavallinen verkkokäyttäjä päättää sekunneissa poistuuko hän
        yrityssivuilta. Tehottomalla tekniikalla rakennettu sivusto tekee tämän
        päätöksen heidän puolestaan.
      </h2>
      <div className={styles.kehitysEdut}>
        <KehitysEdut />
      </div>
    </section>
  )
}

export default Kehitys
