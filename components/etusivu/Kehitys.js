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
          Laadukas verkkosivu koostuu harkitun suunnittelun ja oikean
          teknologian yhdistelmästä. Verkkosivu joka on julkaistu vanhalla
          teknologialla on tekniikkansa kahleissa, mikä aiheuttaa rajoittavia
          pullonkauloja sivuston tavoitteiden toteutumiseen.
        </p>
        <p>
          Rakennamme tehokkaita ja nykyaikaisia verkkosivuja, verkkokauppoja,
          blogeja ja kustomoituja web-appeja ajan hermolla surffaaville
          yrityksille. React-kirjaston ja Next.js kehyksen kanssa mikään ei ole
          mahdotonta.
        </p>
      </div>
      <LinkButton
        href="/verkkosivut"
        text="Lisätietoa"
        customClass={styles.ctaButton}
      />
    </section>
  )
}

export default Kehitys
