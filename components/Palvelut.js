import styles from "../styles/Palvelut.module.sass"
import Button from "./utility/Button"
import { Fade } from "react-awesome-reveal"
import { BiArrowToBottom } from "react-icons/bi"
import Link from "next/link"

const Palvelut = (props) => {
  const { refs } = props

  return (
    <section className={styles.section} id="mita-digiaalto-tekee" ref={refs}>
      <div className={styles.content}>
        <Fade direction="left" triggerOnce>
          <div className={styles.headers}>
            <Fade delay={200} direction="left" triggerOnce>
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
        <Fade direction="right" triggerOnce>
          <div className={styles.textWrapper}>
            <p>
              Yrityssivujen suunnittelupalvelu mihin sisältyy kaikki laadukkaan
              nettisivun kehitysvaiheet alusta loppuun. Haluamillasi
              ominaisuuksilla ja lisäpalvelu integroinneilla.
            </p>
            <p>
              Valitse kilpailijoitasi kehittyneempi kehitysarkkitehtuuri ja
              hyödy rakenteellisesta kilpailuedusta nopeasti kasvavassa
              verkkokilpailussa.
            </p>
            <Fade delay={800} direction="up">
              <Link href="/#hankintaprosessi">
                <a>
                  <BiArrowToBottom className={styles.directionIcon} />
                </a>
              </Link>
            </Fade>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Palvelut
