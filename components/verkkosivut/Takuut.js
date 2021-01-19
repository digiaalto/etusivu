import styles from "./Takuut.module.sass"
import { GoCheck } from "react-icons/go"

const sisalto = [
  "Rakennettu tukemaan tavoitteitasi.",
  "Moderni ja käyttäjäystävällinen.",
  "Parhaat suositukset.",
  "Teknisesti ylivoimainen.",
  "Responsiivinen eri laitteilla.",
  "Laatutestattu ja kestävä.",
]

const Takuut = () => {
  return (
    <div className={styles.container}>
      {sisalto.map((header) => (
        <Takuu header={header} key={`takuu-${header}`} />
      ))}
    </div>
  )
}

const Takuu = ({ header }) => {
  return (
    <div className={styles.takuu}>
      <div className={styles.iconWrapper}>
        <GoCheck />
      </div>
      <h6 className={styles.header}>{header}</h6>
    </div>
  )
}

export default Takuut
