import styles from "./OldTech.module.sass"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { basicFade, fadeLeft, fadeRight } from "../../vars/"
import Overline from "../common/Overline"
import Scorebar from "../../components/common/Scorebar"

const progress = {
  suorituskyky: 33,
  esteettomyys: 69,
  parhaatKaytannot: 82,
  seo: 89,
}

const OldTech = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="vanhat-verkkosivut" ref={refs}>
      <Fade {...basicFade}>
        <div className={styles.overlineWrap}>
          <span className={styles.overlineIcon}>🙈</span>
          <Overline text="Mennyttä maailmaa" />
        </div>
        <h1 className={styles.headerMain}>
          WordPressiä markkinoidaan parhaana verkkoratkaisuna suomalaiselle
          yrittäjälle. Oikeasti siitä hyötyy enemmän WordPress-toimisto kuin
          kukaan muu.
        </h1>
      </Fade>
      <div className={styles.column}>
        <div className={styles.imgWrap}>
          <Fade {...fadeLeft}>
            <Image
              src={"/images/typewriter.svg"}
              layout="intrinsic"
              width={408}
              height={308}
              alt="Hidas WordPress kuvaus"
            />
          </Fade>
        </div>
        <div className={styles.textWrap}>
          <Fade {...fadeRight}>
            <h2 className={styles.headerDescription}>
              WordPress on vastaus ongelmaan, mikä on ratkaisu paremmin jo ajat
              sitten. Silti markkinointitoimistot myyvät WordPressiä, he ovat
              riippuvaisia sen isosta vanhasta ohjelmistoekosysteemistä.
            </h2>
            <p>
              Käyttämällä kopioituja teemoja, ulkoistettuja lisäosia, raahaa ja
              pudota ominaisuuksia, WordPress-toimistot voivat myydä
              keskivertoisia kotisivuja liukuhihnanopeudella.
            </p>
            <p>
              WordPress aloitti yksinkertaisena bloggaamisalustana, ja vuosien
              mittaan se on kehittynyt sellaiseksi mitä sen ei koskaan pitänyt
              olla, aiheuttaen lukuisia ongelmia suorituskyvyssä,
              skaalautuvuudessa ja ohjelmistokehityksessä. Kaiken lisäksi nämä
              sivustot vaativat säännöllisiä ylläpitotoimia ja päivityksiä
              pysyäkseen toiminnassa.
            </p>
          </Fade>
        </div>
        <div className={styles.scoreWrap}>
          <Scorebar progress={progress} customClass={styles.customScorebar} />
        </div>
      </div>
    </section>
  )
}

export default OldTech
