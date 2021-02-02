import styles from "./Kehitys.module.sass"
import { LinkButton } from "../common/button"
import StepIndicator from "../common/StepIndicator"
import LogosWeUse from "../common/LogosWeUse"

const Kehitys = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator overline="Kehitys" header="Tehokkaampi moottori." second />
      <div className={styles.logosWeUse}>
        <LogosWeUse />
      </div>
      <p className={styles.description}>
        Verkkosivumme syntyvät harkitun suunnittelun ja käsinvalittujen
        teknologien ja mikropalveluiden yhdistelmästä. Käytämme tekniikoita jota
        suosii digijätit ja muut ajan hermolla surffaavat yritykset.
      </p>
      <LinkButton href="/verkkosivut" text="Lisää Verkkosivuista" />
    </section>
  )
}

export default Kehitys
