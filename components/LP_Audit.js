import styles from "../styles/LP_Audit.module.sass"
import Button from "./utility/button"

const LP_Audit = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.suggestion}>
          Auditoi omat, taikka kilpailijasi verkkosivu.
        </span>
        <Button
          text="Suorita Lighthouse"
          href="https://www.web.dev/measure"
          outside
        />
      </div>
    </section>
  )
}

export default LP_Audit
