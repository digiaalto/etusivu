import styles from "./Takuu.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"
import { Link as LinkScroll } from "react-scroll"

const Takuu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="takuu">
      <StepIndicator
        overline="Laatutakuu"
        header="100% tyytyväisyystakuu."
        third
      />
      <p className={styles.description}>
        Tarjoamme työllemme tyytyväisyystakuun ja huippuluokan tulokset Googlen
        verkkosivujen laatutestissä,{" "}
        <span className="important">tai emme veloita mitään.</span> Onko
        kysyttävää?{" "}
        <LinkScroll to="laheta-viesti" smooth>
          Lähetä viesti
        </LinkScroll>{" "}
        tai aloita suoraan tarjouspyynnöllä.
      </p>
      <p className={styles.description}></p>
      <LinkButton href="/tarjouspyynto" text="Lähetä tarjouspyyntö" primary />
    </section>
  )
}

export default Takuu
