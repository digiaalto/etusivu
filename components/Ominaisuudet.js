import styles from "../styles/Ominaisuudet.module.sass"
import { Fade } from "react-awesome-reveal"
import { SiPowerbi } from "react-icons/si"
import { FaCog } from "react-icons/fa"
import { FaPaintBrush } from "react-icons/fa"

const ominaisuudet = [
  {
    header: "Laatutestaus ja tulokset",
    text:
      "Verkkosivun toteutuksen varmistaa Google Lighthousen ankara laatutestaus. Hyödy rakenteellisesta kilpailuedusta jo lähtöruudussa.",
    icon: <SiPowerbi />,
  },
  {
    header: "Kestävä ja pitkäikäinen",
    text:
      "Julkaisun jälkeen kaikki toimii ikiliikkujan tavoin. Ei monoliitistä johtuvia tietoturva-aukkoja, päivityksiä tai muita yllättäviä ylläpitotoimia.",
    icon: <FaCog />,
  },
  {
    header: "Mukautettu",
    text:
      "Räätälöity verkkosivu, oman brändin mukainen. Ei valmisteemoja, kuluneita designperiaatteita tai ulkoistettuja päätöksiä.",
    icon: <FaPaintBrush />,
  },
]

const Ominaisuudet = (props) => {
  const { refs } = props
  return (
    <section className={styles.ominaisuudet} ref={refs}>
      <Fade delay={200} direction="up">
        {ominaisuudet.map((ominaisuus, index) => (
          <Ominaisuus
            header={ominaisuus.header}
            text={ominaisuus.text}
            icon={ominaisuus.icon}
            key={`ominaisuus-${index}`}
          />
        ))}
      </Fade>
    </section>
  )
}

const Ominaisuus = (props) => {
  const { icon, header, text } = props

  return (
    <div className={styles.ominaisuus}>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.header}>{header}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Ominaisuudet
