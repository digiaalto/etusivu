import styles from "../styles/LP_Problem.module.sass"

const LP_Problem = () => {
  return (
    <section className={styles.section} id="kehityksen-haasteita">
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
              Hyvän verkkosivun tarkoitus on toteuttaa sille asetetut
              tavoitteet. Yrityksen näkökulmasta päätavoite voi olla esimerkiksi
              asiakkaiden tiedottaminen palveluista ja tuoton kasvattaminen.
            </p>
            <p>
              Yrityssivun tavoitteita vaikeuttaa tai helpottaa kaikki päätökset
              teknisestä toteutuksesta sisällönsuunnitteluun.
            </p>
          </div>
          <div className={styles.textColumn}>
            <p>
              Jokaisen yrittäjien ei kuitenkaan ole taloudellisesti järkevää
              käyttää omaa aikaa verkkosivun suunnittelun ja kehityksen
              laadunvalvontaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LP_Problem
