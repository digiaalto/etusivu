import styles from "./TextBar.module.sass"

const TextBar = () => {
  return (
    <div className={styles.bar}>
      <p className={styles.text}>
        Investoi moderniin teknologiaan ja kasva huoletta. Digiaalto ei rakenna
        vain nettisivuja. Tarjoamme huolellista suunnittelua, kilpailijoita
        kovempaa teknologiaa ja tinkimätöntä palvelua.
      </p>
    </div>
  )
}

export default TextBar
