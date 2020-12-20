import styles from "../styles/LP_Pricing.module.sass"
import { FaGift } from "react-icons/fa"

const LP_Pricing = () => {
  return (
    <section className={styles.section} id="hinnasto">
      <div className={styles.content}>
        <FaGift className={styles.giftIcon} />
        <h3 className={styles.header}>
          Valmiit kotisivut yrityksellesi tai vaikka lahjaksi 3,200€.
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
