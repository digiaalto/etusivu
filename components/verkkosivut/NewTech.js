import styles from "./NewTech.module.sass"
import Scorebar from "../common/Scorebar"
import { Fade } from "react-awesome-reveal"
import { cascadeFade } from "../../vars/"

const progress = {
  suorituskyky: 91,
  esteettomyys: 94,
  parhaatKaytannot: 98,
  seo: 100,
}

const NewTech = (props) => {
  const { refs, isMobile } = props
  return (
    <section className={styles.section} id="uusi-tekniikka" ref={refs}>
      <div className={styles.column}>
        <Fade {...cascadeFade}>
          <h2 className={styles.header}>
            Uusi tekniikka <br />— React & Next.
          </h2>
          <p>
            Next.js on ohjelmistokehys Facebookin luomalle React-kirjastolle
            jolla voidaan rakentaa fiksusti pyöriviä hybrid-verkkosivuja.
          </p>
          <p>
            Sen sijaan että web-palvelin lähtee hakemaan dataa tietokannasta
            vasta vierailijan astuessa sivulle, hybrid-sivusto on rakennettu jo
            etukäteen ja lähetetty asiakkaan iloksi.
          </p>
          <p>
            Käytännössä hybrid-sivusto johtaa pienempään poistumisprosenttiin,
            bugittomaan verkkopalveluun, parhaaseen tekniseen
            hakukoneoptimointiin, pitkäikäisyyteen, ja ylläpitotöistä johtuvien
            migreenien eliminointiin.
          </p>
        </Fade>
      </div>
      <Fade {...cascadeFade}>
        <Scorebar progress={progress} isMobile={isMobile} />
      </Fade>
    </section>
  )
}

export default NewTech
