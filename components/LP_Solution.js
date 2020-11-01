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
              Digiaalto luo superoptimoituja verkkosivuja yrittäjille kenen
              kalenteri on täynnä.
            </span>
          </p>
          <p>
            Kehitysvaihe yhdistetään automaattiseen laatutestaukseen, josta
            selviää verkkosivujen suorituskyky, saavutettavuus ja
            hakukoneoptimointi.
          </p>
          <Link href="#onko-parantamisen-varaa?">
            <a className={styles.linkToTest}>Lue testistä lisää</a>
          </Link>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Solution
