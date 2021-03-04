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
          Tuottaaksemme vaikuttavan designin ja osuvan tekstisisällön, ensiksi
          pitää määritellä projektin vaatimukset ja tarkoitus, sekä yrityksenne
          brändi ja unelma-asiakas.
        </p>
      </div>
      <ol className={styles.list}>
        <li>
          <h2 className={styles.listHeader}>1. Käyttökokemus</h2>
          <p>
            Toteutamme realistisia yritystavoitteita keskittymällä asiakkaan
            kokemukseen ja ylittämällä odotuksia.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>2. Sisältö</h2>
          <p>
            Tehokas verkkosivu tarvitsee tehokasta sisältöä, tekstisuunnittele
            itse tai tilaa Digiaallon sisällöntuotanto.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>3. Ulkoasu</h2>
          <p>
            Suunnittelemme kauniin estetiikan joka erottaa sinut muista omien
            arvojesi ja tyylisi mukaisesti.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Suunnittelu
