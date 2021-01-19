import styles from "./ThereIsMore.module.sass"
import { Fade } from "react-awesome-reveal"

const animCfg = {
  direction: "up",
  cascade: true,
  damping: 0.1,
}

const ThereIsMore = () => {
  return (
    <section className={styles.section}>
      <Fade {...animCfg}>
        <h3 className={styles.header}>Kuulostaako hyvältä? Ei siinä kaikki.</h3>
      </Fade>
      <Fade className={styles.content} {...animCfg}>
        <p>
          Nykaikaisen kehitysarkkitehtuurin siivittämänä enään ei tarvitse puhua
          web-hotelleista, palvelimista tai julkaisualustoista. Voimme
          abstraktoida kaikki palvelutarpeet niihin erikoistuneille kolmansille
          osapuolille ja jättää kaikki tietoturvahaasteet ja ylläpitotoimet
          heidän hoidettavakseen.
        </p>
        <p>
          Ja koska tavallisen suomalaisten yrittäjän palvelutarpeet ovat
          kansainvälisellä mittakaavalla niin pieniä, voimme käyttää näitä
          tehokkaita palveluita edullisesti, tai jopa kokonaan veloituksetta.
        </p>
        <p>
          Jos yrityksesi verkkopalvelut tehdään edelleen vanhojen tekniikoiden
          kanssa, on aika päivittää ne nykyaikaisiin standardeihin
          varmistaaksesi, että yrityksesi saavuttaa parhaan mahdollisen
          potentiaalin verkossa.
        </p>
      </Fade>
    </section>
  )
}

export default ThereIsMore
