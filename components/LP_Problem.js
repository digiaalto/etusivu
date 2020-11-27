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
              Yrittäjän elämä on todella kiireistä.
            </span>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Yrityssivun hankinta pitää sujua vaivatta ja sen pitää löytyä
                hakukoneesta, kasvattaa tuottoa, toimia responsiivisesti
                sadoilla eri laitteilla ja edustaa yrityksen toimintaa
                positiivisesti.
              </p>
              <p>
                On erityisen tärkeää että sisältö puhuttelee oikeaa
                asiakasryhmää, sillä kilpailu verkossa on senkuin kovenee.
              </p>
            </div>
            <div>
              <p>
                On taloudellisesti järkevämpää keskittyä omaan ydinosaamineen
                eikä muiden toimittajien töiden laadunvalvontaan.
              </p>
              <h2 className={styles.highlight}>
                Digiaalto tarjoaa verkkosivun suunittelu ja kehityspalvelua joka
                ei kasvata työtaakkaasi. Sinua ei vaivata turhilla kysymyksillä
                ja työn jälki on ankarasti laatutestattu.
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Problem
