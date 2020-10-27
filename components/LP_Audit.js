import styles from "../styles/LP_Audit.module.sass"
import { HiExclamation } from "react-icons/hi"
const auditLink = "https://www.web.dev/measure"

const LP_Audit = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.preheader}>
          Vertaile kilpailijasi sivuja omiisi
        </span>
        <span className={styles.suggestion}>Auditoi verkkosivun laatu.</span>
        <p className={styles.info}>
          Google Lighthouse on avoimen automaattinen työkalu verkkosivujen
          laadun mittaamiseen. Sitä voidaan käyttää minkä tahansa julkisen
          verkkosivun kanssa. Google Lighthouse tarkastaa verkkosivujen
          suorituskyvyn, saavutettavuuden ja hakukoneoptimoinnin.
        </p>
        <a
          className={styles.button}
          href={auditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Kokeile testiä
        </a>
        <p className={styles.help}>
          <HiExclamation className={styles.helpIcon} /> Tulokset ovat
          englanniksi.
        </p>
      </div>
    </section>
  )
}

export default LP_Audit
