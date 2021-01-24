import styles from "./NewTech2.module.sass"
import { Fade } from "react-awesome-reveal"
import { cascadeFade } from "../../vars"
import { LinkButton } from "../common/button"
import Takuut from "./Takuut"

const NewTech2 = () => {
  return (
    <section className={styles.section}>
      <Fade {...cascadeFade}>
        <div className={styles.wrapper}>
          <h1 className={styles.header}>
            Enään ei tarvitse puhua web-hotelleista, palvelimista tai
            julkaisualustoista. Voimme abstraktoida kaikki palvelutarpeet niihin
            erikoistuneille kolmansille osapuolille ja jättää ylläpitotoimet
            heidän käsiin.
          </h1>
          <div className={styles.column}>
            <div className={styles.texts}>
              <p>
                Koska tavallisen suomalaisten yrittäjän palvelutarpeet ovat
                kansainvälisellä mittakaavalla niin pieniä, voimme käyttää uusia
                tehokkaita palveluita edullisesti, tai jopa kokonaan
                veloituksetta.
              </p>
              <p>
                Jos yrityksesi verkkopalvelut tehdään edelleen vanhojen
                tekniikoiden kanssa, on kannattavaa päivittää ne nykyaikaisiin
                standardeihin varmistaaksesi, että yrityksesi saavuttaa parhaan
                mahdollisen potentiaalin verkossa.
              </p>
              <LinkButton
                href="/tarjouspyynto"
                text="Paljonko maksaa?"
                secondary
              />
            </div>
            <div className={styles.takuutWrapper}>
              <Takuut />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default NewTech2
