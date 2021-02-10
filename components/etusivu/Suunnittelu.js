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
        header="Ilman ideaa ei ole mitään."
        first
      />
      <div className={styles.descriptions}>
        <p className="headerDescription">
          Onko sinulla oma visio ja tunnet brändisi hyvin? Löytyykö valmiita
          resursseja vai aloitammeko tyhjältä pöydältä? Oli miten oli, voimme
          auttaa. Suunnittelu alkaa tutustumisella.
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
            Tehokas verkkosivu tarvitsee tehokasta sisältöä. Voit kirjoittaa
            tekstit itse, tai voimme haastattelussa kerättyjen tietojen ja
            toimialaasi tutkimalla kehittää osuvaa sisältöä.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>3. Ulkoasu</h2>
          <p>
            Suunnittelemme kauniin estetiikan jonka perimmäinen tarkoitus on
            tehdä käyttäjään positiivinen vaikutus, sekä erottaa sivusi muista,
            omien arvojesi ja tyylisi mukaisesti.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Suunnittelu
