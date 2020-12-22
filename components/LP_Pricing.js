import styles from "../styles/LP_Pricing.module.sass"

const LP_Pricing = () => {
  return (
    <section className={styles.section} id="hinnoittelu">
      <div className={styles.content}>
        <h3 className={styles.header}>
          Yrityssivu avaimet käteen toimituksella kiinteään hintaan 3,200€
        </h3>
        <p className={styles.note}>
          Digiaalto laskuttaa 30% etukäteen.
          <br />
          Ylläpito lisäpalvelu &rarr; 129,00€ / vuosi.
        </p>
      </div>
    </section>
  )
}

export default LP_Pricing
