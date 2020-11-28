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
              Laatutestattu verkkokehitys ja suunnittelupalvelu.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Digiaalto panostaa verkkosivujen kehitystyöhön jotta yrityksesi
                saa nauttia harvinaisesta etulyöntiasemasta verkossa.
              </p>
              <p>
                Sinua ei häiritä turhilla tiedusteluilla, kaikki
                kehitysjärjestelyt tehdään hakukoneiden suosimien
                web-standardien ja parhaiden käytäntöjen mukaisesti.
              </p>
              <p>
                Kehitys tapahtuu ketterästi Facebookin ylläpitämällä React
                verkkokehyksellä ja Next.js kirjastolla, joita käyttää monet
                teknologiajätit kuten Uber ja Airbnb sekä ajan hermolla
                surffaavat pienyritykset.
              </p>
            </div>
            <div>
              <h2 className={styles.sideHeader}>
                Hyödyntämällä uusinta tekniikkaa ja seuraamalla tärkeitä
                web-standardeja, on mahdollista valmistaa kilpailijoita
                tehokkaampia ja paremmin optimoituja verkkosivuja.
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
