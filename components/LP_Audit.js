import styles from "../styles/LP_Audit.module.sass"
import { HiExclamation } from "react-icons/hi"
const auditLink = "https://www.web.dev/measure"

const LP_Audit = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.suggestion}>Auditoi verkkosivusi laatu.</span>
        <p className={styles.info}>
          Google Lighthouse on avoimen lähdekoodin automaattinen työkalu
          verkkosivujen laadun mittaamiseen. Sitä voidaan käyttää minkä tahansa
          julkisen tai todentamista vaativan verkkosivun kanssa. Google
          Lighthouse tarkastaa verkkosivujen suorituskyvyn, saavutettavuuden ja
          hakukoneoptimoinnin.
        </p>
        <a
          className={styles.button}
          href={auditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Suorita Lighthouse
        </a>
        <p className={styles.help}>
          <HiExclamation /> Kirjoita testiin täydellinen, julkinen osoite
          (https://www.esimerkki.fi)
        </p>
      </div>
    </section>
  )
}

export default LP_Audit
