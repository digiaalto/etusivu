import styles from "./Suunnittelu.module.sass"
import StepIndicator from "../common/StepIndicator"
import Overline from "../common/Overline"

const Suunnittelu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="suunnittelu">
      <Overline text="Prosessi" customStyle={{ textAlign: "center" }} />
      <StepIndicator
        overline="Suunnittelu"
        header="Kaikki alkaa ideoinnista."
        first
      />
      <div className={styles.descriptions}>
        <p className="headerDescription">
          Tuottaaksemme vaikuttavan designin ja puhuttelevaa sisältöä, ensiksi
          määritellään projektin vaatimukset ja tarkoitus, sekä yrityksenne
          brändi ja tärkein kohderyhmä.
        </p>
      </div>
      <ol className={styles.list}>
        <li>
          <h2 className={styles.listHeader}>1. Käyttökokemus</h2>
          <p>
            Suunnittelemme sivustostasi helposti saavutettavan, väsymättömmän
            asiakaspalvelijan joka pitää asiakkaasi odotukset ensimmäisenä.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>2. Sisältö</h2>
          <p>
            Tehokas verkkosivu tarvitsee tehokasta sisältöä. Voit tuottaa
            tekstit itse, tai tilata sisällöntuotannon sivujen kanssa.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>3. Ulkoasu</h2>
          <p>
            Suunnittelemme kauniin estetiikan ja erotamme sinut muista omien
            arvojesi ja tyylisi mukaisesti.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Suunnittelu
