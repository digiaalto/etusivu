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
                Laadukas yrityssivu kasvattaa tuottoa ja edistää yrityksen
                toimintaa tarkoituksenmukaisesti.
              </p>
              <p>
                Tarvitaan verkkokehittäjä joka tietää mitä hän tekee.
                Valitettavan useasti käytetään ikääntynyttä tekniikkaa, huonosti
                optimoituja valmisteemoja ja ulkoistettua koodia.
              </p>
            </div>
            <div>
              <p className="bold">
                Jokaisen verkkokehittäjän työ olisi hyvä tarkistaa Googlen
                kehittämällä laatutestillä jonka tulokset voi ymmärtää itse.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Problem
