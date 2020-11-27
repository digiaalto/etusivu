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
              Yrittäjän elämä on kiireistä, silti sivut pitää löytyä.
            </span>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Verkkosivun hankinta kuuluu tapahtua vaivatta. Hyvä yrityssivu
                löytyy hakukoneesta, kasvattaa tuottoa, toimii responsiivisesti
                sadoilla eri laitteilla ja edustaa yrityksen toimintaa
                positiivisesti.
              </p>
              <p>
                On myös erityisen tärkeää että sisältö puhuttelee oikeaa
                asiakasryhmää, sillä kilpailu verkossa huomiosta on kovaa.
              </p>
            </div>
            <div>
              <p>
                Yrittäjänä on taloudellisesti järkevämpää keskittyä omaan
                ydinosaamineen eikä muiden toimittajien töiden laadunvalvontaan.
              </p>
              <h2 className={styles.highlight}>
                Digiaalto tarjoaa verkkosivun suunittelu ja kehityspalvelua joka
                ei kasvata työtaakkaasi. Sinua ei vaivata turhilla kysymyksillä
                ja työ laatutestataan tulikokeella.
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Problem
