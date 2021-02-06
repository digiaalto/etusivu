import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import LogosWeUse from "../common/LogosWeUse"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator
        overline="Kehitys"
        header="Pitkäikäinen moottori."
        second
      />

      <p className={styles.description}>
        Verkkosivumme syntyvät harkitun suunnittelun ja käsinvalittujen
        teknologien yhdistelmästä. Käytämme koodia jota suosii digijättien
        lisäksi ajan hermmolla surffaavat yritykset.
      </p>
      <div className={styles.logosWeUse}>
        <LogosWeUse />
      </div>
    </section>
  )
}

export default Kehitys
