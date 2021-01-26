import styles from "./ServicePlan.module.sass"

const ServicePlan = (props) => {
  const { header, text, image, price } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>{image}</div>
      <div className={styles.headerContainer}>
        <span className={styles.header}>{header}</span>
      </div>
      <div className={styles.texts}>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  )
}

export default ServicePlan
