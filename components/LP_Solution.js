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
              Vaivaton laatutestattu verkkokehitys ja suunnittelupalvelu.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Digiaalto panostaa verkkosivujen kehitystyöhön jotta yrityksesi
                voi nauttia etulyöntiasemasta verkkokilpailussa.
              </p>
              <p>
                Eikä sinua häiritä turhilla tiedusteluilla. Kaikki
                kehityspäätökset tehdään nykyisten web-standardien ja parhaiden
                käytäntöjen mukaisesti joita hakukoneet suosivat.
              </p>
              <p>
                Kehitys onnistuu ketterästi Facebookin ylläpitämällä React
                kehyksellä mikä on varma investointi. Ennen julkaisua verkkosivu{" "}
                <Link href="#laatutesti-google-lighthouse">
                  <a>laatutestataan</a>
                </Link>{" "}
                ja tuloksista tehdään raportti.
              </p>
              <p>
                Tätä teknologiaa suosii teknologiajättien lisäksi myös ajan
                hermolla surffaavat yrittäjät.
              </p>
            </div>
            <div>
              <h2 className={styles.sideHeader}>
                Hyödyntämällä uusinta tekniikkaa ja seuraamalla tärkeitä
                web-standardeja, voidaan valmistaa kilpailua tehokkaampia ja
                paremmin optimoituja verkkosivuja pk-yrityksille,
                kilpailuhintaisesti.
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
