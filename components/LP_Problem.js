import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="ongelmia-verkossa">
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ongelmia</span>
            <h2 className={styles.header}>
              Yrittäjän elämä on kiireistä, silti hyvät nettisivut pitää löytyä.
            </h2>
          </div>
          <div className={styles.pWrapper}>
            <p>
              Jokainen yrittäjä tietää, että aika on kultaa arvokkaampaa.
              Työtunteja ei sovi lapata verkkokehittäjän työn laadun
              tarkasteluun.
            </p>
            <p>
              Siksi Google on kehittänyt automaattisen laatutestin joka käy
              uuden verkkosivusi läpi puolestasi ja jonka tuloksia Digiaalto
              valvoo kehityksen yhteydessä.
            </p>
          </div>
          <h2 className={styles.header}>
            Suomen PK-yrittäjien verkkosivut ovat pahkassa.
          </h2>
          <p>
            Liian monet suomalaiset yrityssivut matelevat näytölle
            vanhentuneella ja heikosti optimoiduilla Wordpressillä.
            Wordpress-kehittäjät myyvät ulkoistettuja teemoja ja vaaraantuneita
            lisäosia.
          </p>
          <p>
            Tarvitaan nykyaikaista tekniikkaa joka toimii ja löytyy helpommin
            verkosta.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Problem

/**

  Digiaalto on erikoistunut staattisen verkkosivujen suunnitteluun ja
  kehittämiseen nopealla ja skaalautuvalla teknologia-stackillä, jolla
  saa kovat pisteet Googlen kehittämältä laatutestiltä. Wordpress
  perusmätöllä ei näihin tuloksiin päästä.

*/
