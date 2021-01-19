import styles from "./PriceWidget.module.sass"

const PriceWidget = ({ price, hideIfDesktop }) => (
  <div className={`${styles.widget} ${hideIfDesktop && styles.hideIfDesktop}`}>
    <span className={styles.price}>
      ~{price} €
      <br />
      <span className={styles.alv}>+ alv</span>
    </span>
  </div>
)

export default PriceWidget
