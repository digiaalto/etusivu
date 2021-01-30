import styles from "./Julkaisu.module.sass"
import StepIndicator from "../common/StepIndicator"
import ServicePlan from "../common/ServicePlan"
import Image from "next/image"
import { LinkButton } from "../common/button"

const Julkaisu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="julkaisu">
      <StepIndicator overline="Julkaisu" header="D-day." third />
      <p className={styles.description}>
        Optimoimme ja lähetämme kaikki sivustomme globaaliin
        sisällönjulkaisuverkkoon joka skaalautuu kävijöiden mukaisesti. Saat
        sähköpostiohjeet sivuston käytöstä, sekä muista käyttöönotetuista
        mikropalveluista. Pidämme myös asiakaspalvelulinjat ikuisesti auki.
      </p>
      <p className={styles.description}>
        Sivustomme ovat rakennettu pyörimään pitkäikäisesti ilman häiriöitä,
        jotta asiakkaamme voivat keskittyä yrityksensä toimintaan
        sataprosenttisesti.
      </p>
      <h2 className={styles.lisapalvelutHeader}>
        Julkaistun jälkeiset lisäpalvelut.
      </h2>
      <div className={styles.plans}>
        <ServicePlan
          header="Hakukonetarkistus"
          text="Varmistamme että sivustosi on napannut vierailijoita orgaanisesti. Analysoimme Google hakukonsolin arvoja ja optimoimme avainsanat."
          price="80€"
          image={
            <Image
              src="/images/creation/seo.svg"
              layout="responsive"
              width="200"
              height="200"
            />
          }
        />
        <ServicePlan
          header="Sisällönhallintapalvelu"
          text="Kertahintainen sisällönmuutospalvelu pk-yrittäjille jotka eivät ennusta tarvitsevansa laajamittaista sisällönhallintaa. Sopii pieniin satunnaisiin muutostarpeisiin, kuten yhteystietojen, aukioloaikojen ja hintojen vaihtumisiin."
          price="25€"
          image={
            <Image
              src="/images/creation/muutospalvelu.svg"
              layout="responsive"
              width="200"
              height="200"
            />
          }
        />
      </div>
      <LinkButton
        href="/tarjouspyynto"
        text="Tee tarjouspyyntö"
        customClass={styles.ctaButton}
      />
    </section>
  )
}

export default Julkaisu
