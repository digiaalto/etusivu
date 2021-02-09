import styles from "./FAQ.module.sass"
import Accordion from "./Accordion"

const sisalto = [
  {
    button: "Kauanko verkkosivun valmistukseen menee?",
    content: `Riippuen projektin laajuudesta sivusto voi valmistua viikossa tai töihin voi mennä monta kuukautta. Yleinen verkkosivu valmistuu alle kuukaudessa. Aikakriittisissä tilanteissa voimme kiirehtiä markkinoille minimituotteella.`,
  },
  {
    button: "Paljon tälläiset verkkosivut maksavat?",
    content: `Sivujen hinnat vaihtelevat projektin vaatimusten mukaisesti noin tuhannesta eurosta kymmeneen tuhanteen. Voit katsoa alustavia hinta-arvioita tarjouspyynnön ohella.`,
  },
  {
    button: "Voiko hybrid-sivustot toimia ilman minkäänlaista ylläpitoa?",
    content: `Ei, mutta modernin Jamstack arkkitehtuurin kanssa voimme jättää huoltotyöt niihin erikoistuneille palveluntarjoajille. Harva asia voi mennä rikki hybrid-sivustossa mikä generoidaan etukäteen.`,
  },
  {
    button: "Toimiiko sivustoni ilman palvelukustannuksia?",
    content: `Digiaalto käyttää kansainvälisesti menestyneitä palveluita jotka pitävät hengissä ison osan maailman internet-infrastruktuuria ilman taukoja. Pienen suomalaisen yrityksen vaatimukset eivät yleensä ylitä edes maksurajaa.`,
  },
  {
    button: "Uudistatteko verkkosivuja?",
    content: `Jos verkkosivusi pyörii vanhalla ja huonosti optimoidulla WordPressillä on meidän henkilökohtainen kutsumus auttaa sinua. Ota yhteyttä ja laaditaan sopiva lähestymistapa.`,
  },
  {
    button: "Tarjoatteko hosting-palvelua?",
    content: `Teemme kaikki tarpeelliset palvelutilit puolestanne.`,
  },
  {
    button: `Kuinka voit kirjoittaa tekstisisältöä tuntematta yritystäni yhtä intiimisti kuten minä?`,
    content: `Kukaan ei tunne yritystäsi ja brändiäsi paremmin kuin sinä. Tästä syystä haastattelemme teitä ja perehdymme toimialaasi.`,
  },
  {
    button: "Voitteko auttaa sosiaalisen mediani kanssa?",
    content: `Emme ole markkinointitoimisto. Mutta, pidämme huolen että sivustonne on yhteensopiva kaikkien some-alustojen kanssa meta-tägeillä.`,
  },
]

const FAQ = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="usein-kysyttya" ref={refs}>
      <div>
        <h3 className={styles.header}>Usein kysyttyä — FAQ</h3>
        <Accordion items={sisalto} />
      </div>
    </section>
  )
}

export default FAQ
