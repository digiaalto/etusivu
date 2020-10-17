import styles from "../styles/price.module.sass"

const Price = () => {
  return (
    <section id="hinnoittelu" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.header}>
          Superoptimoitu verkkosivu alkaen 3200€
        </h2>
        <p className={styles.note}>Digiaalto laskuttaa 50% työn alkaessa.</p>
      </div>
    </section>
  )
}

export default Price
