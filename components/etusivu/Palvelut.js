import styles from "./Palvelut.module.sass"
import Overline from "../common/Overline"
import Link from "next/link"

const animCfg = {
  header: {
    duration: 1200,
    direction: "left",
    triggerOnce: true,
  },
  text: {
    duration: 1200,
    direction: "right",
    triggerOnce: true,
  },
}

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <div className={styles.content}>
        <Overline text="Mitä teemme?" />
        <h1 className={styles.headerMain}>
          Kestävä verkkosivu yritykselle, mittavalla laatutestauksella.
        </h1>
        <div className={styles.textContent}>
          <p>
            Digiaalto on erikoistunut tuomaan tehokasta web-teknologiaa
            Suomalaisten yrittäjien ja kuluttajien hyödyksi. Uudenaikaisen
            kustannustehokkaan{" "}
            <a
              href="https://jamstack.org/"
              rel="noopener noreferrer"
              target="_blanK"
            >
              kehitysarkkitehtuuriin
            </a>{" "}
            siivittämänä saavutamme lukuisia mitattavia hyötyjä internetin
            ihmeellisestä maailmassa.
          </p>
          <p>
            Suunnittelemme ja kehitämme
            <Link href="/verkkosivut#uudet-verkkosivut">
              <a> älykkäitä hybrid-sivustoja. </a>
            </Link>
            Meidän verkkosivut eivät vaadi ylläpitotoimia, ja ylittävät
            nykymaailman verkkokäyttäjän odotukset palvelemalla häntä
            suorituskykyisesti, turvallisesti, ja nopeasti skaalautumalla kovan
            paikan tullessa.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Palvelut
