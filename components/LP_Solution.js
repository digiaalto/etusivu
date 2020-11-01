import styles from "../styles/LP_Solution.module.sass"
import { Fade } from "react-awesome-reveal"

const reactLink = "https://nextjs.org/"

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
            Noudattamalla hakukoneiden laatuvaatimuksia ja parhaita käytäntöjä{" "}
            <span className="bold">
              Digiaalto valmistaa supertehokkaan verkkosivun yrittäjälle jolla
              on kalenteri täynnä.
            </span>
          </p>
          <p>
            Kehitysvaihe yhdistetään automaattiseen laatutestaukseen ja korkeat
            tulokset mahdollistavat parhaan potentiaalisen menestymisen
            verkossa.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
