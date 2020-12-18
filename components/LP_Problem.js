import styles from "../styles/LP_Problem.module.sass"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="verkkokehitys-ongelma">
      <div className={styles.content}>
        <div className={styles.headerWrapper}>
          <span className={styles.preheader}>Ongelma</span>
          <h1 className={styles.header}>
            Kiireinenkin yrittäjä tarvitsee laadukkaan yrityssivun.
          </h1>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textColumn}>
            <p>
              Onnistuneen verkkosivun tarkoitus on toteuttaa sille asetetut
              tavoitteet. Yrityksen näkökulmasta se on yleensä asiakkaiden
              tavoittaminen ja liikevaihdon kasvattaminen.
            </p>
            <p>
              Näiden tavoitteiden toteutumista vaikeuttaa tai helpottaa kaikki
              päätökset sivun teknisestä toteutuksesta sisällönsuunnitteluun.
            </p>
          </div>
          <div className={styles.textColumn}>
            <p>
              Jokaisen yrittäjien ei kuitenkaan ole taloudellisesti kannattavaa
              kuluttaa omaa aikaa verkkosivun suunnittelun ja kehityksen
              laadunvalvontaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LP_Problem
