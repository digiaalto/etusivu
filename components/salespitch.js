import styles from "../styles/salespitch.module.sass"
import { Fade } from "react-awesome-reveal"
import Button from "./utility/button"

const SalesPitch = () => {
  return (
    <section className={styles.section} id="laatutestaus">
      <div className={styles.content}>
        <div className={styles.column}>
          <Fade fraction={1} direction="up" triggerOnce>
            <h2 className={styles.header}>
              Paras hakukoneoptimointi vaatii laatua
            </h2>
            <p>
              Digiaalto on erikoistunut koodaamaan normaalia tehokkaampia
              verkkosivuja jotka keräävät korkeat pisteet Googlelta, mikä johtaa
              parempaan menestymiseen verkossa.
            </p>
            <p>
              Testaukseen käytetään Googlen Lighthousea joka on Googlen
              kehittämä ilmainen laatutesti mikä on käytössä globaalisti
              verkkosivujen tulikokeena.
            </p>
            <p>
              Lighthouse suorittaa automaattisesti satoja pieniä testejä jotka
              mittaavat minkä tahansa verkkosivun suorituskyvyn,
              saavutettavuuden ja hakukoneoptimoinnin. Lopuksi se antaa
              yksinkertaisen arvosanan verkkosivun laadusta.
            </p>
            <p>
              Teknisesti onnistunut sivu ei pelkästään vaikuta positiivisesti
              hakukoneiden algoritmeissä, myös asiakkaasi käyttökokemus ja
              vuorovaikutus kohenee.
            </p>
          </Fade>
        </div>
        <div className={styles.column}>
          <Fade fraction={1} direction="right" triggerOnce>
            <h2 className={styles.header2}>
              Auditoi kilpilijasi tai yrityksesi verkkosivut!
            </h2>
            <Button
              text="Suorita mittaus"
              href="https://web.dev/measure/"
              center
              outside
            />
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
