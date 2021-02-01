import styles from "./Ominaisuudet.module.sass"
import React from "react"

const ominaisuudet = [
  {
    header: "Laatutestattu",
    text:
      "Kutsumuksemme on valmistaa tarkasti optimoituja, tehokkaita verkkosivuja, jotka erottuvat omaan luokkaansa maailman suosituimman verkkosivujen laatutestin sadoissa eri testeissä.",
  },
  {
    header: "Ongelmaton",
    text:
      "Uskomme että verkkosivujen kuuluu toimia itsenäisesti ja pitkäikäisesti julkaisun jälkeenkin. Sivustomme rakentavat ja uudelleenrakentavat itseään regeneroimalla staattiset osansa ja minimoimalla hyökkäyspinnan.",
  },
  {
    header: "Suunniteltu",
    text:
      "Luomme yksilöityjä kotisivuja joilla tuomme yrityksen uniikin persoonan ja vahvuudet esille. Suunnittelussa olemme mahdollisimman asiakaslähtöisiä, sivustomme tehdään käyttäjäystävällisiksi ja luottamusta herättäviksi.",
  },
]

const Ominaisuudet = () => {
  return (
    <div className={styles.ominaisuudet}>
      {ominaisuudet.map((ominaisuus, index) => (
        <Ominaisuus data={ominaisuus} key={`ominaisuus-${index}`} />
      ))}
    </div>
  )
}

const Ominaisuus = (props) => {
  const { header, text } = props.data
  return (
    <div className={styles.ominaisuus}>
      <span className={styles.header}>{header}</span>
      <p className={styles.textWrap}>{text}</p>
    </div>
  )
}

export default Ominaisuudet
