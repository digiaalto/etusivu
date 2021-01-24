import styles from "./Palvelut.module.sass"
import Overline from "../common/Overline"

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
        Kestävät kotisivut yritykselle mittavalla laatutestauksella.
      </h1>
      <div className={styles.column}>
        <div />
        <p>
          Digiaallon palveluihin sisältyy kaikki laadukkaiden nettisivujen,
          verkkokauppojen, web-appejen ja blogejen valmistusvaiheet ja
          palveluintegroinnit alusta loppuun.
        </p>
        <p>
          Vältä yleisiä suodenkoppia johon monet kilpailijasi ovat tietämättään
          pudonneet. Hyödy rakenteellisesta kilpailuedusta valitsemalla
          nykyaikainen ja tehokas kehitysarkkitehtuuri mikä kannattaa.
        </p>
        <div />
      </div>
    </section>
  )
}

export default Palvelut
