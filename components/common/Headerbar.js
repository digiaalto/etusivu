import styles from "./Headerbar.module.sass"

const Headerbar = ({ txt }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.header}>{txt}</h1>
    </section>
  )
}

export default Headerbar
