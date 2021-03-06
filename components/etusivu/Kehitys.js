import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import KehitysEdut from "./KehitysEdut"

const Kehitys = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator overline="Kehitys" header="Tehostettu moottori." second />
      <h2 className={styles.description}>
        Tavallinen verkkokäyttäjä päättää sekunnissa poistuuko vai jatkaako hän
        verkkosivun selailua, tehottomalla tekniikalla rakennettu verkkosivu
        tekee tämän päätöksen heidän puolestaan.
      </h2>
      <div className={styles.kehitysEdut}>
        <KehitysEdut />
      </div>
    </section>
  )
}

export default Kehitys
