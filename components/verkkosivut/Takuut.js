import styles from "./Takuut.module.sass"
import { GoCheck } from "react-icons/go"
import { Fade } from "react-awesome-reveal"
import { cascadeFade } from "../../vars"

const sisalto = [
  "Rakennettu tukemaan tavoitteitasi.",
  "Laatutestattu ja kestävä.",
  "Teknisesti ylivoimainen.",
  "Täysi responsiivisuus.",
  "Moderni ja helppokäyttöinen.",
  "Parhaat suositukset.",
]

const Takuut = () => {
  return (
    <div className={styles.takuut}>
      <Fade {...cascadeFade}>
        {sisalto.map((header) => (
          <Takuu header={header} key={`takuu-${header}`} />
        ))}
      </Fade>
    </div>
  )
}

const Takuu = ({ header }) => {
  return (
    <div className={styles.takuu}>
      <div className={styles.iconWrapper}>
        <GoCheck />
      </div>
      <label className={styles.header}>{header}</label>
    </div>
  )
}

export default Takuut