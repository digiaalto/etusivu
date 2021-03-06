import styles from "./FAQ.module.sass"
import Accordion from "./Accordion"

const sisalto = [
  {
    button: "Kauanko verkkosivun rakentamiseen kuluu aikaa?",
    content: `Yleisin verkkosivutyyppi valmistuu alle kuukaudessa. Aikakriittisissä tilanteissa voimme kiirehtiä markkinoille minimituotteella.`,
  },
  {
    button: "Paljonko maksaa?",
    content: `Hinnat vaihtelevat projektin vaatimusten mukaisesti noin tuhannesta eurosta kymmeneen tuhanteen. Voit katsoa projektillesi alustavan hinta-arvioita tarjouspyynnön ohella.`,
  },
  {
    button: "Mitä tarkoittaa 100% tyytyväisyystakuu?",
    content: `Iteroimme designia palautteenne mukaisesti kunnes hyväksytte työnjäljen, mutta korkeintaan kolme kertaa, tai emme veloita mitään. Emme kuitenkaan myy mitään ilman vastinetta, jos otatte materiaalia käyttöön laskutamme siltä osin.`,
  },
  {
    button: "Voiko yrityssivut toimia ilman minkäänlaista ylläpitoa?",
    content: `Ei, mutta modernin Jamstack-arkkitehtuurin kanssa voimme jättää huoltotyöt niihin erikoistuneille palveluntarjoajille.`,
  },
  {
    button: "Toimiiko sivustoni ilman palvelukustannuksia?",
    content: `Tavallisen suomalaisen yrityksen palvelinvaatimukset eivät yleensä ylitä käyttämiemme palveluntarjoajien maksurajoja. Vaatimusten mukaisesti kustannukset voivat olla nollasta eurosta pariin kymppiin.`,
  },
  {
    button:
      "Mitä jos minulla on jo verkkosivut ja haluan uudistaa tai muuttaa niitä?",
    content: `Ota yhteyttä ja katsotaan mitä on tehtävissä. Tuskin joudumme aloittamaan tyhjältä pöydältä.`,
  },
  {
    button: `Kuinka Digiaalto kirjoittaa sisältöä tuntematta yritystäni kuin minä?`,
    content: `Keräämme tärkeimmät tiedot ennen sisällöntuottoa, voit itse vaikuttaa tekstin laatuun ohjeistuksella tai kirjoittaa/editoida tekstit itse.`,
  },
  {
    button: "Voiko Digiaalto auttaa sosiaalisen mediani kanssa?",
    content: `Emme ole markkinointitoimisto, rakentamamme sivustot ovat yhteensopiva kaikkien some-alustojen kanssa oikeilla meta-tägeillä.`,
  },
]

const FAQ = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="usein-kysyttya" ref={refs}>
      <h3 className={styles.header}>Usein kysyttyä — FAQ</h3>
      <Accordion items={sisalto} />
    </section>
  )
}

export default FAQ
