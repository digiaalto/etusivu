import styles from "./OldTech.module.sass"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

const animCfg = {
  cascadeFade: {
    direction: "up",
    damping: 0.1,
    cascade: true,
    triggerOnce: true,
  },
}

const OldTech = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="vanha-tekniikka" ref={refs}>
      <div className={`${styles.column} ${styles.headerContainer}`}>
        <Fade {...animCfg.cascadeFade}>
          <h2 className={styles.header}>Vanha tekniikka — WordPress.</h2>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/typewriter.svg"}
              layout="intrinsic"
              width={490}
              height={370}
              alt="Hidas WordPress kuvaus"
            />
          </div>
        </Fade>
      </div>
      <div className={`${styles.column} ${styles.textContainer}`}>
        <Fade {...animCfg.cascadeFade}>
          <h3 className={styles.subheader}>
            WordPressiä markkinoidaan parhaana verkkoratkaisuna suomalaisille
            yrittäjille, mutta todellisuudessa siitä hyötyy enemmän myyntimies
            kuin asiakas itse.
          </h3>
          <p>
            WordPressin peitetty tarkoitus on helpoittaa verkkosivun kehittäjän
            työtä kloonatuilla valmisteemoilla, plugineilla, "raahaa ja pudota"
            ominaisuuksilla, ja kätevällä mutta ikääntyneellä julkaisualustalla.
          </p>
          <p>
            Näiden oikoteiden hyväksikäyttö johtaa pakostakin vialliseen,
            tehottomaan tuotteeseen, josta sivun omistaja joutuu maksamaan
            tavalla tai toisella.
          </p>
          <p>
            WordPress aloitti yksinkertaisena bloggaamisalustana, ja vuosien
            mittaan se on kehittynyt sellaiseksi mitä sen ei koskaan pitänyt
            olla, aiheuttaen lukuisia ongelmia suorituskyvyssä,
            skaalautuvuudessa ja ohjelmistokehityksessä.
          </p>
          <p>
            WordPress sivustoja kiusaa myös jatkuvat tietoturva-aukot ja
            ylläpitotoimet joiden hoidosta WordPress kauppias tottakai laskuttaa
            erikseen.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default OldTech
