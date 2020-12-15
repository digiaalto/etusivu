import styles from "../styles/LP_Pricing.module.sass"
import { FaGift } from "react-icons/fa"
import { Link } from "next/link"

const LP_Pricing = () => {
  return (
    <section id="hinnoittelu" className={styles.section}>
      <div className={styles.content}>
        <FaGift className={styles.giftIcon} />
        <h3 className={styles.header}>
          Valmiit kotisivut yrityksellesi tai vaikka lahjaksi 3,200€.
        </h3>
        <p className={styles.note}>
          Digiaalto laskuttaa 30% sopimuksen yhteydessä. Ylläpitopalvelu hintaan
          129,00€ / vuosi.
        </p>
      </div>
    </section>
  )
}

export default LP_Pricing
