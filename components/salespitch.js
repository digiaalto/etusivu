import styles from "../styles/salespitch.module.sass"
import { BiTestTube } from "react-icons/bi"
import Fade from "react-reveal/Fade"
import Button from "./utility/button"

const animDelay = 100

const SalesPitch = () => {
  return (
    <section className={styles.section} id="laatutestaus">
      <div className={styles.content}>
        <Fade delay={animDelay} bottom>
          <span className={`miniheader ${styles.miniheader}`}>
            Testaa verkkosivusi
          </span>
          <h2 className={`${styles.header} headerAfter`}>
            Tiesitkö että Google auditoi nettisivuja?
          </h2>
        </Fade>
        <Fade delay={animDelay} bottom>
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
        </Fade>
        <Fade delay={animDelay} bottom>
          <div className={styles.buttonWrapper}>
            <Button
              text="Testaa Verkkosivusi"
              href="https://web.dev/measure/"
              outside
            />
          </div>
        </Fade>
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
