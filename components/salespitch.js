import styles from "../styles/salespitch.module.sass"
import { GiBullseye } from "react-icons/gi"

const SalesPitch = () => {
  return (
    <section className={styles.section} id="paremmat-verkkosivut">
      <div className={styles.content}>
        <span className="miniheader">Kilpailu on kovaa</span>
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
          suosituksia huolella, jolloin sinä verkkosivun omistajana hyödyt.
        </p>
        <p>
          Voit selvittää paljonko omissa verkkosivuissasi on parantamisen varaa
          syöttämällä nettiosoite{" "}
          <a
            href="https://web.dev/measure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            tähän laatutestiin.
          </a>{" "}
          Testissä menee vain muutama sekunti.
        </p>
        <div className={styles.highlight}>
          <div>
            <GiBullseye className={styles.highlightIcon} />
          </div>
          <h3 className={styles.highlightHeader}>
            Digiaalto tähtää täysiin pisteisiin.
          </h3>
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
