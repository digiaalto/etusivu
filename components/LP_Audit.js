import styles from "../styles/LP_Audit.module.sass"
import { HiExclamation } from "react-icons/hi"
const auditLink = "https://www.web.dev/measure"

const LP_Audit = () => {
  return (
    <section className={styles.section} id="onko-parantamisen-varaa?">
      <div className={styles.content}>
        <span className={styles.preheader}>
          Vertaile kilpailijan sivuja omiisi
        </span>
        <span className={styles.header}>Onko parantamisen varaa?</span>
        <p className={styles.info}>
          Google Lighthouse on ilmainen automaattinen työkalu verkkosivujen
          laadun mittaamiseen josta selviää kuinka verkkosivusi näkyy ja pärjää
          verkossa. Sillä voidaan auditoida mikä tahansa verkkosivun
          suorituskyky, saavutettavuus ja hakukoneoptimointi muutamassa
          sekunnissa.
        </p>
        <a
          className={styles.button}
          href={auditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Auditoi Sivu
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
