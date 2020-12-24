import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Problem = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="kotisivujen-hankinta" ref={refs}>
      <Fade delay={400} triggerOnce>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <Fade delay={400} direction="left">
              <span className={styles.preheader}>Ongelma</span>
            </Fade>
            <h1 className={styles.header}>
              Yrittäjyys on kiireistä ja kotisivujen hankinta monimutkaista.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textColumn}>
              <p>
                Tästä huolimatta jokainen yritys tarvitsee oman kotisivun mikä
                onnistuu toteuttamaan sille asetetut tavoitteet. Tärkein
                päätavoite saattaa olla esimerkiksi liikevaihdon kasvattaminen
                palvelemalla vanhoja asiakkaita ja saavuttamalla uusia.
              </p>
            </div>
            <div className={styles.textColumn}>
              <p>
                Kiireisen yrittäjän ei kuitenkaan aina ole taloudellisesti
                kannattavaa investoida paljon työaikaa kotisivun suunnitteluun
                tai ylläpitoon, varsinkin jos se on pois oman yritystoiminnan
                harjoittamisesta.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default LP_Problem
