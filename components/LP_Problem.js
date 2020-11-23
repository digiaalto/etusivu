import styles from "../styles/LP_Problem.module.sass"
import { Fade } from "react-awesome-reveal"
import Button from "./utility/Button"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="ongelmallisia-verkkosivuja">
      <div className={styles.content}>
        <Fade direction="up" triggerOnce>
          <div className={styles.headerWrapper}>
            <span className={styles.preheader}>Ongelma</span>
            <h2 className={styles.header}>
              Yrittäjän elämä on liian kiireistä verkkosivujen laadunvalvontaan.
            </h2>
          </div>
          <div className={styles.textContainer}>
            <div>
              <p>
                Kaikki yritykset tarvitsevat laadukkaan nettisivun joka löytyy
                hakukoneesta, on käyttäjäystävällinen, latautuu heti, toimii
                responsiivisesti eri laitteilla ja edustaa somessa
                positiivisesti.
              </p>
              <p>
                Myös tekstisisällön pitäisi puhutella oikeata kohderyhmää
                varsinkin nyt, kun kilpailu asiakkaiden huomiosta koventuu hetki
                hetkeltä.
              </p>
            </div>
            <div>
              <p>
                Yrittäjänä harvoin on aikaa seurata kaikkea sitä kehitystyötä ja
                suunnittelua, ainakaan niin tarkasti kuin haluaisi.
              </p>
              <p>
                Siksi Google on kehittänyt laatutestin joka auditoi verkkosivuja
                ja raportoi niiden toteutuksen onnistumisen yksinkertaisilla
                pistetuloksilla.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LP_Problem

/**

  Digiaalto on erikoistunut staattisen verkkosivujen suunnitteluun ja
  kehittämiseen nopealla ja skaalautuvalla teknologia-stackillä, jolla
  saa kovat pisteet Googlen kehittämältä laatutestiltä. Wordpress
  perusmätöllä ei näihin tuloksiin päästä.

*/
