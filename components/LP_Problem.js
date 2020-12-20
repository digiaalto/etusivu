import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="verkkopalvelu-ongelma">
      <Fade delay={300} triggerOnce>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ongelma</span>
            <h1 className={styles.header}>
              Kiireinenkin yrittäjä tarvitsee hyödyllisen verkkosivun.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textColumn}>
              <p>
                Yrittäjän aika on kullan arvoista ja vapaita työtunteja on
                harvassa. Taloudellisesti on järkevämpää keskittyä omaan
                toimialaan, ennemmin kuin verkkosuunitteluun.
              </p>
              <p>
                Kuitenkin jokainen yrittäjä tarvitsee verkkosivut, ja niiden on
                parempi olla laadukkaat. Mikä on laadukas verkkosivu?
              </p>
              <p>
                Kaikessa yksinkertaisuudessaan verkkosivu joka onnistuu sille
                asetetuissa tavoitteissaan on laadukas. Yrityssivun päätavoite
                on yleensä liikevaihdon kasvattaminen saavuttamalla asiakkaita.
              </p>
            </div>
            <div className={styles.textColumn}>
              <p>
                Oma kiireinen aikataulu ei kuitenkaan ole ainut rajoittava
                tekijä tämän elintärkeän päätavoitteen tavoituksessa.
              </p>
              <p>
                Sadat pienet ja suuret teknologiset päätökset ja design
                muutokset vaikuttavat omalla tavallaan menestymiseen käyttäjien
                käsissä, kuten roboottien algoritmeissäkin.
              </p>
              <p>
                Verkkosivujen ominaisuudet ja niihin liittyvät vaatimukset ovat
                moninkertaistuneet internetin kehityksen myötä, ja
                laadunvalvonta on jäänyt monelta kehittäjältä taka-alalle.
              </p>
              <p>
                Miten voi välttää verkkokehittäjiä jotka epäoptimaalisilla
                päätöksillä antaa kilpailijoille rahan arvoisen edun ilmaiseksi?
                —Vieritä alas.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default LP_Problem
