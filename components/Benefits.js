import styles from "../styles/Benefits.module.sass"

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <span className={styles.benefitHeader}>Syitä valita Digiaalto.</span>
      <ul className={styles.benefitsList}>
        <Benefit
          benefitHeader="Hyödyt rakenteellisesta kilpailuedusta."
          benefitText="Oikeasti uudenaikaiset kotisivut, kehitetty kilpailijasi Wordpressiä kehittyneemmällä React-teknologialla."
        />
        <Benefit
          benefitHeader="Täydellinen valinnanvapaus."
          benefitText="React on digijättien suosima alusta webissä, sillä sen toimintaa voi muuttaa perusteellisesti tarpeiden mukaan."
        />
        <Benefit
          benefitHeader="Mitattava Laatuero muihin."
          benefitText="Digiaalto pystyy todistamaan kehittävänsä huippulaadukkaita kotisivuja Googlen Lighthousen laatutestauksen raporteilla."
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
