import styles from "../styles/LP_Solution.module.sass"
import Link from "next/link"

const LP_Solution = () => {
  return (
    <section className={styles.section} id="huippuluokan-sivut">
      <div className={styles.content}>
        <div className={styles.headerWrapper}>
          <span className={styles.preheader}>Ratkaisu</span>
          <h1 className={styles.header}>
            Vaivaton laatutestattu verkkokehityspalvelu.
          </h1>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textColumn}>
            <p>
              Digiaalto kehittää verkkosivuja tehokkaalla React teknologialla.
              Reactia käyttää sekä ajan hermolla surffaavat pienyritykset, että
              isot teknologiajätit kuten Netflix, Airbnb, Facebook ja Amazon.
            </p>
            <p>
              Koska Suomessa valtaosa pk-yrittäjien yrityssivuista on
              valmistettu vanhentuneella Wordpressillä ja valmisteemoilla on
              kilpailuetu taattu jo lähtöruudussa.
            </p>
          </div>
          <div className={styles.textColumn}>
            <p>
              Seuraamalla hakukoneiden suosituksia Digiaalto rakentaa
              verkkosivuja jotka saavuttavat lähes täydet pisteet Googlen omassa
              verkkosivujen{" "}
              <Link href="/#laatutesti-google-lighthouse">
                <a>laatutestissä.</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LP_Solution
