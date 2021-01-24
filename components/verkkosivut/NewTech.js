import styles from "./NewTech.module.sass"
import Scorebar from "../common/Scorebar"
import { Fade } from "react-awesome-reveal"
import { cascadeFade } from "../../vars/"
import Overline from "../common/Overline"

const progress = {
  suorituskyky: 91,
  esteettomyys: 94,
  parhaatKaytannot: 98,
  seo: 100,
}

const NewTech = (props) => {
  const { refs, isMobile } = props
  return (
    <section className={styles.section} id="uudet-verkkosivut" ref={refs}>
      <Fade {...cascadeFade}>
        <div className={styles.wrapper}>
          <Overline text="2021 ja eteenpäin" />
          <h1 className={styles.header}>
            Uudet verkkosivut
            <br />— React & Next.
          </h1>
          <h2 className={styles.description}>
            Next.js on ohjelmistokehys Facebookin luomalle React-kirjastolle
            jolla voidaan rakentaa älykkäästi toimivia hybrid-verkkosivuja.
          </h2>
          <div className={styles.texts}>
            <p>
              Sen sijaan että web-palvelin lähtee hakemaan dataa tietokannasta
              vasta vierailijan astuessa sivulle, hybrid-sivusto on rakennettu
              etukäteen ja lähetetty jo asiakkaan laitteelle.
            </p>
            <p>
              Käytännössä hybrid-sivusto johtaa pienempään poistumisprosenttiin,
              bugittomaan verkkopalveluun, parhaaseen tekniseen
              hakukoneoptimointiin, pitkäikäisyyteen, ja ylläpitotöistä
              johtuvien migreenien eliminointiin.
            </p>
          </div>
          <Scorebar
            progress={progress}
            isMobile={isMobile}
            onHover="Modernin tekniikan hedelmiä"
          />
        </div>
      </Fade>
    </section>
  )
}

export default NewTech
