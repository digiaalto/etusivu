import styles from "./NewTech2.module.sass"
import { Fade } from "react-awesome-reveal"
import { cascadeFade } from "../../vars"
import Takuut from "./Takuut"

const NewTech2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <Fade {...cascadeFade}>
            <h3 className={styles.header}>Täydellinen valinnanvapaus.</h3>
            <p>
              Enään ei tarvitse puhua web-hotelleista, palvelimista tai
              julkaisualustoista. Voimme abstraktoida kaikki palvelutarpeet
              niihin erikoistuneille kolmansille osapuolille ja jättää
              ylläpitotoimet heidän käsiin.
            </p>
            <p>
              Ja koska tavallisen suomalaisten yrittäjän palvelutarpeet ovat
              kansainvälisellä mittakaavalla niin pieniä, voimme käyttää näitä
              tehokkaita palveluita edullisesti, tai jopa kokonaan
              veloituksetta.
            </p>
            <p className="bold">
              Jos yrityksesi verkkopalvelut tehdään edelleen vanhojen
              tekniikoiden kanssa, on kannattavaa päivittää ne nykyaikaisiin
              standardeihin varmistaaksesi, että yrityksesi saavuttaa parhaan
              mahdollisen potentiaalin verkossa.
            </p>
          </Fade>
        </div>
        <Takuut />
      </div>
    </section>
  )
}

export default NewTech2
