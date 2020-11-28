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
              Yrittäjän elämä on kiireistä, silti laadukkaat sivut pitää löytyä.
            </span>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Hyvin toteutettu verkkosivu löytyy hakukoneesta, kasvattaa
                tuottoa, toimii sadoilla eri laitteilla ja edustaa yrityksen
                toimintaa tarkoituksenmukaisesti tarkasti suunnitellulla
                sisällöllä.
              </p>
              <p>
                Verkkosivujen haasteet ja laadunvalvonta vie yrittäjän arvokasta
                aikaa hänen oman ydinosaamisen harjoittamisesta. Useasti on
                taloudellisesti viisampaa keskittyä omaan toimialaan ja etsiä
                luotettava verkkokehittäjä.
              </p>
            </div>
            <div>
              <p>
                Valitettavasti monet verkkotekijät käyttävät vanhentuneita
                alustoja, kopioituja valmisteemoja ja ulkoistettua koodia
                laadukkaan nykyaikaisen verkkosivun korvikkeena.
              </p>
              <p>
                Tämä näkyy sivun poistumisprosentissa ja analyyttisten
                laatutestien tuloksissa, mitkä vaikuttavat negatiivisesti
                hakukoneiden algoritmeihin ja konversioon.
              </p>
              <h2 className={styles.highlight}>
                Jokaisen verkkokehittäjän työ olisi hyvä testata Googlen omalla
                laatutestillä josta tulokset näkee itse.
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Problem
