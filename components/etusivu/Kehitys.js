import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import KehitysEdut from "./KehitysEdut"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator
        overline="Kehitys"
        header="Verkkosivun rakettimoottori."
        second
      />
      <h2 className={styles.description}>
        Kehitämme tulevaisuuden tekniikalla sillä tavallinen verkkokäyttäjä
        päättää sekunneissa pysyykö hän sivustolla vai ei, ja tehoton verkkosivu
        tekee tämän päätöksen heidän puolestaan.
      </h2>
      <div className={styles.kehitysEdut}>
        <KehitysEdut />
      </div>
    </section>
  )
}

export default Kehitys
