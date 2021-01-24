import styles from "./Nayteikkuna.module.sass"
import Tyonayte from "../common/Tyonayte"
import Overline from "../common/Overline"

const desktopDivider = 3

const digiaalto = {
  imgData: {
    desktop: {
      src: "/tyonayte/digiaalto/desktop.png",
      alt: "Työnäyte - Digiaalto, PC",
      width: 1920 / desktopDivider,
      height: 3792 / desktopDivider,
    },
    mobile: {
      src: "/tyonayte/digiaalto/mobile.png",
      alt: "Työnäyte - Digiaalto, Mobiili",
      width: 411 / 2,
      height: 5212 / 2,
    },
  },
  scoreSrc: "/tyonayte/digiaalto/scores.png",
  header: "Digiaalto",
  paragraphs: [
    `Web-designer ja verkkokehittäjä Digiaalto rakentaa huipputehokkaita ja kestäviä verkkosivuja pk-yrittäjille.`,
    `Digiaallon palvelut sopivat kiireisille yrittäjille jotka haluavat pitkäikäisen verkkotuotteen.`,
  ],
}

const majoitusroosa = {
  imgData: {
    desktop: {
      src: "/tyonayte/majoitusroosa/desktop.png",
      alt: "Työnäyte - Majoitusroosa, PC",
      width: 1920 / desktopDivider,
      height: 6174 / desktopDivider,
    },
    mobile: {
      src: "/tyonayte/majoitusroosa/mobile.png",
      alt: "Työnäyte - Majoitusroosa, Mobiili",
      width: 411 / 2,
      height: 8533 / 2,
    },
  },
  scoreSrc: "/tyonayte/majoitusroosa/scores.png",
  header: "Majoitusroosa",
  paragraphs: [
    `Lammen kauniissa luonnossa sijaitseva majoitusyrityksen majoitustila joka palvelee pääsääntöisesti seurakuntia, yrityksiä ja muita isoja ryhmiä.`,
    `Roosan sivuilla esitellään rauhallista luontoa ja tarjotaan sesonkitarjouksia.`,
  ],
}

const Nayteikkuna = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="tyonaytteet">
      <div className={styles.headers}>
        <Overline text="Vieritä näyteikkunoita" />
        <h1 className={styles.header}>Uusien yritysten nettisivuja.</h1>
      </div>
      <div className={styles.naytteet}>
        <Tyonayte {...digiaalto} />
        <Tyonayte {...majoitusroosa} inverted={true} />
      </div>
    </section>
  )
}

export default Nayteikkuna
