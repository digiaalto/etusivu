import styles from "../styles/Arkkitehtuuri.module.sass"
import { Fade } from "react-awesome-reveal"

import Benefits from "./Benefits"

const Arkkitehtuuri = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <div className={styles.content}>
        <div className={styles.headerWrapper}>
          <Fade delay={200} direction="left">
            <span className={styles.preheader}>
              Kovempi
              <br />
              tekniikka!
            </span>
          </Fade>
          <h1 className={styles.header}>
            Kestävät huippuluokan verkkosivut modernilla arkkitehtuurilla.
          </h1>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textColumn}>
            <p>
              Digiaalto rakentaa muita mitattavasti vapaammalla ja paremmalla
              teknologialla verkkosivuja yrittäjille jotka haluavat puristaa
              kotisivustaan kaiken mahdollisen hyödyn irti.
            </p>
          </div>
          <div className={styles.textColumn}>
            <p>
              Kehitystyön lisäksi tarjontaan kuuluu sinulle vaivaton
              designpalvelu joka sisältää kaikki tarpeelliset nettisivun
              valmistusvaiheet alusta loppuun. Valinnaisesti
              sisällönhallintapalvelu julkaisun jälkeen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Arkkitehtuuri
