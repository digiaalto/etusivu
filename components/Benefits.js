import styles from "../styles/Benefits.module.sass"
import { Fade } from "react-awesome-reveal"

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <Fade delay={50} damping={0.2} cascade triggerOnce>
        <span className={styles.benefitHeader}>Syitä valita Digiaalto.</span>
        <ul className={styles.benefitsList}>
          <Benefit
            benefitHeader="Rakenteellinen kilpailuetu."
            benefitText="Oikeasti uudenaikaiset kotisivut, kilpailijasi WordPressiä suorituskykyisempi ja käyttäjäystävällisempi."
          />
          <Benefit
            benefitHeader="Kestävä ja turvallinen."
            benefitText="Digiaallon koodaama yrityssivu on ikiliikkuja joka ei kärsi turvallisuusriskeistä tai tarvitse ylläpitotoimia tai päivittelyä."
          />
          <Benefit
            benefitHeader="Täydellinen valinnanvapaus."
            benefitText="Reactiin voi integroida minkä tahansa halutun palvelun tai ominaisuuden."
          />
          <Benefit
            benefitHeader="Mitattava laatuero muihin."
            benefitText="Digiaalto tähtää kehittäjänä teknilliseen täydellisyyteen ja todistaa tulokset Google Lighthouse verkkosivun laatutestillä."
          />
        </ul>
      </Fade>
    </div>
  )
}

const Benefit = ({ benefitHeader, benefitText }) => {
  return (
    <li className={styles.benefitItem}>
      <span className={styles.benefitSubheader}>{benefitHeader}</span>
      <p className={styles.benefitText}>{benefitText}</p>
    </li>
  )
}

export default Benefits
