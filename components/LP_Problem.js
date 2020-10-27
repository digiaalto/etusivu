import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="ongelma">
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ongelma</span>
            <h2 className={styles.header}>
              Suomessa lähes kaikki verkkosivut pyörivät huonosti optimoidulla
              Wordpressillä.
            </h2>
          </div>
          <div className={styles.pWrapper}>
            <p>
              Syy löytyy Wordpressin tuhansista ikääntyneistä lisäosista ja
              valmiista teemoista, joita jälleenmyymällä Wordpress-kehittäjät
              voivat vaivattomasti tarjota kopioituja, hitaita ja monimutkaisia
              yrityssivuja ylihintaan.
            </p>
            <p>
              Kun ostat Wordpress nettisivut, et osta pelkästään valitsemaltasi
              kehittäjältä, ostat myös hänen käyttämiltään lisäosien myyjiltä ja
              suunnittelijoilta, jotka eivät välitä yrityksestäsi tai
              verkkosivuistasi.
            </p>
          </div>
          <h2 className={styles.header}>
            Valtaosa Wordpress-kehittäjien koodista on ulkoistettua.
          </h2>
          <p>
            Mikään teknologiajätti ei käytä Wordpressia. Nyt ei tarvitse
            sinunkaan.
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
