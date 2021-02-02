import styles from "./Ominaisuudet.module.sass"
import React from "react"

const ominaisuudet = [
  {
    header: "Optimoitu",
    text:
      "Kutsumuksemme on rakentaa tuloksia tuottavia yrityssivuja. Työtämme siivittää älykäs kehitysarkkitehtuuri, mistä yrityksesi saa mitattavia hyötyjä ja etulyöntiaseman verkossa.",
  },
  {
    header: "Ongelmaton",
    text:
      "Uskomme että verkkosivujen kuuluu toimia itsenäisesti ja pitkäikäisesti julkaisun jälkeenkin. Sivustomme eivät vaadi ympärivuotista huoltotyötä tai jatkuvaa päivittelyä.",
  },
  {
    header: "Mukautettu",
    text:
      "Suunnittelemme personoituja markkinointikanavia, joilla korostamme yrityksenne vahvuuksia ja hyötyjä. Samalla noudatamme parhaita käytäntöjä ja saavutettavuusstandardeja.",
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
