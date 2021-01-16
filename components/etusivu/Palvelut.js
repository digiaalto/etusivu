import styles from "./Palvelut.module.sass"
import { Fade } from "react-awesome-reveal"
import Ominaisuudet from "./Ominaisuudet"

const animCfg = {
  header: {
    duration: 1200,
    direction: "left",
    triggerOnce: true,
  },
  text: {
    duration: 1200,
    direction: "right",
    triggerOnce: true,
  },
}

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <div className={styles.topContent}>
        <Fade {...animCfg.header}>
          <div className={styles.headers}>
            <span className={styles.preheader}>Mitä saat?</span>
            <h1 className={styles.header}>
              Kestävät kotisivut yritykselle mittavalla laatutestauksella.
            </h1>
          </div>
        </Fade>
        <Fade {...animCfg.text}>
          <div className={styles.textWrapper}>
            <p>
              Digiaallon suunnittelu- ja kehityspalveluun sisältyy kaikki
              laadukkaan nettisivun valmistusvaiheet alusta loppuun,
              haluamillasi ominaisuuksilla ja integroinneilla.
            </p>
            <p>
              Valitse kilpailijoitasi kehittyneempi kehitysarkkitehtuuri ja
              hyödy rakenteellisesta kilpailuedusta, mikä ei lisää työtaakkaasi,
              vaadi ylläpitotoimia tai sisällä piilokustannuksia.
            </p>
          </div>
        </Fade>
      </div>
      <Ominaisuudet />
    </section>
  )
}

export default Palvelut
