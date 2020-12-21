import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="verkkopalvelu-ongelma">
      <Fade delay={300} triggerOnce>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ongelma</span>
            <h1 className={styles.header}>
              Yrittäjän elämä on kiireistä ja verkkosivut monimutkaisia.
            </h1>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textColumn}>
              <p>
                Jokainen yritys hyötyisi laadukkaasta verkkosivusta joka
                onnistuu toteuttamaan sille asetetut tavoitteet. Esimerkiksi
                yrityssivun päätavoite on yleensä liikevaihdon kasvattaminen
                palvelemalla ja saavuttamalla asiakkaita onnistuneesti.
              </p>
            </div>
            <div className={styles.textColumn}>
              <p>
                Kiireisen yrittäjän ei kuitenkaan aina ole taloudellisesti
                kannattavaa investoida paljon työaikaa verkkosivun suunnitteluun
                tai ylläpitoon, varsinkin jos se on pois omasta ydinosaamisesta.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default LP_Problem
