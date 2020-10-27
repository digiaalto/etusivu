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
            Noudattamalla hakukoneiden suosimia web-standardeja ja parhaita
            käytäntöjä Digiaalto voi valmistaa supertehokkaan verkkosivun mikä
            on optimoitu kilpailijaasi paremmin.
          </p>
          <p>
            Kehitysvaihe yhdistetään automaattiseen laatumittaukseen, minkä
            tuloksia seurataan ja noudatetaan tarkasti.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
