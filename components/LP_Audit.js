import styles from "../styles/LP_Audit.module.sass"
import { HiExclamation } from "react-icons/hi"
import Button from "./utility/Button"
const auditLink = "https://www.web.dev/measure"

const LP_Audit = () => {
  return (
    <section className={styles.section} id="laatutesti-google-lighthouse">
      <div className={styles.content}>
        <span className={styles.preheader}>Laatumittari</span>
        <span className={styles.header}>Google Lighthouse</span>
        <p className={styles.info}>
          Google Lighthouse on automaattinen työkalu verkkosivujen laadun
          mittaamiseen josta selviää kuinka hyvin näyt ja pärjäät verkossa.
          Sillä voidaan auditoida minkä tahansa verkkosivun suorituskyky,
          saavutettavuus ja hakukoneoptimointi muutamassa sekunnissa ilmaiseksi,
          tarvitset vain testattavan sivun domain-osoitteen. Digiaalto varmistaa
          kehitystyön onnistumisen jatkuvalla laatutestauksella.
        </p>
        <Button href={auditLink} text={"Suorita oma laatutesti"} outside />
        <p className={styles.help}>
          <HiExclamation className={styles.helpIcon} /> Tulokset ovat
          englanniksi.
        </p>
      </div>
    </section>
  )
}

export default LP_Audit
