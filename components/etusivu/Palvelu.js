import styles from "./Palvelu.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"

const Palvelu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="palvelu">
      <StepIndicator
        overline="Palvelu"
        header="Julkaisu ja lisäpalvelut."
        third
      />
      <p className={styles.description}>
        Lähetämme sähköpostiisi ohjeet verkkosivun käyttöön ja muihin
        palveluihin. Julkaisemme sivuston sisällönjulkaisuverkkoon.
      </p>
      <LinkButton
        href="/tarjouspyynto"
        text="Hinta & Tarjouspyyntö"
        customClass={styles.ccButton}
      />
    </section>
  )
}

export default Palvelu
