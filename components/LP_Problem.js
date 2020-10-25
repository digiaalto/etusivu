import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="laatutestaus">
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
              Syy tähän löytyy Wordpressin tuhansista lisäosista ja valmiista
              teemoista, joilla Wordpress-kehittäjät voivat vaivaa näkemättä
              myydä asiakkailleen kloonattuja, hitaita verkkosivuja.
            </p>
            <p>
              Kun ostat Wordpress nettisivut, et osta pelkästään valitsemaltasi
              kehittäjältä, ostat myös hänen käyttämiltään sadoilta lisäosien
              myyjiltä ja suunnittelijoilta, jotka eivät välitä sinun
              yrityksestä tai sivusta.
            </p>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <h2 className={styles.header}>
            Valtaosa Wordpress-kehittäjien koodista on ulkoistettua.
          </h2>
          <p>
            Wordpress ja sen teemat ovat täynnä turhia paisuneita ominaisuuksia,
            tietoturva-aukkoja, kyseenalaista logiikkaa ja kuluneita
            design-päätöksiä.
          </p>
          <p className="bold">
            Mikään teknologiajätti ei käytä Wordpressia; nyt ei tarvitse
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
