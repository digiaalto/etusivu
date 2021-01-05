import styles from "../styles/Nayteikkuna.module.sass"
import Tyonayte from "./common/Tyonayte"

const digiaalto = {
  imgData: {
    desktop: {
      src: "/tyonayte/digiaalto/desktop.png",
      alt: "Työnäyte - Digiaalto, PC",
      width: 1920 / 2.5,
      height: 3792 / 2.5,
    },
    mobile: {
      src: "/tyonayte/digiaalto/mobile.png",
      alt: "Työnäyte - Digiaalto, Mobiili",
      width: 411 / 2,
      height: 5212 / 2,
    },
  },
  palette: ["#007CF0", "#ffffff", "#00122A", "#1e272e"],
  header: "Digiaalto",
  paragraph: `Digiaallon suunnittelu- ja kehityspalveluun sisältyy kaikki laadukkaan nettisivun valmistusvaiheet alusta loppuun. Haluamillasi ominaisuuksilla ja integroinneilla.`,
}

const majoitusroosa = {
  imgData: {
    desktop: {
      src: "/tyonayte/majoitusroosa/desktop.png",
      alt: "Työnäyte - Majoitusroosa, PC",
      width: 1920 / 2.5,
      height: 3792 / 2.5,
    },
    mobile: {
      src: "/tyonayte/majoitusroosa/mobile.png",
      alt: "Työnäyte - Majoitusroosa, Mobiili",
      width: 411 / 2,
      height: 5212 / 2,
    },
  },
  palette: ["#007CF0", "#ffffff", "#00122A", "#1e272e"],
  header: "Majoitusroosa",
  paragraph: `Digiaallon suunnittelu- ja kehityspalveluun sisältyy kaikki laadukkaan nettisivun valmistusvaiheet alusta loppuun. Haluamillasi ominaisuuksilla ja integroinneilla.`,
}

const Nayteikkuna = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="työnäytteet">
      <h3 className={styles.header}>Viimeisimmät työt.</h3>
      <div className={styles.wrapper}>
        <Tyonayte {...digiaalto} />
        <Tyonayte {...majoitusroosa} inverted={true} />
      </div>
    </section>
  )
}

export default Nayteikkuna
