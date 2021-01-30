import styles from "./OldTech.module.sass"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { cascadeFade } from "../../vars/"
import Overline from "../common/Overline"

const OldTech = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="vanhat-verkkosivut" ref={refs}>
      <Fade {...cascadeFade}>
        <span className={styles.overlineIcon}>🙈</span>
        <Overline text="Mennyttä maailmaa" />
        <h1>
          WordPressiä markkinoidaan täydellisenä verkkoratkaisuna suomalaiselle
          yrittäjälle, mutta todellisuudessa siitä hyötyy myyntimies enemmän
          kuin asiakas.
        </h1>
        <div className={styles.column}>
          <div className={styles.imgWrap}>
            <Image
              src={"/images/typewriter.svg"}
              layout="intrinsic"
              width={490}
              height={370}
              alt="Hidas WordPress kuvaus"
            />
          </div>
          <div className={styles.texts}>
            <h2 className="headerDescription">
              WordPress on vanhentunut ratkaisu ongelmiin, millä ei ole enään
              väliä. Suomalaiset markkinointitoimistot myyvät WordPress-sivuja
              sillä he ovat riippuvaisia sen isosta, mutta huonolaatuisesta
              ohjelmistoekosysteemistä. Käyttämällä kopioituja teemoja,
              ulkoistettuja lisäosia, raahaa ja pudota ominaisuuksia,
              WordPress-toimistot voivat kaupata liukuhinan nopeudella
              yrityssivuja.
            </h2>
            <p>
              WordPressin oikoreittien hyväksikäyttö johtaa perusteellisiin
              vikoihin suorituskyvyssä, turvallisuudessa ja renderöintitekniikan
              rajoittuneisuudessa, mikä pullonkaulattaa tai jopa estää yrityksen
              menestymistä verkossa.
            </p>
            <p>
              WordPress aloitti yksinkertaisena bloggaamisalustana, ja vuosien
              mittaan se on kehittynyt sellaiseksi mitä sen ei koskaan pitänyt
              olla, aiheuttaen lukuisia ongelmia suorituskyvyssä,
              skaalautuvuudessa ja ohjelmistokehityksessä. Nämä sivustot
              vaativat säännöllisiä ylläpitotoimia ja päivityksiä pysyäkseen
              elossa.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default OldTech
