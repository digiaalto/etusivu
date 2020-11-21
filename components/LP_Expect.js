import styles from "../styles/LP_Expect.module.sass"

const LP_Expect = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3 className={styles.header}>Älä odota</h3>
          <List
            items={[
              "Verkkokauppa-alustaa",
              "Ulkoistettua työtä",
              "Logoa",
              "Hutilointia",
              "Myöhäistä toimitusta",
            ]}
          />
        </div>
        <div className={styles.column}>
          <h3 className={`${styles.header} ${styles.highlight}`}>
            Voi odottaa
          </h3>
          <List
            items={[
              "Valitsemaasi sisällönhalintapalvelua",
              "A-luokan optimointia",
              "Ankaraa laatutestausta",
              "Asiakkaan priorisointia",
              "Sujuvaa toteutusprosessia",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default LP_Expect

const List = ({ items }) => {
  return (
    <ol className={styles.list}>
      {items.map((item, index) => (
        <li className={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ol>
  )
}
