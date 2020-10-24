import styles from "../styles/LP_Solution.module.sass"

const LP_Solution = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className="preheader">Ratkaisu</span>
        <h1 className={styles.header}>
          Digiaalto kehittää todistetusti huippuluokan verkkosivuja.
        </h1>
        <h2 className={styles.subheader}>
          Kehitysvaihe yhdistetään automaattiseen laatumittaukseen, joka
          varmistaa huippuluokan verkkosivutoteutuksen.
        </h2>
        <h2 className={styles.subheader}>
          Tuntemalla hakukoneiden suosimat web-standardit ja parhaat käytännöt,
          Digiaalto rakentaa tehokkaampia verkkosivuja teknologialla, joka takaa
          kiitettävät arvosanat hakukoneen algoritmissä.
        </h2>
      </div>
    </section>
  )
}

export default LP_Solution
