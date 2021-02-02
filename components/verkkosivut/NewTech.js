import styles from "./NewTech.module.sass"
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
      <div className={styles.overlineWrap}>
        <Overline text="Piilaaksosta uutta koodia" />
      </div>
      <h1>
        Rakennamme älykkäistä hybrid-verkkosivuista optimoituja myyntikanavia.
      </h1>
      <h2 className="headerDescription">
        {/* <a
          href="https://jamstack.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jamstack-arkkitehtuuria
        </a>{" "}
        käyttävä{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js-käyttöliittymäkehys
        </a>{" "}
        soveltuu sekä yksinkertaisten kotisivujen, verkkokauppojen, sekä
        laajempien web-appejen rakentamiseen. */}
        Digiaallon hybrid-sivustot rakennetaan käyttäen tuorretta teknologiaa
        suoraan Piilaaksosta. JAMstack-arkkitehtuuri kehitettiin jotta
        internetin käyttökokemus kohenisi ja olisi turvallista. Tuomme tätä
        edistynyttä kustannustehokasta tekniikkaa suomalaisten hyödyksi
        kilpailuhintaisesti.
      </h2>
      <div className={styles.takuutWrap}>
        <Takuut />
      </div>
      <div className={styles.contentWrap}>
        <h2 className={styles.featuresHeader}>Käytännön etuja.</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3 className={styles.featureHeader}>
              Suorituskyky on erityisen tärkeää käyttäjien mobiilikokemuksessa,{" "}
              <a
                href="https://youtu.be/mLjxXPHuIJo?t=72"
                target="_blank"
                rel="noopener noreferrer"
              >
                Googlen mukaan
              </a>{" "}
              jopa ulkoasua tärkeämpi. Pidemmät latausajat johtavat
              ennenaikaiseen poistumiseen ja vaikuttaa negatiivisesti brändin
              imagoon.
            </h3>
            <p>
              Meille on kunniakysymys valmistaa teknisesti ylivoimaisia
              web-tuotteita jotka tukevat teidän ja asiakkaittenne tarpeita
              perusteista lähtien.
            </p>
            <p>
              Siinä missä vanhanaikaiset verkkosivut joutuvat jatkuvasti
              kuormittamaan palvelintaan tietokantakyselyillä, hybrid-sivut ovat
              generoitu etukäteen ja voidaan lähettää käyttäjälle ilman
              kiertoteitä.
            </p>
            <p>
              Käytämme esiladattuja linkkejä, mitkä tekevät käyttäjän
              navigoinnista välitöntä ilman näennäisiä latausaikoja. Jaamme
              koodimme järkeviin kimpaleisiin ettei sitä tarvitse ladata
              kerralla ja optimoimme isotkin kuvat laatua menettämättä.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureHeader}>
              Mitä tapahtuu jos verkossa toimiva yritys haluaa laajentua
              kansainvälisille vesille, markkinavaatimuset muuttuvat, tai
              äkillinen some-ilmiö tuhatkertaistaa pienen verkkopalvelimen
              käyttäjävirran? Ilman nopeaa skaalautuvuutta nämä kultaiset
              tilaisuudet ovat mahdottomia.
            </h3>
            <p>
              Vastauksena tähän haasteeseen sivustomme levitetään{" "}
              <a
                href="https://www.netlify.com/products/edge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                globaaliin sisällönjulkaisuverkostoon.
              </a>{" "}
              On käytännössä mahdotonta, että mikään määrä liikennettä kaataisi
              yhdenkään hybrid-sivustoistamme, twiittasi niistä kuka tahansa.
            </p>
            <p>
              Sivustomme saavat 100gb ilmaista kaistaa joka kuukausi, mikä
              tavanomaisessa suomalaisessa mittakaavassa käytännössä tarkoittaa
              maksutonta palvelua. Maksurajan ylittyessä 19€/kk laskutus
              tapahtuu automaattisesti ja sivusto purskuttaa eteenpäin niin kuin
              mitään ei olisi tapahtunut.
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
      <div className={styles.overlineWrap}>
        <Overline text="Tulevaisuus" />
      </div>
      <h1>
        Enään ei tarvitse puhua web-hotelleista, servereistä tai
        julkaisualustoista. Voimme abstraktoida kaikki tarpeet niihin
        erikoistuneille kolmansille osapuolille ja jättää ylläpitotoimet heidän
        käsiin.
      </h1>
      <h2 className="headerDescription">
        Työmme laatutestataan Googlen kehittämällä verkkosivujen laatutestillä.
        Uudenaikaiet inkrementaalisesti regeneroituvat sivustomme erottuavat
        omaan luokkaansa vaikeassa testissä joka tulostaa raportin
        suorituskyvystä, esteettömyydestä, parhaista käytännöistä ja
        hakukoneoptimoinnissa.
      </h2>
      <div className={styles.scoreWrap}>
        <Scorebar progress={progress} />
      </div>
    </section>
  )
}

export default NewTech
