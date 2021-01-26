import styles from "./Palvelut.module.sass"
import Overline from "../common/Overline"
import Link from "next/link"

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
      <Overline text="Miksi Digiaalto?" />
      <h1 className={styles.header}>
        Kestävät nettisivut yritykselle mittavalla laatutestauksella.
      </h1>
      <div className={styles.column}>
        <div />
        <p>
          Digiaallon palveluihin sisältyy kaikki laadukkaiden nettisivujen,
          verkkokauppojen, web-appejen ja blogejen valmistusvaiheet ja
          palveluintegroinnit alusta loppuun älykkäällä{" "}
          <Link href="/verkkosivut#uudet-verkkosivut">
            <a>hybrid-teknologialla.</a>
          </Link>
        </p>
        <p>
          Vältä yleisiä{" "}
          <Link href="/verkkosivut#vanhat-verkkosivut">
            <a>suodenkoppia</a>
          </Link>{" "}
          johon monet kilpailijasi ovat tietämättään pudonneet. Hyödy
          rakenteellisesta kilpailuedusta valitsemalla nykyaikainen ja tehokas
          kehitysarkkitehtuuri mikä kannattaa.
        </p>
        <div />
      </div>
    </section>
  )
}

export default Palvelut
