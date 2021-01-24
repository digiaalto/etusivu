import styles from "./Suunnittelu.module.sass"
import StepIndicator from "../common/StepIndicator"
import Overline from "../common/Overline"
import Image from "next/image"

const Suunnittelu = () => {
  return (
    <section className={styles.suunnittelu}>
      <Overline text="Miten hommat etenee" />
      <StepIndicator
        overline="Suunnittelu"
        header="UX & UI -designista tuloksiin."
        first
      />
      <div className={styles.column}>
        <p>
          Hyvin suunniteltu sivusto luo vaikutelman joka saa asiakkaan pysymään
          sivullasi ja oppimaan yrityksestäsi. Huonosti suunnitteltu sivusto saa
          heidät poistumaan ennenaikaisesti ja kääntymään kilpailijan puoleen.
        </p>
        <p>
          Jotta suunnittelu onnistuisi tarvitsee meidän ensitöiksi määritellä
          mahdollisimman tarkasti projektisi tavoitteet, brändisi vahvuudet, ja
          sivuston tärkein kohderyhmä kenelle sisältö suunnataan brändisi
          sopivalla tavalla.
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
              Luodaan positiivinen keskustelu ihmisen ja tietokoneen välille
              valmistamalla looginen sivukartta, tarkoituksenmukainen
              käyttäjävirta ja hyödyllinen tietohierarkia.
            </p>
          </li>
          <li>
            <h2 className={styles.listHeader}>Tyylisuunnittelu</h2>
            <p>
              Luodaan haluttua tunnelmaa edustava tyylikollaasi, mihin lisätään
              typografia, kuvia, väripaletti ja muita pienempiä sivuston
              elementtejä.
            </p>
          </li>
          <li>
            <h2 className={styles.listHeader}>Sisältösuunnittelu</h2>
            <p>
              Kirjoitetaan asiakasta puhuttelevaa tekstiä millä saadaan heidät
              tekemään tarvittavia toimia sivuston tavoitteiden saavuttamiseksi.
            </p>
          </li>
          <li>
            <h2 className={styles.listHeader}>Mallintaminen</h2>
            <p>
              Piirretään valmista verkkosivustoa vastaava visuaalinen malli joka
              rakennetaan vuorovaikutussuunnitelman määritelmien mukaisesti,
              tyylikkäillä elementeillä jotka pakataan sisällöllä.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Suunnittelu
