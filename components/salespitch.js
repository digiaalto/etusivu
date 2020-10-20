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
            <h2 className={styles.header}>Uusi tekniikka, uusi potenttiaali</h2>
            <p>
              Digiaalto rakentaa huolella optimoituja verkkosivuja tähtäämällä
              korkeisiin pisteisiin globaalisti suositussa verkkosivun
              laatutestissä.
            </p>
            <h2 className={styles.header2}>Tulikokeena Google Lighthousea.</h2>
            <p>
              Lighthouse suorittaa automaattisesti satoja testejä jotka etsivät
              puutteita testikohteen suorituskyvyssä, saavutettavuudessa ja
              hakukoneoptimoinnissa.
            </p>
            <p>
              Tulokset eivät kerro pelkästään sivujen potentiaalista
              hakukoneiden algoritmeissä, niistä voi päätellä myös vieralijoiden
              poistumisprosentti ja käyttökokemuksen onnistuneisuus.
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
                Selvitä miten kilpailijasi tai nykyiset verkkosivusi menestyvät
                Googlen testissä.
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
