import styles from "./Kehitys.module.sass"
import { LinkButton } from "../common/button"
import StepIndicator from "../common/StepIndicator"
import LogosWeUse from "../common/LogosWeUse"

const Kehitys = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator
        overline="Kehitys"
        header="Verkkosivusi moottori."
        second
      />
      <div className={styles.logosWeUse}>
        <LogosWeUse />
      </div>
      <p className={styles.description}>
        Verkkosivumme syntyvät harkitun suunnittelun ja käsinvalittujen
        teknologien ja mikropalveluiden yhdistelmästä. Käytämme oikeasti
        huippuluokan teknologia-stäkkiä jota suosii digijätit, mutta myös ajan
        hermolla surffaavat pienyritykset.
      </p>
      <LinkButton href="/verkkosivut" text="Lisää Verkkosivuista" />
    </section>
  )
}

export default Kehitys
