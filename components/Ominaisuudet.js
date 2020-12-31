import styles from "../styles/Ominaisuudet.module.sass"
import { Fade } from "react-awesome-reveal"
import { SiPowerbi } from "react-icons/si"
import { FaCog } from "react-icons/fa"
import { FaPaintBrush } from "react-icons/fa"

const ominaisuudet = [
  {
    header: "Laatutestaus ja raportti",
    text:
      "Verkkosivun toteutuksen varmistaa Google Lighthousen ankara laatutestaus. Hyödy rakenteellisesta kilpailuedusta jo lähtöruudussa.",
    icon: <SiPowerbi className={styles.growing} />,
  },
  {
    header: "Kestävä ja pitkäikäinen",
    text:
      "Julkaisun jälkeen kaikki toimii ikiliikkujan tavoin. Ei monoliitistä johtuvia tietoturva-aukkoja, päivityksiä tai muita yllättäviä ylläpitotoimia.",
    icon: <FaCog className={styles.spinning} />,
  },
  {
    header: "Mukautettu",
    text:
      "Räätälöity oman brändin mukainen sivusto. Ei valmisteemoja, kuluneita designperiaatteita tai ulkoistettuja päätöksiä.",
    icon: <FaPaintBrush className={styles.bouncing} />,
  },
]

const Ominaisuudet = () => {
  return (
    <Fade delay={200} direction="up" triggerOnce>
      <section className={styles.ominaisuudet}>
        {ominaisuudet.map((ominaisuus, index) => (
          <Ominaisuus data={ominaisuus} key={`ominaisuus-${index}`} />
        ))}
      </section>
    </Fade>
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
