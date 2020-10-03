import styles from "../styles/salespitch.module.sass"
import { BiTestTube } from "react-icons/bi"
import Button from "./utility/button"

const SalesPitch = () => {
  return (
    <section className={styles.section} id="paremmat-verkkosivut">
      <div className={styles.content}>
        <span className={`miniheader ${styles.miniheader}`}>
          Testaa verkkosivusi
        </span>
        <h2 className={`${styles.header} headerAfter`}>
          Tiesitkö että Google auditoi nettisivuja?
        </h2>
        <p>
          Perinteisesti vain hakusanat ja sisältö vaikuttivat
          hakukoneoptimointiin, mutta internet on kehittynyt villin lännen
          ajoilta jolloin mitään parhaita käytäntöjä ei noudatettu, eikä
          web-standardeja ollut olemassa. Nykyään asiat ovat toisin.
        </p>
        <p>
          Kehittyneellä metodologialla rakennettu verkkosivu vaikuttaa
          positiivisesti hakukoneoptimointiin, käyttäjäkokemukseen, sivusi
          saatavuuteen ja esteettömyyteen.
        </p>
        <p>
          Digiaalto panostaa säästämättömästi verkkosivujen backendiin, eli
          tekniseen toteutukseen noudattamalla Googlen vaatimuksia ja
          suosituksia huolella, jolloin sinä hyödyt.
        </p>
        <div className={styles.buttonWrapper}>
          <Button
            text="Testaa Verkkosivusi"
            href="https://web.dev/measure/"
            outside
          />
        </div>
      </div>
    </section>
  )
}

export default SalesPitch

/**

  Digiaalto on erikoistunut staattisen verkkosivujen suunnitteluun ja
  kehittämiseen nopealla ja skaalautuvalla teknologia-stackillä, jolla
  saa kovat pisteet Googlen kehittämältä laatutestiltä. Wordpress
  perusmätöllä ei näihin tuloksiin päästä.

*/
