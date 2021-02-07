import styles from "./Takuu.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"

const Takuu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="takuu">
      <StepIndicator
        overline="Takuu"
        header="Tyytyväisyystakuu ja käyttöönotto."
        third
      />
      <p className={styles.description}>
        Kuuntelemme palautettanne ja iteroimme verkkosivun designia kunnes
        olette tyytyväisiä. Jos tilasitte meiltä sisällöntuoton voitte editoida
        tekstiä ennen julkaisua.
      </p>
      <p className={styles.description}>
        Perehdytämme sivuston käyttöön ja mielellämme jatkamme yhteistyötä
        julkaisun jälkeisten mikropalveluiden merkeissä.
      </p>
      <LinkButton
        href="/tarjouspyynto"
        text="Hinta & Tarjouspyyntö"
        customClass={styles.ccButton}
      />
    </section>
  )
}

export default Takuu
