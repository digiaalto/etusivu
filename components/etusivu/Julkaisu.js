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
        Optimoimme ja laatutestaamme sivustosi viimeisen kerran ja lähetämme sen
        globaaliin sisällönjulkaisuverkkoon. Saat sähköpostiohjeet sivuston
        käytöstä ja muista mahdollisista mikropalveluista. Asiakaspalvelulinjat
        pysyvät auki jos jokin jää mietityttämään.
      </p>
      <p className={styles.description}>
        Sivusto ei vaadi päivityksiä tai ylläpitotoimia, sillä uudenaikainen
        kehitysarkkitehtuuri takaa hybrid-verkkosivuston pitkäikäisen toiminnan
        inkrementaalisella staattisella regeneroinnilla.
      </p>
      <div className={styles.plans}>
        <ServicePlan
          header="Hakukonetarkistus"
          text="Varmistamme julkaisun jälkeen että SEO-strategiamme on ohjannut sivustolle orgaanista liikennettä. Analysoimme Google hakukonsolin tuloksia ja tarvittaessa asetamme uudet avainsanat."
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
          header="Sisällönhallintaohjelma"
          text="Integroimme verkkosivuun suosittelemamme tai haluamasi sisällönhallintaohjelman millä pystyt itsenäisesti muuttamaan ennaltamäärättyjä kohtia, kirjoittamaan blogeja, uutisia ja muuta dynaamista sisältöä."
          price="320€"
          image={
            <Image
              src="/images/creation/cms.svg"
              layout="responsive"
              width="200"
              height="200"
            />
          }
        />
        <ServicePlan
          header="Sisällönhallintapalvelu"
          text="Tarjoamme kertahintaista sisällönmuutospalvelua pk-yrittäjille jotka eivät ennusta tarvitsevansa laajamittaista sisällönhallintaa. Sopii pieniin satunnaisiin muutostarpeisiin, kuten yhteystietojen, aukioloaikojen ja hintojen vaihtumisiin."
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
