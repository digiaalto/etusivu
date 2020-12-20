import styles from "../styles/LP_Solution.module.sass"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const LP_Solution = () => {
  return (
    <section className={styles.section} id="verkkopalvelu-ratkaisu">
      <Fade delay={300} triggerOnce>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ratkaisu</span>
            <h1 className={styles.header}>
              Vaivaton laatutestattu kehityspalvelu joka suunnittelee ja
              palvelee.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textColumn}>
              <p>
                Digiaalto on parempaan erikoistunut uusi verkkokehittäjä joka
                tähtää tekniseen täydellisyyteen hartaasti seuraamalla
                <Link href="/#laatutesti-google-lighthouse">
                  <a> Google Lighthouse </a>
                </Link>
                laatutestin analyysiä ja sen tarjoamaa ohjenuoraa.
              </p>
              <p>
                Verkkosivujen silmämääräisellä tutkiskelulla saattaa paljastua
                pintapuolen subjektiiviset hyvät ja huonot puolet, mutta
                hakukoneiden algoritmit ja robotit eivät niistä pahemmin
                piittaa.
              </p>
              <p>
                Tarvitaan analyytikkaa ja nykyaikaisten web-standardien ja
                parhaiden käytäntöjen tietämystä jos halutaan menestyä verkossa
                näin korona-aikana, kilpailun kasvaessa.
              </p>
            </div>
            <div className={styles.textColumn}>
              <p>
                Koska Suomen pienyrittäjien sivut on rakennettu lähes
                poikkeuksetta Wordpressin kaltaiselle PHP-sontakasalle, on
                Digiaallon{" "}
                <a
                  href="https://jamstack.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Jamstack-verkkosivuissa
                </a>{" "}
                kilpailuetu taattu jo lähtöruudussa.
              </p>
              <p>
                Pienellä vuosittaisella lisämaksulla Digiaalto hoitaa
                satunnaiset sisällönmuutokset, mahdolliset ylläpitö askareet ja
                päivitykset puolestasi ilman häiriöitä.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default LP_Solution
