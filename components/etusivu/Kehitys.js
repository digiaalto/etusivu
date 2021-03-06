import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import KehitysEdut from "./KehitysEdut"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator
        overline="Kehitys"
        header="Moderni tapa luoda verkkosivuja ja appeja."
        second
      />
      <h2 className={styles.description}>
        Tavallinen verkkoasiakas päättää sekunnissa onko hän oikeassa paikassa
        vai ei, tehoton ja huonosti optimoitu kotisivu tekee tämän päätöksen
        heidän puolestaan.
      </h2>
      <div className={styles.kehitysEdut}>
        <KehitysEdut />
      </div>
    </section>
  )
}

export default Kehitys
