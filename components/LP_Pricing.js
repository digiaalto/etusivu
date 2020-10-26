import styles from "../styles/LP_Pricing.module.sass"

const LP_Pricing = () => {
  return (
    <section id="hinnoittelu" className={styles.section}>
      <div className={styles.content}>
        <h3 className={styles.header}>Tehotsivut kiinteään hintaan 3,200€</h3>
        <span className={styles.note}>
          Digiaalto laskuttaa 50% työn alkaessa.
        </span>
      </div>
    </section>
  )
}

export default LP_Pricing
