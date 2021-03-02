import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import KehitysEdut from "./KehitysEdut"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator
        overline="Kehitys"
        header="Verkkosivun rakettimoottori."
        second
      />
      <h2 className={styles.description}>
        Tavallinen käyttäjä päättää sekunneissa pysyykö hän yrityksen sivulla
        vai hyppääkö hän kilpailijan syliin; tehoton sivusto tekee tämän
        päätöksen heidän puolestaan. Mahdollistamme asiakkaallesi parhaan
        käyttökokemuksen tehokkaalla teknologialla joka kestää tulevaisuuden
        haasteet.
      </h2>
      <div className={styles.kehitysEdut}>
        <KehitysEdut />
      </div>
    </section>
  )
}

export default Kehitys
