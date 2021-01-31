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
    header: "Laatutestattu",
    text:
      "Pidämme huolen että verkkosivumme ovat optimoitu ja tehostettu maailman suosituimman verkkosivujen laatutestin mukaisesti. Sivustoja ei julkaista ennen kun jokainen epäonnistumisen indikaattori on hiottu kuntoon.",
    icon: <SiPowerbi className={styles.growing} />,
  },
  {
    header: "Ongelmaton",
    text:
      "Uskomme että verkkosivujen kuuluu toimia itsenäisesti ja pitkäikäisesti julkaisun jälkeenkin. Sivustomme rakentavat ja uudelleenrakentavat itseään regeneroimalla staattiset osansa ja minimoimalla hyökkäyspinnan.",
    icon: <FaCog className={styles.spinning} />,
  },
  {
    header: "Suunniteltu",
    text:
      "Luomme yksilöityjä kotisivuja joilla tuomme yrityksesi persoonan ja vahvuudet esille. Suunnittelussa olemme mahdollisimman asiakaslähtöisiä, sivustomme toimivat käyttäjäystävällisesti ja herättävät luottamusta.",
    icon: <FaPaintBrush className={styles.bouncing} />,
  },
]

const Ominaisuudet = () => {
  return (
    <Fade {...animCfg.ominaisuudet}>
      <div className={styles.ominaisuudet}>
        {ominaisuudet.map((ominaisuus, index) => (
          <Ominaisuus data={ominaisuus} key={`ominaisuus-${index}`} />
        ))}
      </div>
    </Fade>
  )
}

const Ominaisuus = (props) => {
  const { icon, header, text } = props.data
  return (
    <div className={styles.ominaisuus}>
      <div className={styles.iconWrapper}>{icon}</div>
      <span className={styles.header}>{header}</span>
      <p className={styles.textWrap}>{text}</p>
    </div>
  )
}

export default Ominaisuudet
