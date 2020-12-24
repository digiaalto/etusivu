import styles from "../styles/LP_Expect.module.sass"

const LP_Expect = () => {
  return (
    <div className={styles.content}>
      <div className={styles.column}>
        <h3 className={styles.header}>Mitä et saa</h3>
        <List
          items={[
            "Loputtomasti revisioita",
            "Ulkoistettua koodia",
            "Ylisuunniteltua ulkoasua",
            "Viivyttelyä",
          ]}
        />
      </div>
      <div className={styles.column}>
        <h3 className={`${styles.header} ${styles.highlight}`}>Mitä saat</h3>
        <List
          items={[
            "Huippuluokan optimoinnin",
            "Laatutestin raportin",
            "Parhaat palvelusuositukset",
            "Halumasi sisällönhallintapalvelun",
          ]}
        />
      </div>
    </div>
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
