import styles from "../styles/Palvelut.module.sass"
import { Fade } from "react-awesome-reveal"

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="palvelut" ref={refs}>
      <div className={styles.content}>
        <Fade direction="left" triggerOnce>
          <div className={styles.headers}>
            <Fade fraction={0.2} delay={200} direction="left" triggerOnce>
              <span className={styles.preheader}>
                Mitä Digiaalto
                <br /> Tekee?
              </span>
            </Fade>
            <h1 className={styles.header}>
              Kestävät kotisivut yritykselle mittavalla laatutestauksella.
            </h1>
          </div>
        </Fade>
        <Fade fraction={0.2} delay={200} direction="right" triggerOnce>
          <div className={styles.textWrapper}>
            <p>
              Digiaallon suunnittelu ja kehityspalveluun sisältyy kaikki
              laadukkaan nettisivun valmistusvaiheet alusta loppuun.
              Haluamillasi ominaisuuksilla ja integroinneilla.
            </p>
            <p>
              Valitse kilpailijoitasi kehittyneempi kehitysarkkitehtuuri ja
              hyödy rakenteellisesta kilpailuedusta nopeasti kasvavassa
              verkkokilpailussa.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Palvelut
