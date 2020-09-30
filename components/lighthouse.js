import styles from "../styles/lighthouse.module.sass"

const Lighthouse = () => {
  return (
    <section className={styles.section} id="google-lighthouse">
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h2 className="headerAfter">Mikä on Google Lighthouse?</h2>
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
