import styles from "./Palvelut.module.sass"
import Overline from "../common/Overline"
import Link from "next/link"
import Ominaisuudet from "./Ominaisuudet"

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <div className={styles.content}>
        <Overline text="Mitä teemme?" />
        <h1 className={styles.headerMain}>
          Pitkäikäinen verkkosivu yritykselle, mittavalla laatutestauksella.
        </h1>
        <div className={styles.textContent}>
          <p>
            Digiaalto on erikoistunut tuomaan uutta, laadukasta web-teknologiaa
            Suomalaisten yrittäjien ja kuluttajien hyödyksi. Kustannustehokkaan{" "}
            <a
              href="https://jamstack.org/"
              rel="noopener noreferrer"
              target="_blanK"
            >
              kehitysarkkitehtuuriin
            </a>{" "}
            siivittämänä pystymme saavuttamaan lukuisia mitattavia hyötyjä
            verkossa.
          </p>
          <p>
            Suunnittelemamme tuotteet ovat älykkäitä
            <Link href="/verkkosivut#uudet-verkkosivut">
              <a> hybrid-sivustoja tai web-appeja. </a>
            </Link>
            Emme tarjoa ylläpitopalveluita sillä sivustomme eivät tarvitse
            niitä. Haluamme ylittää verkkopalveluiden käyttäjien odotukset
            palvelemalla heitä erityisen suorituskykyisesti ja helposti.
          </p>
        </div>
      </div>
      <Ominaisuudet />
    </section>
  )
}

export default Palvelut
