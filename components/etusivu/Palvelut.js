import styles from "./Palvelut.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import Ominaisuudet from "./Ominaisuudet"

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
      <div className={styles.topContent}>
        <Fade {...animCfg.header}>
          <div className={styles.headers}>
            <span className={styles.preheader}>Mitä saat?</span>
            <h1 className={styles.header}>
              Kestävät kotisivut yritykselle mittavalla laatutestauksella.
            </h1>
          </div>
        </Fade>
        <Fade {...animCfg.text}>
          <div className={styles.textWrapper}>
            <p>
              Digiaallon palveluihin sisältyy kaikki laadukkaiden nettisivujen,
              verkkokauppojen, web-appejen ja blogejen valmistusvaiheet ja
              integraatiot alusta loppuun ja vähän pidemmällekin.
            </p>
            <p>
              Vältä{" "}
              <Link href="/verkkosivut#vanha-tekniikka">
                <a>yleisiä verkkoansoja</a>
              </Link>{" "}
              johon useat Suomalaiset yrittäjät ovat tietämättään astuneet, ja
              hyödy rakenteellisesta kilpailuedusta valitsemalla{" "}
              <Link href="/verkkosivut#uusi-tekniikka">
                <a>nykyaikainen ja tehokas kehitysarkkitehtuuri.</a>
              </Link>
            </p>
          </div>
        </Fade>
      </div>
      <Ominaisuudet />
    </section>
  )
}

export default Palvelut
