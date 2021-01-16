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
            WordPressiä markkinoidaan parhaana verkkoratkaisuna pk-yrittäjille,
            mutta todellisuudessa siitä hyötyy enemmän myyntimies kuin asiakas
            itse.
          </h3>
          <p>
            WordPress on tehoton monoliitti joka helpoittaa verkkosivun
            kehittäjän työtä kloonatuilla valmisteemoilla, tuhansilla kehnosti
            koodatuilla plugineilla, raahaa ja pudota ominaisuuksilla, ja
            vanhentuneella julkaisualustallaan.
          </p>
          <p>
            Näiden oikoteiden hyväksikäyttö johtaa pakostakin tavalla tai
            toisella vialliseen, epävakaaseen tuotteeseen. WordPress aloitti
            yksinkertaisena bloggaamisalustana, ja vuosien mittaan se on
            kehittynyt sellaiseksi mitä sen ei koskaan pitänyt olla, aiheuttaen
            lukuisia ongelmia suorituskyvyssä, skaalautuvuudessa ja
            ohjelmistokehityksessä.
          </p>
          <p>
            WordPress sivustoja kiusaa myös jatkuvat tietoturva-aukot ja
            ylläpitotoimet joiden hoitamisesta myyjä kyllä muistaa laskutaa. Ei
            ole harvinaista kuulla että tuhansien yrittäjien käyttämässä
            lisäosassa on havaittu vakava bugi tai haavoittuvuus.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default OldTech
