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
          {/* Projekti lähtee käyntiin tutustumisella. Määrittelemme yrityksenne tai
          järjestönne brändin, verkkosivun kohderyhmän, vaatimukset, ja
          tavoitteet. */}
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
            asiakaspalvelijan joka pitää asiakkaasi tarpeet ensimmäisenä ja
            odotukset toisena.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>2. Sisältö</h2>
          <p>
            Tehokas verkkosivu tarvitsee tehokasta sisältöä. Voit tuottaa
            tekstit itse, tai Digiaalto luo sisällön haastattelutietojen
            perusteella sekä analysoimalla toimialaasi.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>3. Ulkoasu</h2>
          <p>
            Suunnittelemme kauniin estetiikan jonka perimmäinen tarkoitus on
            tehdä potentiaaliseen asiakkaaseen positiivinen vaikutus, sekä
            erottaa sinut muista omien arvojesi ja tyylisi mukaisesti.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Suunnittelu
