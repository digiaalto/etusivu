import styles from "./FAQ.module.sass"
import Accordion from "./Accordion"

const sisalto = [
  {
    button: "Kuinka kauan verkkosivuston valmistus kestää?",
    content: `Riippuen projektin laajuudesta sivusto voi valmistua viikossa tai töihin voi mennä monta kuukautta. Karkeasti sanottuna tavallinen verkkosivu valmistuu alle kuukaudessa. Tarjoamme myös MVP-palvelun, jolloin kiirehdimme markkinoille minimituotteella.`,
  },
  {
    button: "Kuinka paljon tälläiset verkkosivut maksavat?",
    content: `Sivujen hinnat vaihtelevat projektin vaatimusten mukaisesti tuhannesta eurosta kymmeniin tuhansiin. Alustava hinta-arvio esitetään tarjouspyynnön ohella.`,
  },
  {
    button: "Voiko nettisivut oikeasti toimia ilman minkäänlaista ylläpitoa?",
    content:
      "Ei, mutta modernin Jamstack arkkitehtuurin kanssa voimme jättää huoltotyöt niihin erikoistuneille palveluntarjoajille. Kun Nextjs sivusto generoidaan ja potkaistaan käyntiin lähettämällä se palvelulle, ei sen kirjastoihin tarvitse koskea. Kaikki tarvittavat muutokset ja sisältöpäivitykset tapahtuvat Webhookeilla; mutta jos jotain todella epätodennäköistä tapahtuu lupaamme selvittää asian maksutta.",
  },
  {
    button: "Pystynkö itse muuttamaan sivustoni sisältöä?",
    content: `Tietenkin! Integroimme minkä tahansa haluamasi sisällönhallintaohjelmiston sivustoosi "päättömästi", eli ilman turhia ominaisuuksia. Suosittelemme itse käyttämäämme Sanity.io palvelua joka on helppo ja maksuton anteliaaseen rajaan asti. Vaihtoehtoisesti Digiaalto hoitaa muutostyöt puolestasi halvalla.`,
  },
  {
    button: "Pyörisikö sivustoni oikeasti ilman kustannuksia?",
    content: `Digiaalto käyttää kansainvälisesti menestyneitä palveluita jotka pitävät hengissä maailman Internet-infrastruktuurin ilman taukoja. Pienen suomalaisen yrityksen vaatimukset eivät yleensä ylitä edes palveluiden maksurajaa.`,
  },
  {
    button: "Uudistatteko verkkosivuja?",
    content: `Jos verkkosivusi pyörii vanhalla ja huonosti optimoidulla WordPressillä on meidän henkilökohtainen kutsumus auttaa sinua. Ota yhteyttä ja laaditaan sopiva suunnitelma.`,
  },
  {
    button: "Tarjoatteko hosting-palvelua?",
    content: `Meidän palveluun kuuluu kaikkien sivuston tarvitsemien palveluiden hankinta puolestasi. Laskutamme mahdollisista menoista erikseen.`,
  },
  {
    button:
      "Kuinka voit kirjoittaa tekstisisältöä tuntematta yritystäni yhtä intiimisti kuten minä?",
    content: `Emme voi; kukaan ei tunne yritystäsi ja brändiäsi paremmin kuin sinä. Me voimme kuitenkin perustaa kirjoitukset arvokkaisiin tietoihin joita keräämme haastattelemalla sinua, tutkimalla kilpailijoitasi ja perehtymällä toimialaasi.`,
  },
  {
    button: "Voitteko auttaa sosiaalisen mediani kanssa?",
    content:
      "Emme suoranaisesti tarjoa somepalveluita, saatat tarvita markkinointitoimiston. Mutta autamme mielellämme jos pystymme.",
  },
]

const FAQ = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="usein-kysyttya" ref={refs}>
      <div>
        <h3 className={styles.fadedHeader}>Usein kysyttyä — FAQ</h3>
        <Accordion items={sisalto} />
      </div>
    </section>
  )
}

export default FAQ
