import styles from "../styles/LP_Solution.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const LP_Solution = () => {
  return (
    <section className={styles.section} id="huippuluokan-sivut">
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ratkaisu</span>
            <h1 className={styles.header}>
              Digiaalto tarjoaa verkkosivun suunittelu- ja kehityspalvelua joka
              ei kasvata työtaakkaasi.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Sinua ei tulla vaivaamaan turhilla tiedusteluilla, ja
                kehityspäätökset tehdään nykyisten web-standardien ja parhaiden
                käytäntöjen mukaisesti.
              </p>
              <p>
                Yrittäjänä tulet hyötymään etulyöntiasemasta, joka taataan jo
                ennen julkaisua{" "}
                <Link href="#laatutesti-google-lighthouse">
                  <a>ankaralla laadunvalvonnalla.</a>
                </Link>
              </p>
              <p>
                Teknisesti sivut kehitetään Facebookin ylläpitämällä React
                kehyksellä mikä on varma investointi josta verkossa toimiva
                yrittäjä hyötyy heti ja tulevaisuudessakin.
              </p>
              <p>
                Samaa teknologiaa suosii yhtä lailla ajan hermolla surffaavat
                yritykset kuin myös teknologiajätit. Verkkosivustasi saadaan
                teknisesti loistava ja niin helppokäyttöinen kuin haluat.
              </p>
            </div>
            <div>
              <h2 className={styles.sideHeader}>
                Hyödyntämällä kehittyneempää tekniikkaa ja seuraamalla tärkeitä
                web-standardeja, Digiaalto rakentaa kilpailua tehokkaampia ja
                paremmin optimoituja verkkosivuja pk-yrityksille,
                kilpailukykyisesti.
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
