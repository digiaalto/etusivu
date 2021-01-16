import styles from "./VanhaMenetelma.module.sass"
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

const VanhaMenetelma = () => {
  return (
    <section className={styles.section} id="vanha-tekniikka">
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
            WordPressiä markkinoidaan parhaana verkkoratkaisuna asiakkaalle,
            mutta todellisuudessa sen käytöstä hyötyy myyntimies eikä asiakas
            itse.
          </h3>
          <p>
            WordPressin tarkoitus on helpoittaa verkkosivun kehittäjän
            työskentelyä valmisteemoilla ja ulkomailla kehitetyillä lisäosilla,
            joiden laatua ei takaa kukaan.
          </p>
          <p>
            Oikopolkujen käyttö johtaa pakostikkin tavalla tai toisella
            rampautuneeseen verkkosivuun joka on vähintään hidas ja huonosti
            skaalautuva. Tehottomuus tarkoittaa huonompaa käyttäjäkokemusta
            vierailijoille, seikka joka korreloi suoraan ison poistumisprosentin
            kanssa.
          </p>
          <p>
            WordPress sivustoja kiusaa myös jatkuvat tietoturva-aukot. Ei ole
            harvinaista kuulla että tuhansien yrittäjien käyttämässä lisäosassa
            on havaittu vakava haavoittuvuus.
          </p>
          <p>
            Näitä sivuja joudutaan jatkuvasti päivittelemään sormet ristissä
            että toiminta tehostuisi eikä mikään menisi rikki. Kaiken lisäksi
            näistä verkkosivun toimittajan itse aiheutetuista ylläpitotoimista
            pitää pulittaa vähän extraa.
          </p>
        </Fade>
      </div>
    </section>
  )
}

export default VanhaMenetelma
