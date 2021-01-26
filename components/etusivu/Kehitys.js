import styles from "./Kehitys.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"

const Kehitys = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} ref={refs} id="kehitys">
      <StepIndicator
        overline="Kehitys"
        header="Verkkosivusi moottori."
        second
      />
      <div className={styles.content}>
        <p>
          Laadukas nettisivu koostuu harkitun suunnittelun ja sopivan tekniikan
          yhdistelmästä. On tärkeää ymmärtää, että sivusto joka on julkaistu
          verkkoon vanhalla tekniikalla ja jota kiusaa suorituskykyongelmat
          kärsii myös isosta poistumisprosentista ja huonosta
          käyttäjäkokemuksesta.
        </p>
        <p>
          Digiaallon tehtävä on tuoda tehokkaita ja nykyaikaisia
          verkkoratkaisuja yrittäjille jotka haluavat asiakkailleen
          turvallisempaa ja mukavampaa käyttökokemusta, sekä itselleen
          vaivatonta, kustannustehokasta sivustonhallintaa.
        </p>
      </div>
      <LinkButton
        href="/verkkosivut"
        text="Lisätietoja"
        customClass={styles.ctaButton}
      />
    </section>
  )
}

export default Kehitys
