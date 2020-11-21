import styles from "../styles/LP_Solution.module.sass"
import { Fade } from "react-awesome-reveal"
import Link from "next/link"

const reactLink = "https://nextjs.org/"

const LP_Solution = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ratkaisu</span>
            <h1 className={styles.header}>
              Digiaalto kehittää huippuluokan verkkosivuja, todistettavasti.
            </h1>
          </div>
          <p>
            Seuraamalla hakukoneiden laatuvaatimuksia tarkasti,{" "}
            <span className="bold">
              Digiaalto luo superoptimoituja verkkosivuja yrittäjälle kenen
              kalenteri on täynnä.
            </span>
          </p>
          <p>
            Saat nykyaikaiset yrityssivut avaimet käteen menetelmällä. Sinun ei
            tarvitse kuin täyttää haastattelulomake ja kaikki verkkokehitykseen
            ja suunnitteluun liittyvät asiat testataan ja hoidetaan puolestasi.
          </p>
          <Link href="#testaa-verkkosivuja">
            <a className={styles.linkToTest}>Lue testistä lisää</a>
          </Link>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
