import styles from "../styles/LP_Solution.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const LP_Solution = () => {
  return (
    <section className={styles.section} id="verkkopalvelu">
      <Fade delay={300} triggerOnce>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ratkaisu</span>
            <h1 className={styles.header}>
              Itsenäinen täyden palvelun suunnittelija ja verkkokehittäjä.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textColumn}>
              <p>
                Digiaalto on erikoistunut omatoimiseen verkkosuunnitteluun ja
                verkkokehitykseen, joka tarkoittaa ettei sinulta vaadita
                haluamaasi suurempaa roolia sisällöntuotossa tai ulkoasun
                kehityksessä.
              </p>
              <p>
                Valinnaisen ylläpitopalvelun kautta hoituu myös muut valmiin
                verkkosivun sisällönmuutokset, sekä päivitykset ja mahdolliset
                pienehköt lisätyöt.
              </p>
            </div>
            <div className={styles.textColumn}>
              <p>
                Yrityssivusi kehitetöön modernilla teknologialla joka takaa
                rakenteellisen kilpailuedun ja parhaan potentiaalisen
                menestymisen verkkokisassa.
              </p>
              <p>
                Pienemmät kehitysratkaisut perustuvat sinun projektisti
                omakohtaisiin vaatimuksiin sekä hakukoneiden ja käyttäjien
                arvostamiin standardeihin.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default LP_Solution
