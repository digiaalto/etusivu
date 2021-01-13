import styles from "./MiksiDigiaalto.module.sass"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { LinkButton } from "../common/button"

const animCfg = {
  image: {
    triggerOnce: true,
  },
  text: {
    direction: "up",
    damping: 0.1,
    cascade: true,
    triggerOnce: true,
  },
}

const MiksiDigiaalto = () => {
  return (
    <section className={styles.section} id="miksi-digiaalto">
      <div className={styles.column}>
        <Fade {...animCfg.text}>
          <h2 className={styles.header}>Miksi Digiaalto?</h2>
          <h3 className="subheader">
            Digiaallon hybrid-verkkosivut ovat tavallisia verkkosivuja
            suorituskykyisempiä, turvallisempia ja kestävät ajan koettelua ilman
            erityisiä ylläpitotoimia.
          </h3>
          <p>
            React-pohjaiset Next.js sivustot ovat tavanomaisesti olleet vain
            isojen digijättien ulottuvissa. Digiaallon tehtävä on tuoda nämä
            kilpailuetua tarjoavat teknologiat kaikille jotka haluavat
            asiakkailleen parempaa käyttökokemusta verkossa ja itselleen
            vaivattomampaa sivustonhallintaa.
          </p>
          <p>
            Nykyaikainen web-kehitys suosii myös valinnanvapautta. Sen sijaan
            että olisimme lukossa jossain ennaltamäärätyssä
            ohjelmistoekosysteemissä, voimme valita kaikista vaihtoehdoista
            projektimme tavoitteita parhaiten tukevat integraatiot. Voimme
            esimerkikisi käyttää mitä tahansa sisällönhallintaohjelmaa{" "}
            <i>päättömästi</i>.
          </p>
          <p>
            Digiaalto laatutestaa Google Lighthousella josta jää käteen helposti
            ymmärrettävät pistetulokset. Lighthouse toimii kehityvaiheessa myös
            erittäin arvokkaana ohjenuorana jota seuraamalla saavutetaan mm.
            paras mahdollinen teknillinen hakukoneoptimointi ja web-standardien
            toteutus.
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
            text="Testaa sivuja"
            external={true}
            customStyle={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
          <small>
            Käytä täydellistä apex-verkkotunnusta. (esim. https://digiaalto.fi/)
          </small>
        </Fade>
      </div>
    </section>
  )
}

export default MiksiDigiaalto
