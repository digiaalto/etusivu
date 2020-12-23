import styles from "../styles/Benefits.module.sass"

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <span className={styles.benefitHeader}>Miksi valita Digiaalto.</span>
      <ul className={styles.benefitsList}>
        <Benefit
          benefitHeader="Rakenteellinen kilpailuetu."
          benefitText="Oikeasti uudenaikaiset kotisivut, kehitetty kilpailijasi Wordpressiä kehittyneemmällä teknologialla."
        />
        <Benefit
          benefitHeader="Laaturaportti."
          benefitText="Digiaalto todistaa kehittävänsä huippulaadukkaita kotisivuja esittämällä Googlen laatutestauksen tulokset."
        />
      </ul>
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
