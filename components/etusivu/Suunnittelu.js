import styles from "./Suunnittelu.module.sass"
import StepIndicator from "../common/StepIndicator"
import Overline from "../common/Overline"

const Suunnittelu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="suunnittelu">
      <Overline
        text="Valmistusprosessi"
        customStyle={{ textAlign: "center" }}
      />
      <StepIndicator
        overline="Suunnittelu"
        header="Kaikki alkaa ideoinnista."
        first
      />
      <div className={styles.descriptions}>
        <p className="headerDescription">
          Ennen varsinaista web-suunnittelua määrittelemme verkkoprojektin
          vaatimukset ja perimmäisen tarkoituksen, sekä yrityksen
          brändiominaisuudet ja tärkeimmät kohderyhmät.
        </p>
      </div>
      <ol className={styles.list}>
        <li>
          <h2 className={styles.listHeader}>1. Käyttäjäkokemus</h2>
          <p>
            Vierailija haluaa esteettömän ja nautinnollisen käyttökokemuksen
            jonka luomme huolellisella UX-designilla.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>2. Sisältösuunnittelu</h2>
          <p>
            Tehokas verkkosivu tarvitsee tehokasta sisältöä joka puhuttelee ja
            ohjailee vierailijaa halutulla tavalla.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>3. Ulkoasu</h2>
          <p>
            Varustamme verkkosivun kauniilla estetiikalla joka erottaa
            yrityksenne kilpailijoista oman brändin mukaisesti.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Suunnittelu
