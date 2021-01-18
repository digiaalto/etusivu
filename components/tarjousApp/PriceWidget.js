import styles from "./PriceWidget.module.sass"

const PriceWidget = ({ price }) => (
  <div className={styles.widget}>
    <span className={styles.price}>
      ~{price} €<span className={styles.alv}> + alv</span>
    </span>
  </div>
)

export default PriceWidget
