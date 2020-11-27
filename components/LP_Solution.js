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
              Digiaalto kehittää huippuluokan verkkosivuja,{" "}
              <span style={{ textDecoration: "underline" }}>
                todistettavasti.
              </span>
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Pelkästään täyttämällä haastattelulomakkeen saat yrityssivut
                joiden toteutuksen takaa Googlen kehittämä verkkosivujen
                laatutesti{" "}
                <Link href="#laatutesti-google-lighthouse">
                  <a>Lighthouse.</a>
                </Link>
              </p>
              <p>
                Halutessasi kaikki verkkosivun suunnitteluun ja kehitykseen
                liittyvät työt hoidetaan puolestasi, jotta voit yrittäjänä
                keskittyä omaan osaamiseen ja toimialaan.
              </p>
            </div>
            <div>
              <h2 className={styles.sideHeader}>
                Käyttämällä kehittyneempää tekniikkaa ja seuraamalla uusimpia
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
