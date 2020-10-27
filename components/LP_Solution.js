import styles from "../styles/LP_Solution.module.sass"
import { Fade } from "react-awesome-reveal"

const reactLink = "https://reactjs.org/"

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
            käytäntöjä Digiaalto voi valmistaa supertehokkaan verkkosivun
            ideaaliselle{" "}
            <a href={reactLink} target="_blank" rel="noopener noreferrer">
              React-alustalle,{" "}
            </a>
            mikä on huolella optimoitu ja tarjoaa parhaan potentiaalin
            menestymiselle.
          </p>
          <p>
            Kehitysvaihe yhdistetään automaattiseen laatutestaukseen, tuloksia
            seurataan ja korjaukset toteutetaan hyvissä ajoin ennen julkaisua.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
