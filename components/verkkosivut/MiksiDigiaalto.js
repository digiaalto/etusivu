import styles from "./MiksiDigiaalto.module.sass"
import Image from "next/image"
import { IoIosWarning } from "react-icons/io"

const MiksiDigiaalto = () => {
  return (
    <section className={styles.section} id="miksi-digiaalto">
      <div className={styles.column}>
        <h2 className={styles.header}>Miksi Digiaalto?</h2>
        <div className="divider divider-secondary" />
        <p>
          Digiaalto käyttää digijättien suosimaa modernia teknologiaa joka on
          skaalautuva, turvallinen, suorituskykyinen ja kestää ajan koettelun;
          kaikki tämä kilpailukykyiseen hintaan.
        </p>
        <p>
          Jokainen Digiaallon verkkosivu laatutestataan Googlen kehittämällä
          laatutestillä ja sinulle toimitetaan tulosraportti josta ilmenee
          helposti ymmärrettävät pistetulokset kuinka hyvin mikäkin verkkosivun
          ominaisuus on toteutettu.
        </p>
      </div>
      <div className={styles.lighthouseWrapper}>
        <a
          href="https://web.dev/measure/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={"/images/lighthouse.svg"}
            layout="intrinsic"
            width={400}
            height={400}
            alt="Lighthouse Link"
          />
        </a>
        <p>
          <IoIosWarning />
          Testauta verkkosivuja itse, käytä kokonaista domainia (kopioi
          osoiteriviltä).
          <br /> Tulokset ovat englanniksi.
        </p>
      </div>
    </section>
  )
}

export default MiksiDigiaalto
