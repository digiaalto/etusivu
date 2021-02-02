import styles from "./Julkaisu.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"

const Julkaisu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="julkaisu">
      <StepIndicator overline="Julkaisu" header="Hetki on koittanut." third />
      <p className={styles.description}>
        Lähetämme sivustosi globaaliin sisällönjulkaisuverkkoon joka skaalautuu
        kävijöiden mukaisesti. Saat sähköpostiohjeet sivuston käytöstä, sekä
        muista käyttöönotetuista mikropalveluista, ja asiakaspalvelulinjamme
        pysyvät teille aina auki.
      </p>
      <LinkButton
        href="/tarjouspyynto"
        text="Hinta-arvio"
        customClass={styles.ccButton}
      />
    </section>
  )
}

export default Julkaisu
