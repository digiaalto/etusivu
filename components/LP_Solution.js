import styles from "../styles/LP_Solution.module.sass"
import { Fade } from "react-awesome-reveal"

import Benefits from "./Benefits"

const LP_Solution = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <Fade fraction={0.1} delay={400} triggerOnce>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <Fade delay={400} direction="left">
              <span className={styles.preheader}>Ratkaisu</span>
            </Fade>
            <h1 className={styles.header}>
              Itsenäinen kotisivujen suunnittelija.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textColumn}>
              <p>
                Digiaalto on erikoistunut omatoimiseen verkkosuunnitteluun ja
                verkkokehitykseen, joka tarkoittaa ettei sinulta tulla vaatimaan
                haluamaasi suurempaa roolia kotisivujesi luonnissa.
              </p>
              <p>
                Valinnaisen lisäpalvelun kautta puolestasi hoidetaan myös muut
                valmiin kotisivun lisätyöt, kuten sisällönmuutokset ja
                päivitykset.
              </p>
            </div>
            <div className={styles.textColumn}>
              <Benefits />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default LP_Solution
