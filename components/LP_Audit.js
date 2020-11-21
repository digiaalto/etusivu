import styles from "../styles/LP_Audit.module.sass"
import { HiExclamation } from "react-icons/hi"
const auditLink = "https://www.web.dev/measure"

const LP_Audit = () => {
  return (
    <section className={styles.section} id="testaa-verkkosivuja">
      <div className={styles.content}>
        <span className={styles.preheader}>Vertaile tuloksia</span>
        <span className={styles.header}>Testaa verkkosivuja</span>
        <p className={styles.info}>
          Google Lighthouse on ilmainen automaattinen työkalu verkkosivujen
          laadun mittaamiseen josta selviää kuinka hyvin näyt ja pärjäät
          verkossa. Sillä voidaan auditoida mikä tahansa verkkosivun
          suorituskyky, saavutettavuus ja hakukoneoptimointi muutamassa
          sekunnissa ilmaiseksi, tarvitset testattavan sivun domain-osoitteen.
        </p>
        <a
          className={styles.button}
          href={auditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Testaa
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
