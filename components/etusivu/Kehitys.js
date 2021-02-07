import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import LogosWeUse from "../common/LogosWeUse"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator overline="Kehitys" header="Epäreilu tehokkuus." second />
      <p className={styles.description}>
        Nopea palvelu on hyvää palvelua; tavallinen verkkoasiakas päättää
        sekunneissa haluaako hän selata sivua vai ei. Huonosti optimoitu sivusto
        tekee tämän päätöksen heidän puolestaan. Mahdollistamme asiakkaallesi
        parhaan käyttökokemuksen tekniikalla joka ylittää hänen odotukset.
        Emmekä laskuta teitä markkinointitoimiston tavoin ylläpitopalvelulla,
        jonka tarkoitus on hengittää elämää 20 vuotta vanhaan järjestelmään.
      </p>
      <div className={styles.logosWeUse}>
        <LogosWeUse />
      </div>
    </section>
  )
}

export default Kehitys
