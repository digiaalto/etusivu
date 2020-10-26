import styles from "../styles/LP_Solution.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Solution = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ratkaisu</span>
            <h1 className={styles.header}>
              Digiaalto kehittää huippuluokan verkkosivuja, todistettavasti.
            </h1>
          </div>
          <p>
            Kehitysvaihe yhdistetään automaattiseen laatumittaukseen, joka
            varmistaa huippuluokan verkkosivutoteutuksen.
          </p>
          <p>
            Tuntemalla hakukoneiden suosimat web-standardit ja parhaat
            käytännöt, Digiaalto rakentaa tehokkaampia verkkosivuja
            teknologialla joka takaa menestymisen hakukoneen algoritmissä.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
