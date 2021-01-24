import styles from "./OldTech.module.sass"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { cascadeFade } from "../../vars/"
import Scorebar from "../common/Scorebar"
import Overline from "../common/Overline"

const scores = {
  suorituskyky: 23,
  esteettomyys: 77,
  parhaatKaytannot: 65,
  seo: 90,
}

const OldTech = (props) => {
  const { refs, isMobile } = props
  return (
    <section className={styles.section} id="vanhat-verkkosivut" ref={refs}>
      <Fade {...cascadeFade}>
        <div className={styles.wrapper}>
          <Overline text="Mennyttä maailmaa" />
          <h1 className={styles.header}>Vanhat verkkosivut — WordPress.</h1>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/typewriter.svg"}
              layout="intrinsic"
              width={490}
              height={370}
              alt="Hidas WordPress kuvaus"
            />
          </div>
          <h2 className={styles.description}>
            WordPressiä markkinoidaan parhaana verkkoratkaisuna suomalaisille
            yrittäjille, mutta todellisuudessa siitä hyötyy enemmän myyntimies
            kuin asiakas itse.
          </h2>
          <div className={styles.texts}>
            <div>
              <p>
                WordPressin päätarkoitus on helpoittaa verkkosivun kehittäjän
                työtä kopioiduilla valmisteemoilla, plugineilla, "raahaa ja
                pudota" ominaisuuksilla, ja kätevällä mutta ikääntyneellä
                julkaisualustalla.
              </p>
              <p>
                Näiden oikoteiden hyväksikäyttö johtaa pakostakin vialliseen,
                tehottomaan tuotteeseen, josta sivun omistaja joutuu maksamaan
                tavalla tai toisella.
              </p>
            </div>
            <div>
              <p>
                WordPress aloitti yksinkertaisena bloggaamisalustana, ja vuosien
                mittaan se on kehittynyt sellaiseksi mitä sen ei koskaan pitänyt
                olla, aiheuttaen lukuisia ongelmia suorituskyvyssä,
                skaalautuvuudessa ja ohjelmistokehityksessä.
              </p>
              <p>
                WordPress sivustoja kiusaa myös jatkuvat tietoturvaongelmat ja
                ylläpitotoimet joiden hoidosta kauppias varmasti laskuttaa.
              </p>
            </div>
          </div>
          <Scorebar
            onHover="Tavalliset tulokset WordPressillä."
            progress={scores}
            isMobile={isMobile}
          />
        </div>
      </Fade>
    </section>
  )
}

export default OldTech
