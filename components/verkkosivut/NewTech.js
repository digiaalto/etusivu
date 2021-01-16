import styles from "./NewTech.module.sass"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { LinkButton } from "../common/button"
import Link from "next/link"

const animCfg = {
  image: {
    triggerOnce: true,
  },
  header: {
    direction: "up",
    triggerOnce: true,
  },
  text: {
    direction: "up",
    damping: 0.1,
    cascade: true,
    triggerOnce: true,
  },
}

const NewTech = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="uusi-tekniikka" ref={refs}>
      <div className={styles.column}>
        <Fade {...animCfg.header}>
          <div>
            <h2 className={styles.header}>Uusi tekniikka — React & Next.</h2>
            <h3 className={styles.subheader}>
              Digiaalto ei rakenna vain verkkosivustoja. Tarjoamme tarkasti
              ajateltua suunnittelua, kilpailijoita kovempaa teknologiaa ja
              tinkimätöntä palvelua.
            </h3>
          </div>
        </Fade>
        <Fade {...animCfg.text}>
          <p>
            Jamstack arkkitehtuuri on tavanomaisesti ollut vain isojen
            digijättien ulottuvissa. Meidän tehtävä on tuoda nämä kilpailuetua
            tarjoavat teknologiat kaikille jotka haluavat asiakkailleen parempaa
            käyttökokemusta verkossa ja itselleen vaivattomampaa
            sivustonhallintaa.
          </p>
          <p>
            Enään ei puhuta web-hotelleista tai palvelimista ollenkaan, koska
            voimme abstraktoida kaikki palvelintuotteet kolmannen osapuolen
            palveluille, edullisesti, useasti jopa ilmaiseksi. Tämä verkkosivu
            toimii täysin ilman vuosikustannuksia.
          </p>
          <p>
            Jos et ole varma onko Digiaallon hybrid-verkkosivut paras vaihtoehto
            seuraavaan projektiisi voimme auttaa —{" "}
            <Link href="/verkkosivut#tarjouspyynto">
              <a>aloita keskustelu.</a>
            </Link>
          </p>
        </Fade>
      </div>
      <div className={`${styles.column} ${styles.lighthouse}`}>
        <Fade {...animCfg.image}>
          <Image
            src={"/images/lighthouse.svg"}
            layout="intrinsic"
            width={400}
            height={400}
            alt="Lighthouse Link"
          />
          <LinkButton
            href="https://web.dev/measure/"
            text="Vertaile sivuja"
            external={true}
            primary
            customStyle={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
          <span className={styles.lighthouseHelp}>
            Käytä täydellistä apex-verkkotunnusta. (esim. https://digiaalto.fi/)
          </span>
        </Fade>
      </div>
    </section>
  )
}

export default NewTech
