import styles from "./NewTech.module.sass"
import { Fade } from "react-awesome-reveal"
import Takuut from "./Takuut"

const animCfg = {
  header: {
    direction: "up",
    triggerOnce: true,
  },
  text: {
    direction: "up",
    damping: 0.1,
    cascade: true,
    triggerOnce: true,
  },
  takuut: {
    triggerOnce: true,
  },
}

const NewTech = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="uusi-tekniikka" ref={refs}>
      <div className={styles.column}>
        <Fade {...animCfg.header}>
          <div>
            <h2 className={styles.header}>
              Uusi tekniikka <br />— React & Next.
            </h2>
          </div>
        </Fade>
        <Fade {...animCfg.text}>
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
      <div className={styles.column}>
        <Fade {...animCfg.takuut}>
          <Takuut />
        </Fade>
      </div>
    </section>
  )
}

export default NewTech
