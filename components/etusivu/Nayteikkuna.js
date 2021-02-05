import styles from "./Nayteikkuna.module.sass"
import Tyonayte from "../common/Tyonayte"
import Overline from "../common/Overline"

const desktopDivider = 4
const mobileDivider = 3

const digiaalto = {
  imgData: {
    desktop: {
      src: "/images/tyonayte/digiaalto/desktop.png",
      alt: "Työnäyte - Digiaalto, PC",
      width: 1920 / desktopDivider,
      height: 3792 / desktopDivider,
    },
    mobile: {
      src: "/images/tyonayte/digiaalto/mobile.png",
      alt: "Työnäyte - Digiaalto, Mobiili",
      width: 411 / mobileDivider,
      height: 5212 / mobileDivider,
    },
  },
  scoreSrc: "/images/tyonayte/digiaalto/scores.png",
  scores: [100, 100, 100, 100],
  header: "Digiaalto.fi",
  paragraphs: [
    `Verkkosuunnittelija verkkokehittäjä Digiaalto kehittää suorituskykyisiä sivustoja edistyneemmällä arkkitehtuurilla.`,
  ],
}

const majoitusroosa = {
  imgData: {
    desktop: {
      src: "/images/tyonayte/majoitusroosa/desktop.png",
      alt: "Työnäyte - Majoitusroosa, PC",
      width: 1920 / desktopDivider,
      height: 6174 / desktopDivider,
    },
    mobile: {
      src: "/images/tyonayte/majoitusroosa/mobile.png",
      alt: "Työnäyte - Majoitusroosa, Mobiili",
      width: 411 / mobileDivider,
      height: 8533 / mobileDivider,
    },
  },
  scoreSrc: "/images/tyonayte/majoitusroosa/scores.png",
  scores: [79, 94, 100, 100],
  header: "Majoitusroosa.fi",
  paragraphs: [
    `Majoitusalan yritys Kanta-hämeen Lammin kauniissa luonossa. Varattavissa isommille ryhmille.`,
  ],
}

const Nayteikkuna = (props) => {
  const { refs } = props
  return (
    <section
      className={styles.section}
      ref={refs}
      id="viimeisimmat-tyonaytteet"
    >
      <div className={styles.content}>
        <Overline text="Vieritä ikkunoita" />
        <h1 className="headerMain">Viimeisimmät työnäytteet.</h1>
        <div className={styles.naytteetWrap}>
          <Tyonayte {...digiaalto} />
          <Tyonayte {...majoitusroosa} inverted={true} />
        </div>
      </div>
    </section>
  )
}

export default Nayteikkuna
