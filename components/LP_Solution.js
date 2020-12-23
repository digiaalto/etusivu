import styles from "../styles/LP_Solution.module.sass"
import { Fade } from "react-awesome-reveal"

import Benefits from "./Benefits"

const LP_Solution = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <Fade delay={300} triggerOnce>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ratkaisu</span>
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
                Valinnaisen ylläpitopalvelun kautta puolestasi hoidetaan myös
                muut valmiin kotisivun lisätyöt, kuten sisällönmuutokset,
                päivitykset ja ylläpitotoimet.
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
