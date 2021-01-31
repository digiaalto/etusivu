import styles from "./Julkaisu.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"

const Julkaisu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="julkaisu">
      <StepIndicator overline="Julkaisu" header="D-day." third />
      <p className={styles.description}>
        Optimoimme ja lähetämme kaikki sivustomme globaaliin
        sisällönjulkaisuverkkoon joka skaalautuu kävijöiden mukaisesti. Saat
        sähköpostiohjeet sivuston käytöstä, sekä muista käyttöönotetuista
        mikropalveluista. Pidämme myös asiakaspalvelulinjat ikuisesti auki.
      </p>
      <p className={styles.description}>
        Sivustomme ovat rakennettu pyörimään pitkäikäisesti ilman häiriöitä,
        jotta asiakkaamme voivat keskittyä yrityksensä toimintaan
        sataprosenttisesti.
      </p>
      <LinkButton
        href="/tarjouspyynto"
        text="Lähetä Tarjouspyyntö"
        customClass={styles.ccButton}
      />
    </section>
  )
}

export default Julkaisu
