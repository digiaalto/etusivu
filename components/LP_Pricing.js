import styles from "../styles/LP_Pricing.module.sass"
import { FaGift } from "react-icons/fa"

const LP_Pricing = () => {
  return (
    <section id="hinnoittelu" className={styles.section}>
      <div className={styles.content}>
        <FaGift className={styles.giftIcon} />
        <h3 className={styles.header}>
          Valmiit kotisivut yrityksellesi tai vaikka lahjaksi, kiinteään hintaan
          3,200€.
        </h3>
        <p className={styles.note}>
          Kaikki on hoidettu puolestasi, sinun tarvitsee vain täyttää
          haastattelulomake. Digiaalto laskuttaa 50% työn alkaessa.
        </p>
      </div>
    </section>
  )
}

export default LP_Pricing
