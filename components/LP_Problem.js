import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="ongelmia-paratiisissa">
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ongelmia</span>
            <h2 className={styles.header}>
              Yrittäjän elämä on kiireistä, silti nettisivut pitää löytyä.
            </h2>
          </div>
          <div className={styles.pWrapper}>
            <p>
              Aika on kultaa arvokkaampaa niin kuin jokainen tietäjä tietää.
              Yrittäjän elämää säätelee varovainen tasapaino univajeen ja urakan
              välillä. Arvokkaita työtunteja ei sovi lapata muiden töiden
              valvontaan.
            </p>
            <p>
              Siksi Google on kehittänyt automaattisen laatutestin joka käy
              verkkosivusi läpi puolestasi ja jota Digiaalto käyttää kehityksen
              yhteydessä.
            </p>
          </div>
          <h2 className={styles.header}>
            Suomen PK-yrittäjien verkkosivut ovat pahkassa.
          </h2>
          <p>
            Liian monet suomalaiset yrityssivut matelevat näytölle
            vanhentuneella ja kehnosti optimoiduilla Wordpressillä.
          </p>
          <p>
            Wordpress-kehittäjät jälleenmyyvät ulkoistettua koodia teemojen ja
            vaaraantuneiden lisäosien muodossa.
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
