import styles from "./Takuut.module.sass"
import { GoCheck } from "react-icons/go"

const sisalto = [
  "Laatutestattu.",
  "Responsiivinen.",
  "Moderni.",
  "Turvallinen.",
  "Skaalautuva.",
  "Kestävä.",
]

const Takuut = () => {
  return (
    <div className={styles.takuut}>
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
      <label className={styles.header}>{header}</label>
    </div>
  )
}

export default Takuut
