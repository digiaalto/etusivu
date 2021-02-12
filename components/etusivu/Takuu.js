import styles from "./Takuu.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"

const Takuu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="takuu">
      <StepIndicator
        overline="Laatutakuu"
        header="Taattua asiakaspalvelua ja laatua."
        third
      />
      <p className={styles.description}>
        Tarjoamme kaikille verkkosivuillemme tyytyväisyystakuun ja huippuluokan
        tulokset Googlen verkkosivujen laatutestissä,{" "}
        <span className="important">tai emme veloita mitään.</span>
      </p>
      <p className={styles.description}></p>
      <LinkButton href="/hinnat" text="Lähetä tarjouspyyntö" primary />
    </section>
  )
}

export default Takuu
