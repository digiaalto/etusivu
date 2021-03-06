import styles from "./FAQ.module.sass"
import Accordion from "./Accordion"

const sisalto = [
  {
    button: "Kauanko verkkosivun rakentamiseen kuluu aikaa menee?",
    content: `Riippuen projektin laajuudesta sivusto voi valmistua viikossa tai töihin voi mennä monta kuukautta. Yleinen verkkosivu valmistuu alle kuukaudessa. Aikakriittisissä tilanteissa voimme kiirehtiä markkinoille minimituotteella.`,
  },
  {
    button: "Paljon verkkosivut maksavat?",
    content: `Sivujen hinnat vaihtelevat projektin vaatimusten mukaisesti noin tuhannesta eurosta kymmeneen tuhanteen. Voit katsoa projektillesi alustavan hinta-arvioita tarjouspyynnön ohella ja tarkemman vastauksen saat lähettämällä pyynnön.`,
  },
  {
    button: "Voiko kotisivut toimia ilman minkäänlaista ylläpitoa?",
    content: `Ei, mutta modernin JAMStack arkkitehtuurin kanssa voimme jättää huoltotyöt niihin erikoistuneille palveluntarjoajille. Harva asia voi mennä rikki hybrid-sivustossa mikä generoidaan staattiseksi kokonaisuudeksi.`,
  },
  {
    button: "Toimiiko sivustoni ilman palvelukustannuksia?",
    content: `Tavallisen suomalaisen yrityksen palvelinvaatimukset eivät yleensä ylitä käyttämiemme palveluntarjoajien maksurajoja. Vastaus vaihtelee vaatimusten mukaisesti.`,
  },
  {
    button: "Uudistatteko vanhoja verkkosivuja?",
    content: `Jos verkkosivusi vetelee viimeisiään vanhalla ja huonosti optimoidulla järjestelmällä autamme varmasti. Ota yhteyttä ja laaditaan sopiva lähestymistapa.`,
  },
  {
    button: `Kuinka Digiaalto kirjoittaa tekstisisältöä tuntematta yritystäni yhtä intiimisti kuin minä?`,
    content: `Kukaan ei tunne yritystäsi ja brändiäsi paremmin kuin sinä, tästä syystä keräämme tärkeimmät tiedot ennen suunnittelua tai sisällöntuottoa.`,
  },
  {
    button: "Voitteko auttaa sosiaalisen mediani kanssa?",
    content: `Emme ole markkinointitoimisto, mutta pidämme huolen että sivustonne on yhteensopiva kaikkien some-alustojen kanssa oikeilla meta-tägeillä.`,
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
