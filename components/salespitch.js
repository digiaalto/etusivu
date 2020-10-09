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
            Testaa verkkosivusi muutamassa sekunnissa
          </span>
          <h2 className={`${styles.header} headerAfter`}>
            Tiesitkö että Google valvoo verkkosivujen laatua?
          </h2>
        </Fade>
        <Fade delay={animDelay} bottom>
          <p>
            Google on kehittänyt automaattisen työkalun verkkosivujen laadun
            mittaamiseen. Google Lighthouse tarkastaa muummoassa verkkosivujen
            suorituskyvyn, saavutettavuuden ja hakukoneoptimoinnin.
          </p>
          <p>
            Paremmalle perustukselle rakennettu verkkosivu vaikuttaa
            positiivisesti hakukoneoptimointiin, käyttäjäkokemukseen, sivusi
            saatavuuteen ja esteettömyyteen.
          </p>
          <p>
            Digiaalto panostaa säästämättömästi verkkosivujesi tekniseen
            toteutukseen noudattamalla Googlen vaatimuksia ja suosituksia
            todistettavalla huolella.
          </p>
        </Fade>
        <Fade delay={animDelay} bottom>
          <div className={styles.buttonWrapper}>
            <Button
              icon={<BiTestTube />}
              text="Testaa Sivuja"
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
