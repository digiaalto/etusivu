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
                suunnittelupäätökset tehdään joko sinun henkilökohtaisten
                toiveiden tai nykyisten web-standardien ja parhaiden käytäntöjen
                mukaisesti.
              </p>
              <p>
                Teknisesti sivut kehitetään Facebookin ylläpitämällä React
                kehyksellä mikä on varma investointi josta verkossa toimiva
                yrittäjä hyötyy heti ja tulevaisuudessa.
              </p>
              <p>
                Reactia suosii yhtä lailla ajan hermolla surffaavat yritykset
                kuin myös suuret teknologiajätit. Verkkosivustasi saadaan
                teknisesti loistava ja niin helppokäyttöinen kuin haluat.
              </p>
              <p>
                Yrittäjänä tulet hyötymään etulyöntiasemasta, joka taataan ennen
                julkaisua{" "}
                <Link href="#laatutesti-google-lighthouse">
                  <a>ankaralla Google Lighthouse laatutestillä.</a>
                </Link>
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
