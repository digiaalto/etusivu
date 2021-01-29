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
      <div className={styles.content}>
        <Overline text="Mitä valmistamme?" />
        <h1 className={styles.headerMain}>
          Kestävät nettisivut yritykselle mittavalla testauksella.
        </h1>
        <div className={styles.textContent}>
          <p>
            Suunnittelemme ja kehitämme
            <Link href="/verkkosivut#uudet-verkkosivut">
              <a> älykkäitä hybrid-sivustoja, </a>
            </Link>
            jotka tekevät kaiken mitä normaalit sivustot tekevät,
            suorituskykyisesti, skaalautuvasti, turvallisesti ja täysin ilman
            julkaisun jälkeisiä ylläpitokustannuksia.
          </p>
          <p>
            Tehdään verkkopalveluistasi luotettavia ja helppokäyttöisiä. Kierrä
            petollisten markkinointitoimistojen pk-yrittäjille asetettuja
            <Link href="/verkkosivut#vanhat-verkkosivut">
              <a> sudenkuoppia. </a>
            </Link>
            Investoi uuteen laadukkaaseen tekniikkaan ja hyödy rakenteellisesta
            kilpailuedusta.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Palvelut
