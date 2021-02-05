import styles from "./Suunnittelu.module.sass"
import StepIndicator from "../common/StepIndicator"
import Overline from "../common/Overline"

const Suunnittelu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="suunnittelu">
      <Overline text="Prosessi" customStyle={{ textAlign: "center" }} />
      <StepIndicator
        overline="Suunnittelu"
        header="Ilman ideaa ei ole mitään."
        first
      />
      <div className={styles.descriptions}>
        <p className="headerDescription">
          Onko sinulla oma visio sivullesi, tunnetko brändisi hyvin? Löytyykö
          vanhoja verkkosivuja josta voimme jäsentää resursseja ja sisältöä, vai
          aloitammeko tyhjältä pöydältä? Jokatapauksessa ensitöiksi
          määrittelemme mahdollisimman tarkasti kuka olet, mitä teet, kuka
          asiakkaasi on ja mitä hän haluaa.
        </p>
      </div>
      <ol className={styles.list}>
        <li>
          <h2 className={styles.listHeader}>1. Vuorovaikutus</h2>
          <p>
            Luodaan positiivinen keskustelu verkkosivusi ja asiakkaasi välille
            loogisella sivukartalla, tarkoituksenmukaisella käyttäjävirralla ja
            hyödyllisellä tietohierarkialla.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>2. Tyyli</h2>
          <p>
            Suunnitellaan sivustolle brändisi mukainen tyylikollaasi. Valitaan
            sopiva typografia, kuvat, väripaletti ja luodaan pieniä mutta
            uudelleenkäytettäviä sivuelementtejä.
          </p>
        </li>
        <li>
          <h2 className={styles.listHeader}>3. Sisältö</h2>
          <p>
            Vakuuttava yrityssivu tarvitsee tuloksia tuottavaa tekstiä joka
            puhuttelee juuri sinun unelma-asiakastasi. Sisältö on loistava
            paikka korostaa avainsanoja luonnollisella, osuvalla tavalla ja
            auttaa hakukoneita ja asiakkaita valitsemaan sinut.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Suunnittelu
