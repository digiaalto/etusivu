import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import LogosWeUse from "../common/LogosWeUse"
import KehitysEdut from "./KehitysEdut"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator overline="Kehitys" header="Verkkosivun moottori." second />
      <h2 className={styles.description}>
        Tavallinen verkkoasiakas päättää sekunneissa haluaako hän selata sivua
        vai ei. Huonosti optimoitu sivusto tekee tämän päätöksen heidän
        puolestaan. Mahdollistamme asiakkaallesi parhaan käyttökokemuksen
        tekniikalla joka ylittää hänen odotukset.
      </h2>
      <div className={styles.logosWeUse}>
        <LogosWeUse />
      </div>
      <div className={styles.kehitysEdut}>
        <KehitysEdut />
      </div>
    </section>
  )
}

export default Kehitys
