import styles from "./Suunnittelu.module.sass"
import StepIndicator from "../common/StepIndicator"
import Overline from "../common/Overline"

const Suunnittelu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="suunnittelu">
      <Overline text="Meidän prosessi" customStyle={{ textAlign: "center" }} />
      <StepIndicator
        overline="Suunnittelu"
        header="Kaikki alkaa ideoinnista."
        first
      />
      <div className={styles.descriptions}>
        <p className="headerDescription">
          Ennen varsinaista suunnittelua määrittelemme verkkoprojektin
          vaatimukset ja perimmäisen tarkoituksen, sekä yrityksen
          brändiominaisuudet ja tärkein kohderyhmä.
        </p>
      </div>
      <ol className={styles.list}>
        <li>
          <h2 className={styles.listHeader}>1. Käyttäjäkokemus</h2>
          <p>
            Luomme vierailijalle nautinnollisen ja sujuvan käyttökokemuksen joka
            toteuttaa tärkeimpiä verkkotavoitteita.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>2. Sisältösuunnittelu</h2>
          <p>
            Tehokas verkkosivu tarvitsee tehokasta sisältöä joka puhuttelee
            tärkeintä kohderyhmää.
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
