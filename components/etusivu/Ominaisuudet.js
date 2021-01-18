import styles from "./Ominaisuudet.module.sass"
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
    header: "Laatutestaus ja tulokset",
    text:
      "Moderni kehitys takaa kilpailijoitasi paremmat tulokset Googlen laatutestissä. Käteen jää helposti ymmärettävät tulokset ja etulyöntiasema verkossa.",
    icon: <SiPowerbi className={styles.growing} />,
  },
  {
    header: "Kestävä ja pitkäikäinen",
    text:
      "Digiaallon valmistamat sivustot ei kärsi tietoturvaongelmista tai vaadi jatkuvia ylläpitotoimia tai päivittelyitä joista pitää pulittaa extraa.",
    icon: <FaCog className={styles.spinning} />,
  },
  {
    header: "Mukautettu",
    text:
      "Erottaudu markkinoilla brändisi mukaisesti räätälöidyllä ulkoasulla joka tuo vahvuutesi esille, sekä näppärällä UX-designilla jolla realisoidaan tavoitteesi.",
    icon: <FaPaintBrush className={styles.bouncing} />,
  },
]

const Ominaisuudet = () => {
  return (
    <div className={styles.ominaisuudet}>
      <Fade {...animCfg.ominaisuudet} className={styles.fadeWrapper}>
        {ominaisuudet.map((ominaisuus, index) => (
          <Ominaisuus data={ominaisuus} key={`ominaisuus-${index}`} />
        ))}
      </Fade>
    </div>
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
