import styles from "./OldTech.module.sass"
import Image from "next/image"
import Overline from "../common/Overline"
import Scorebar from "../../components/common/Scorebar"

const progress = {
  suorituskyky: 33,
  esteettomyys: 69,
  parhaatKaytannot: 82,
  seo: 70,
}

const OldTech = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="vanhat-verkkosivut" ref={refs}>
      <div className={styles.headers}>
        <div className={styles.overlineWrap}>
          <Overline text="Totuus WordPressistä" />
        </div>
        <h1 className={styles.headerMain}>
          WordPressiä kaupataan parhaana verkkoratkaisuna suomalaisille
          yrittäjille, todellisuudessa siitä tykkää vain markkinointitoimistot.
        </h1>
      </div>
      <div className={styles.column}>
        <div className={styles.imgWrap}>
          <Image
            src={"/images/verkkosivut/wp-poop.png"}
            layout="intrinsic"
            width={506}
            height={512}
            alt="Wordpressiä kuvaava kakkakasa."
          />
          <span className={styles.imgNote}>Taiteilijan tulkinta.</span>
        </div>
        <div className={styles.textWrap}>
          <h2 className={styles.mediumHeader}>
            WordPress on vanha ratkaisu ongelmaan mikä on sittemmin ratkaisu
            tehokkaammin.
          </h2>
          <p>
            WordPress aloitti yksinkertaisena bloggaamisalustana, ja vuosien
            mittaan se on kehittynyt sellaiseksi mitä sen ei koskaan pitänyt
            olla, aiheuttaen lukuisia ongelmia suorituskyvyssä,
            skaalautuvuudessa ja ohjelmistokehityksessä.
          </p>
          <p>
            Verkkoalustojen rakenteelliset ongelmat heijastuvat käyttäjiin
            saakka tönkkönä ja bugisena käyttökokemuksena, mikä taas tahrii
            yrittäjän tuotemerkkiä ja kyseenalaistaa hänen luotettavuutta.
          </p>
          <p>
            Piilevistä vioista johtuvia haittoja yritetään mitigoida jatkuvilla
            ylläpitotoimilla ja päivityksillä, mutta Wordpressin heikkoudet
            menevät todella syvälle.
          </p>
          <span className={styles.mediumHeader}>
            Vanhasta ratkaisusta on tullut uusi ongelma.
          </span>
          <p>
            Wordpressin ohjelmistoekosysteemistä riippuvaiset
            markkinointitoimistot ovat erikoistuneet kokoamaan valmisteemoista
            ja lisäosista sivustoja, joita he kauppaavat pk-yrittäjille jotka
            eivät tiedä paremmista vaihtoehdoista.
          </p>
          <p>
            Teemasivut ovat aina rajoittuneita ominaisuuksiltaan ja kärsivät
            huonon suorituskyvyn aiheuttamista pullonkauloista, joista ei maksa
            pelkästään yritys, mutta myös yrityksen pettynyt asiakas.
          </p>
          <p className="important">
            Verkkokäyttäjillä ei ole kärsivällisyyttä tai mielenkiintoa selata
            hitaita mitäänsanomattomia yrityssivuja. Meidän pitää ylittää hänen
            odotukset, ja Wordpress alustana ei enään riitä... 😔
          </p>
        </div>
        <div className={styles.scoreWrap}>
          <Scorebar progress={progress} customClass={styles.customScorebar} />
        </div>
      </div>
    </section>
  )
}

export default OldTech
