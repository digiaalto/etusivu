import styles from "../styles/LP_Pricing.module.sass"

const LP_Pricing = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="hinta" ref={refs}>
      <div className={styles.content}>
        <h3 className={styles.header}>
          Yrityssivut avaimet käteen toimituksella kiinteään hintaan 3,200€
        </h3>
        <p className={styles.note}>
          Digiaalto laskuttaa 30% etukäteen.
          <br />
          Sisällönhallintapalvelu 129,00€ / vuosi.
        </p>
      </div>
    </section>
  )
}

export default LP_Pricing
