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
      height: 6117 / desktopDivider,
    },
    mobile: {
      src: "/images/tyonayte/digiaalto/mobile.png",
      alt: "Työnäyte - Digiaalto, Mobiili",
      width: 375 / mobileDivider,
      height: 6882 / mobileDivider,
    },
  },
  scores: {
    suorituskyky: 90,
    esteettomyys: 100,
    parhaatKaytannot: 100,
    seo: 100,
  },
  header: "Digiaalto",
  paragraphs: [
    `Digiaalto kehittää tuloksia tuottavia verkkosivuja ja web-appeja järjestöille ja yrittäjille.`,
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
      width: 375 / mobileDivider,
      height: 8552 / mobileDivider,
    },
  },
  scores: {
    suorituskyky: 91,
    esteettomyys: 94,
    parhaatKaytannot: 100,
    seo: 100,
  },
  header: "Majoitusroosa",
  paragraphs: [
    `Kanta-Hämeen Lammen luonnossa majoituspaikka isoille ryhmille. Englanniksi ja suomeksi.`,
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
          <Tyonayte {...majoitusroosa} />
          <Tyonayte {...digiaalto} />
        </div>
      </div>
    </section>
  )
}

export default Nayteikkuna
