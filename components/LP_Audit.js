import styles from "../styles/LP_Audit.module.sass"
import { HiExclamation } from "react-icons/hi"
import Button from "./utility/Button"
import Quote from "./LP_Quote"

const auditLink = "https://www.web.dev/measure"

const LP_Audit = () => {
  return (
    <section className={styles.section} id="laatutesti-google-lighthouse">
      <div className={styles.content}>
        <div className={styles.column}>
          <span className={styles.preheader}>Laatumittari</span>
          <span className={styles.header}>Google Lighthouse</span>
          <p className={styles.info}>
            Lighthouse on ilmainen ja helppokäyttöinen verkkosivujen laatutesti
            jolla varmistetaan kehitystyön onnistuneisuus. Sillä voi testauttaa
            minkä tahansa nettisivun ja paljastaa helposti puutteet
            verkkokehittäjien kädenjäljessä.
          </p>
          <Button href={auditLink} text={"Kokeile"} outside />
          <p className={styles.help}>
            <HiExclamation className={styles.helpIcon} /> Englanniksi.
          </p>
        </div>
        <div className={styles.column}>
          <Quote />
        </div>
      </div>
    </section>
  )
}

export default LP_Audit
