import styles from "../styles/price.module.sass"

const Price = () => {
  return (
    <section id="hinnoittelu" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.header}>
          Superoptimoitu verkkosivu alkaen 3200€
        </h2>
        <h3 className={styles.subheader}>
          Hyvin toteutettu verkkosivu on fiksu investointi joka näkyy yrityksesi
          tuottavuudessa.
        </h3>
        <p className={styles.note}>Digiaalto veloittaa 25% työn alkaessa.</p>
      </div>
    </section>
  )
}

export default Price
