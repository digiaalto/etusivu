import styles from "../styles/salespitch.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const testUrl = "https://web.dev/measure/"

const SalesPitch = () => {
  return (
    <section className={styles.section} id="laatutestaus">
      <div className={styles.content}>
        <div className={styles.column}>
          <Fade fraction={1} direction="up" triggerOnce>
            <h2 className={styles.header2}>Laatutestinä Google Lighthouse</h2>
            <p>
              Lighthouse suorittaa automaattisesti satoja testejä jotka etsivät
              puutteita testikohteen suorituskyvyssä, saavutettavuudessa ja
              hakukoneoptimoinnissa.
            </p>
            <p>
              Tulokset eivät kerro pelkästään sivujen potentiaalista
              hakukoneiden algoritmeissä, niistä voi päätellä myös vieralijoiden
              poistumisprosentti ja käyttökokemus.
            </p>
            <p className="bold">
              Digiaalto tähtää kaikkien web-standardien ja parhaiden käytäntöjen
              realisointiin.
            </p>
          </Fade>
        </div>
        <div className={styles.column}>
          <Fade fraction={1} direction="right" triggerOnce>
            <Link href={testUrl}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles.testLink}
              >
                Testaa miten kilpailijasi tai nykyiset verkkosivusi pärjäävät
                Googlen tulikokeessa.
              </a>
            </Link>
          </Fade>
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
