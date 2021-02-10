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
  scores: {
    suorituskyky: 100,
    esteettomyys: 100,
    parhaatKaytannot: 100,
    seo: 100,
  },
  header: "Digiaalto.fi",
  paragraphs: [
    `Digiaalto suunnittelee ja kehittää mukavakäyttöisiä yrityssivuja.`,
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
  scores: {
    suorituskyky: 91,
    esteettomyys: 94,
    parhaatKaytannot: 100,
    seo: 100,
  },
  header: "Majoitusroosa.fi",
  paragraphs: [
    `Kanta-hämeen Lammin kauniissa luonossa sijaitse majoitsualan yritys.`,
  ],
}

const Nayteikkuna = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="viimeisimmat-tyot">
      <div className={styles.content}>
        <Overline text="Vieritä ikkunoita" />
        <h1 className="headerMain">Viimeisimmät työt.</h1>
        <div className={styles.naytteetWrap}>
          <Tyonayte {...digiaalto} />
          <Tyonayte {...majoitusroosa} inverted={true} />
        </div>
      </div>
    </section>
  )
}

export default Nayteikkuna
