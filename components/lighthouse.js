import styles from "../styles/lighthouse.module.sass"
import Button from "./utility/button"

const Lighthouse = () => {
  return (
    <section className={styles.section} id="google-lighthouse">
      <div className={styles.content}>
        <img src="google-lighthouse.svg" className={styles.image} />
        <div className={styles.textWrapper}>
          <h2 className={`${styles.header} headerAfter`}>
            Mikä on Google Lighthouse?
          </h2>
          <p>
            Lighthouse on avoimen lähdekoodin automaattinen työkalu
            verkkosivujen laadun mittaamiseen. Google kehitti Lighthousen jotta
            internetin käyttökokemus parantuisi.
          </p>
          <p>
            Tämä laatumittari auditoi sivun kuin sivun sadoilla testeillä
            muutamassa sekunnissa ja generoi raportin jossa ilmenee missä sivu
            onnistuu ja missä epäonnistuu.
          </p>
          <p className="bold">Lighthouse on nettisivujen tulikoe.</p>
          <Button
            text="Testaa verkkosivuja"
            href="https://web.dev/measure/"
            outside
          />
        </div>
      </div>
    </section>
  )
}

export default Lighthouse

/*

             Automaattinen työkalu
            verkkosivujen laadun mittaamiseen. Google Lighthouse tarkastaa
            verkkosivujen suorituskyvyn, saavutettavuuden ja hakukoneoptimoinnin
            muutamassa sekunissa, kertaheitolla.

            */
