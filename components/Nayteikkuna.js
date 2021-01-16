import styles from "../styles/Nayteikkuna.module.sass"
import Tyonayte from "./common/Tyonayte"

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
  palette: ["#007CF0", "#ffffff", "#00122A", "#1e272e"],
  scoreSrc: "/tyonayte/digiaalto/scores.png",
  header: "Digiaalto",
  paragraphs: [
    `Supertehokkaita ja kehittyneitä verkkosivuja yrittäjille jotka eivät halua verkkosivun hallinan kasvattavan heidän työtaakkaansa.`,
    `Sivuston päätarkoitus on saada vierailija lähettämään tarjouspyynöön tai ottamaan suoraan yhteyttä.`,
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
  palette: ["#d66686", "#eee", "#edebe5", "#222222"],
  scoreSrc: "/tyonayte/majoitusroosa/scores.png",
  header: "Majoitusroosa",
  paragraphs: [
    `Majoitusalan yritys Lammen luonnossa, varattavissa pääsääntöisesti isoille ryhmille.`,
    `Sivuston päätarkoitus on esitellä maisemia ja rakennuksia isoilla kuvilla joiden optimointia hoitaa Gatsbyn kuva-komponentti.`,
    `Vierailijaa kehotetaan tiedustelemaan sesonki- ja ryhmätarjouksista.`,
  ],
}

const Nayteikkuna = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="tyonaytteet">
      <h3 className={styles.header}>Viimeisimmät työt.</h3>
      <div className={styles.naytteet}>
        <Tyonayte {...digiaalto} />
        <Tyonayte {...majoitusroosa} inverted={true} />
      </div>
    </section>
  )
}

export default Nayteikkuna
