import styles from "../styles/LP_Problem.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const testUrl = "https://web.dev/measure/"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="laatutestaus">
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <span className="preheader">Ongelma</span>
          <h2 className={styles.header}>
            Suomessa lähes kaikki verkkosivut pyörivät huonosti optimoidulla,
            vanhentuneella Wordpressillä.
          </h2>
          <p>
            Syy tähän löytyy Wordpressin tuhansista lisäosista ja valmiista
            teemoista, joilla Wordpress-kehittäjät voivat vaivaa näkemättä
            nopeasti myydä asiakkailleen kloonattuja, hitaita läskejä
            verkkosivuja.
          </p>
          <p>
            Kun ostat Wordpress nettisivut, et osta pelkästään valitsemaltasi
            kehittäjältä, vaan myös hänen valitsemiltaan sadoilta lisäosien
            myyjiltä ja suunnittelijoilta, jotka eivät välitä sinun yrityksestä
            tai sivusta.
          </p>
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
