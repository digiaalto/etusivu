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
            <h2 className={styles.header}>
              Uusi tekniikka <br />— React & Next.
            </h2>
          </div>
        </Fade>
        <Fade {...animCfg.text}>
          <p>
            React ja Nextjs perustuvat Jamstack arkkitehtuuriin joka on
            tavanomaisesti ollut vain isojen digijättien ulottuvissa.
          </p>
          <p>
            Digiaallon tarkoitus on tuoda nämä kehittyneet verkkoratkaisut
            kaikille jotka haluavat asiakkailleen turvallisempaa ja mukavampaa
            käyttökokemusta ja itselleen vaivatonta, kustannustehokasta
            sivustonhallintaa.
          </p>
          <p>
            Enään ei puhuta web-hotelleista tai palvelimista ollenkaan, koska
            voimme abstraktoida kaikki palvelintuotteet kolmannen osapuolen
            palveluille, edullisesti, jopa veloituksetta.
          </p>
          <p>
            Jos et ole varma onko Digiaallon hybrid-verkkosivu paras vaihtoehto
            seuraavaan projektiisi ota yhteyttä ja selvitetään asia —{" "}
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
