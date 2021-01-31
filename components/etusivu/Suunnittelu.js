import styles from "./Suunnittelu.module.sass"
import StepIndicator from "../common/StepIndicator"
import Overline from "../common/Overline"
import Image from "next/image"

const Suunnittelu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="suunnittelu">
      <Overline
        text="Miten työt etenee"
        customStyle={{ textAlign: "center" }}
      />
      <StepIndicator
        overline="Suunnittelu"
        header="Web-designista tuloksiin."
        first
      />
      <div className={styles.column}>
        <p>
          Hyvin suunniteltu kotisivu luo vaikutelman joka saa vierailijan
          jatkamaan selailua ja oppimaan yrityksestä ja kiinnostumaan
          palveluistasi. Huonosti suunnitteltu sivusto saa heidät poistumaan
          ennenaikaisesti ja kääntymään kilpailijan puoleen.
        </p>
        <p>
          Jotta suunnittelu tuottaa hedelmää kuuluu meidän ensitöiksi määritellä
          haastattelussa mahdollisimman tarkasti projektisi tavoitteet, brändisi
          vahvuudet, ja unelma-asiakkaasi, eli tärkein kohderyhmä jolle sisältö
          suunnataan.
        </p>
      </div>
      <div className={styles.column}>
        <div className={styles.imgWrapper}>
          <Image
            src="/images/creation/suunnittelu.svg"
            layout="intrinsic"
            width="500"
            height="500"
            alt="Verkkosivun suunnittelu"
            className={styles.image}
          />
        </div>
        <ul className={styles.list}>
          <li>
            <h2 className={styles.listHeader}>Vuorovaikutussuunnittelu</h2>
            <p>
              Luodaan positiivinen keskustelu verkkosivusi ja asiakkaasi välille
              loogisella sivukartalla, tarkoituksenmukaisella käyttäjävirralla
              ja hyödyllisellä tietohierarkialla.
            </p>
          </li>
          <li>
            <h2 className={styles.listHeader}>Tyylisuunnittelu</h2>
            <p>
              Suunnitellaan sivustolle brändisi mukainen tyylikollaasi. Valitaan
              sopiva typografia, kuvat, väripaletti ja luodaan pieniä mutta
              uudelleenkäytettäviä sivuelementtejä.
            </p>
          </li>
          <li>
            <h2 className={styles.listHeader}>Sisältösuunnittelu</h2>
            <p>
              Vakuuttava yrityssivu tarvitsee tuloksia tuottavaa tekstiä joka
              puhuttelee juuri sinun unelma-asiakastasi. Sisältö on loistava
              paikka korostaa avainsanoja luonnollisella, osuvalla tavalla ja
              auttaa hakukoneita ja asiakkaita valitsemaan sinut.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Suunnittelu
