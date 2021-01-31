import styles from "./NewTech.module.sass"
import { Fade } from "react-awesome-reveal"
import { basicFade, delayedFadeCascade } from "../../vars/"
import Overline from "../common/Overline"
import Takuut from "./Takuut"
import Scorebar from "../common/Scorebar"

const progress = {
  suorituskyky: 93,
  esteettomyys: 100,
  parhaatKaytannot: 99,
  seo: 100,
}

const NewTech = (props) => {
  const { refs } = props
  return (
    <>
      <Hybrid refs={refs} />
      <Palvelut />
    </>
  )
}

const Hybrid = ({ refs }) => {
  return (
    <section className={styles.firstSection} id="uudet-verkkosivut" ref={refs}>
      <Fade {...basicFade}>
        <div className={styles.overlineWrap}>
          <span className={styles.overlineIcon}>💡</span>
          <Overline text="Piilaaksosta uutta koodia" />
        </div>
        <h1>
          Rakennamme älykkäistä hybrid-verkkosivuista optimoituja myyntikanavia
          yrityksille.
        </h1>
        <h2 className="headerDescription">
          Jamstack arkkitehtuuria hyödyntävä Next.js käyttöliittymäkehys
          soveltuu sekä yksinkertaisten kotisivujen, mutta myös laajempien
          web-appejen rakentamiseen.
        </h2>
      </Fade>
      <div className={styles.takuutWrap}>
        <Takuut />
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.features}>
          <Fade {...delayedFadeCascade}>
            <div className={styles.feature}>
              <h3 className={styles.featureHeader}>
                Suorituskyky on erityisen tärkeää käyttäjien
                mobiilikokemuksessa, Googlen mukaan jopa ulkoasua tärkeämpi.
                Pidemmät latausajat johtavat ennenaikaiseen poistumiseen ja
                vaikuttaa negatiivisesti brändin imagoon.
              </h3>
              <p>
                Meille on kunniakysymys valmistaa teknisesti ylivoimaisia
                web-tuotteita jotka tukevat teidän ja asiakkaittenne tarpeita
                perusteista lähtien.
              </p>
              <p>
                Siinä missä vanhanaikaiset verkkosivut joutuvat jatkuvasti
                kuormittamaan palvelintaan tietokantakyselyillä ennen
                renderöintiä, hybrid-sivut ovat generoitu etukäteen, ennen hänen
                saapumista, jotta ne voidaan lähettää hänelle ilman kiertoteitä.
              </p>
              <p>
                Hyödynnämme myös esiladattuja linkkejä, mitä käyttämällä
                vierailijan sivun sisäinen navigointi on välitöntä ilman
                näennäistä latausaikaa. Jaamme koodimme pieniin osiin ja
                optimoimme kuvat laatua menettämättä.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureHeader}>
                Mitä tapahtuu jos verkossa toimiva yritys haluaa laajentua
                kansainvälisille vesille, markkinavaatimuset muuttuvat, tai
                äkillinen some-ilmiö tuhatkertaistaa pienen verkkopalvelimen
                käyttäjävirran? Ilman nopeaa skaalautuvuutta nämä kultaiset
                tilaisuudet ovat vaikeita tai kokonaan hukattuja.
              </h3>
              <p>
                Vastauksena tähän haasteeseen sivustomme levitetään globaaliin
                sisällönjulkaisuverkostoon, Amazonin pivipalveluun. On
                käytännössä mahdotonta, että mikään määrä liikennettä kaataisi
                yhdenkään hybrid-sivustoistamme, twiittasi osoitteen kuka
                tahansa.
              </p>
              <p>
                Käyttämämme pilvialusta tarjoaa 100gb:n ilmaista kaistaa joka
                kuukausi, mikä tavanomaisessa Suomalaisessa mittakaavassa
                tarkoittaa käytännössä maksutonta palvelua.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

const Palvelut = () => {
  return (
    <section className={styles.middleSection}>
      <Fade {...basicFade}>
        <div className={styles.overlineWrap}>
          <span className={styles.overlineIcon}>👀</span>
          <Overline text="Tulevaisuus" />
        </div>
        <h1>
          Enään ei tarvitse puhua web-hotelleista, servereistä tai
          julkaisualustoista. Voimme abstraktoida kaikki tarpeet niihin
          erikoistuneille kolmansille osapuolille ja jättää ylläpitotoimet
          heidän käsiin.
        </h1>
        <h2 className="headerDescription">
          Työmme laatutestataan Googlen kehittämällä verkkosivujen
          laatutestillä. Uudenaikaiet inkrementaalisesti regeneroituvat
          sivustomme erottuavat omaan luokkaansa vaikeassa testissä joka
          tulostaa raportin suorituskyvystä, esteettömyydestä, parhaista
          käytännöistä ja hakukoneoptimoinnissa.
        </h2>
      </Fade>
      <div className={styles.scoreWrap}>
        <Scorebar progress={progress} />
      </div>
    </section>
  )
}

export default NewTech
