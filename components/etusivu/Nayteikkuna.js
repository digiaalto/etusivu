import styles from "./Nayteikkuna.module.sass"
import Tyonayte from "../common/Tyonayte"

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
    `Web-designer ja verkkokehittäjä Digiaalto rakentaa huipputehokkaita ja kestäviä verkkosivuja pk-yrittäjille.`,
    `Tarjontaan kuuluu blogeja, verkkokauppoja, verkkosivuja, web-appeja ja sisältöpalveluita.`,
    `Digiaallon palvelut sopivat yhteen yrittäjän kanssa, kuka etsii kestäviä verkkosivuja ilman piilokustannuksia.`,
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
    `Majoitusalan yritys Kanta-Hämeessä. Varattavissa pääsääntöisesti isomille ryhmille kuten seurakunnille ja muille tapahtumille.`,
    `Sivustossa esitellään maisemia, patikkapolkuja, kotoja, rantaa, rakennuksen yksityishuoneita ja oleskelutiloja isoilla kuvilla.`,
    `Roosalta saa myös mielekkeitä sesonki- ja ryhmätarjouksia.`,
  ],
}

const Nayteikkuna = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="tyonaytteet">
      <div className={styles.headers}>
        <h3 className={styles.header}>Viimeisimmät työt.</h3>
        <span className={styles.help}>Vieritä näyteikkunaa.</span>
      </div>
      <div className={styles.naytteet}>
        <Tyonayte {...digiaalto} />
        <Tyonayte {...majoitusroosa} inverted={true} />
      </div>
    </section>
  )
}

export default Nayteikkuna
