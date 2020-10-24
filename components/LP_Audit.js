import styles from "../styles/LP_Audit.module.sass"

const auditLink = "https://www.web.dev/measure"

const LP_Audit = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.suggestion}>
          Auditoi verkkosivuja ilmaiseksi, sekunneissa.
        </span>
        <a
          className={styles.button}
          href={auditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Suorita Lighthouse
        </a>
      </div>
    </section>
  )
}

export default LP_Audit
