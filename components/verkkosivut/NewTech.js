import styles from "./NewTech.module.sass"
import { Fade } from "react-awesome-reveal"
import { cascadeFade } from "../../vars/"
import Overline from "../common/Overline"
import Takuut from "./Takuut"

const NewTech = (props) => {
  const { refs, isMobile } = props
  return (
    <Fade {...cascadeFade}>
      <Hybrid refs={refs} />
      <Palvelut />
    </Fade>
  )
}

const Hybrid = ({ refs }) => {
  return (
    <section className={styles.firstSection} id="uudet-verkkosivut" ref={refs}>
      <span className={styles.overlineIcon}>💡</span>
      <Overline text="Parempi ehdotus" />
      <h1>
        Piilaaksosta uutta kehityskoodia. Investoi älykkääseen
        hybrid-verkkosivuun josta teemme optimoidun myyntikanavan.
      </h1>
      <h2 className="headerDescription">
        Jamstack arkkitehtuuria hyödyntävä Next.js käyttöliittymäkehys soveltuu
        sekä yksinkertaisten kotisivujen, mutta myös laajempien web-appejen
        rakentamiseen.
      </h2>
      <div className={styles.takuutWrap}>
        <Takuut />
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3 className={styles.featureHeader}>
              Suorituskyky on erityisen tärkeää käyttäjien mobiilikokemuksessa,
              Googlen mukaan sen osoitetaan olevan jopa ulkoasua tärkeämpi.
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
              sisällönjulkaisuverkostoon, Amazonin pivipalveluun. On käytännössä
              mahdotonta että mikään määrä liikennettä kaataisi yhdenkään
              hybrid-sivustoistamme, twiittasi kuka tahansa siitä.
            </p>
            <p>
              Käyttämämme pilvialusta tarjoaa 100gb ilmaista kaistaa joka
              kuukausi, mikä tavanomaisessa Suomalaisessa mittakaavassa
              tarkoittaa käytännössä maksutonta palvelua.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Palvelut = () => {
  return (
    <section className={styles.middleSection}>
      <span className={styles.overlineIcon}>👀</span>
      <Overline text="Tulevaisuus" />
      <h1>
        Enään ei tarvitse puhua web-hotelleista, servereistä tai
        julkaisualustoista. Voimme abstraktoida kaikki tarpeet niihin
        erikoistuneille kolmansille osapuolille ja jättää ylläpitotoimet heidän
        käsiin.
      </h1>
      <h2 className="headerDescription">
        Jos yrityksesi verkkopalvelut tehdään edelleen vanhojen tekniikoiden
        varassa, on kannattavaa päivittää ne nykyaikaisiin standardeihin
        varmistaaksesi, että yrityksesi saavuttaa parhaan mahdollisen
        potentiaalin verkossa.
      </h2>
      <p>
        Työmme laatutestataan Googlen kehittämällä verkkosivujen laatutestillä.
        Uudenaikaiet inkrementaalisesti regeneroituvat sivustomme erottuavat
        omaan luokkaansa vaikeassa testissä joka tulostaa raportin
        suorituskyvyssä, esteettömyydestä, parhaista käytännöistä ja
        hakukoneoptimoinnissa.
      </p>
    </section>
  )
}

export default NewTech
