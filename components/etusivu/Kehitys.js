import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import KehitysEdut from "./KehitysEdut"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator
        overline="Kehitys"
        header="Kilpailua parempaa ohjelmointia."
        second
      />
      <h2 className={styles.description}>
        Pidämme nettisivut suorituskykyisinä ja turvallisina nykyaikaisilla
        React ja Next.js ohjelmistokehyksillä. Lue lisää alla olevista
        painikkeista.
      </h2>
      <div className={styles.kehitysEdut}>
        <KehitysEdut />
      </div>
    </section>
  )
}

export default Kehitys
