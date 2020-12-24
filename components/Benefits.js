import styles from "../styles/Benefits.module.sass"

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <span className={styles.benefitHeader}>Syitä valita Digiaalto.</span>
      <ul className={styles.benefitsList}>
        <Benefit
          benefitHeader="Rakenteellinen kilpailuetu."
          benefitText="Oikeasti uudenaikaiset kotisivut, kilpailijasi WordPressiä suorituskykyisempi ja turvallisempi."
        />
        <Benefit
          benefitHeader="Skaalautuva ja kestävä."
          benefitText="Digiaallon hyödyntämää arkkitehtuuria ei suosi pelkästään isot teknologiajätit, mutta myös ja ajan hermolla surffaavat pienyritykset."
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
