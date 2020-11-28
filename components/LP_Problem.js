import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="verkkosivujen-haasteita">
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ongelma</span>
            <span className={styles.header}>
              Yrittäjän elämä on kiireistä, mutta yrityssivut pitää olla.
            </span>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Hyvin toteutettu verkkosivu on tärkeämpi nyt kuin koskaan.
                Laadukkaat yrityssivut kasvattaa tuottoa ja edistää yrityksensä
                toimintaa tarkoituksenmukaisesti.
              </p>
              <p>
                Tarvitaan verkkokehittäjä joka tietää mitä tekee, jotta sinä
                yrittäjänä voit keskittyä oman yrityksesi ydinosaamisen
                harjottamiseen.
              </p>
            </div>
            <div>
              <p>
                Verkkokehittäjiä on monia, mutta valitettavasti valtaosa meistä
                käyttää vanhentunutta tekniikkaa, joka kärsii turhista
                limitaatioista. Lopputulos on mitä on ja kukaan ei ole
                viisaampi.
              </p>
              <h2 className={styles.highlight}>
                Jokaisen verkkokehittäjän työ olisi hyvä testata Googlen omalla
                laatutestillä jonka tulokset näkee itse.
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Problem
