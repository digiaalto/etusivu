import styles from "../styles/Ominaisuudet.module.sass"
import React from "react"
import { Fade } from "react-awesome-reveal"
import { SiPowerbi } from "react-icons/si"
import { FaCog } from "react-icons/fa"
import { FaPaintBrush } from "react-icons/fa"

const animCfg = {
  ominaisuudet: {
    duration: 800,
    damping: 0.2,
    direction: "up",
    cascade: true,
    triggerOnce: true,
  },
}

const ominaisuudet = [
  {
    header: "Laatutestaus ja raportti",
    text:
      "Sivun toteutuksen varmistaa Google Lighthousen verkkosivun laatutestaus. Digiaalto lupaa kilpailijoita paremman pisteytyksen.",
    icon: <SiPowerbi className={styles.growing} />,
  },
  {
    header: "Kestävä ja pitkäikäinen",
    text:
      "Julkaisun jälkeen kaikki toimii ikiliikkujan tavoin. Ei monoliitistä johtuvia tietoturva-aukkoja, päivityksiä tai muita ylläpitotoimia.",
    icon: <FaCog className={styles.spinning} />,
  },
  {
    header: "Mukautettu",
    text:
      "Räätälöity oman brändin mukaisesti. Teidän rahoja ei käytetä kopioidun valmisteeman hankintaan kulissien takana.",
    icon: <FaPaintBrush className={styles.bouncing} />,
  },
]

const Ominaisuudet = () => {
  return (
    <section>
      <div className={styles.ominaisuudet}>
        <Fade {...animCfg.ominaisuudet} className={styles.fadeWrapper}>
          {ominaisuudet.map((ominaisuus, index) => (
            <Ominaisuus data={ominaisuus} key={`ominaisuus-${index}`} />
          ))}
        </Fade>
      </div>
    </section>
  )
}

const Ominaisuus = (props) => {
  const { icon, header, text } = props.data
  return (
    <div className={styles.ominaisuus}>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.header}>{header}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Ominaisuudet
