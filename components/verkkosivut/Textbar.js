import styles from "./Textbar.module.sass"

const Textbar = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.text}>
        Jos yrityksesi verkkopalvelut tehdään edelleen vanhojen tekniikoiden
        varassa, kannattaa päivittää ne nykyaikaisiin standardeihin.
      </h3>
    </section>
  )
}

export default Textbar
