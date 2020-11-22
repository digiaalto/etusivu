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
              Yrittäjän elämä on kiireistä, silti arvokasta aikaa pitää käyttää
              verkkosivujen hankintaan.
            </h2>
          </div>
          <div className={styles.pWrapper}>
            <p>
              Laatu tarkoittaa sivua joka löytyy hakukoneesta, on
              käyttäjäystävällinen, latautuu heti, toimii responsiivisesti eri
              laitteilla ja näyttää hyvältä somessa. Myös tekstisisällön pitäisi
              puhutella oikeata kohderyhmää varsinkin tulevina korona-aikoina.
            </p>
            <div>
              <p>
                Valtaosa Suomen verkkotekijöistä jälleenmyy Wordpress-alustaa
                vastauksena jokaiseen edellämainittuun haasteeseen, ja on tehnyt
                niin lähes 20 vuotta. Valitettavasti tämä lähes aina tarkoittaa
                kuluneita valmisteemoja, ulkoistettua koodia ja vanhaa
                tekniikkaa johon mikään ajan hermolla surffaava yritys ei
                koskisi edes toisen tietokoneella.
              </p>
              <Button
                href="#huippuluokan-sivut"
                text="Digiaalto hoitaa asiansa toisin."
              />
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
