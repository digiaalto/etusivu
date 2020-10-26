import styles from "../styles/LP_Expect.module.sass"

const LP_Expect = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3 className={styles.header}>Älä odota</h3>
          <List
            items={[
              "Verkkokauppaa",
              "Logon suunnittelua",
              "Työn ulkoistamista",
              "Heikentynyttä laatua",
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
              "Sisällönhallintaohjelman valinnanvapautta",
              "Parhainta optimointia",
              "Lighthouse testausta",
              "Käyttäjäystävällisyyttä",
              "Virtaviivaista prosessia",
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
