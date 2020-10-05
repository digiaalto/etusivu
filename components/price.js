import styles from "../styles/price.module.sass"

const Price = () => {
  return (
    <section id="hinnoittelu" className={styles.section}>
      <div className={styles.content}>
        <h2 className="headerAfter">Hinnoittelu</h2>
        <p>
          Hyvin toteutettu verkkosivu on fiksu investointi joka näkyy
          tuottavuudessa.
        </p>
        <p className="bold">Optimoitu verkkosivu alkaen 2200 €</p>
        <p className={styles.note}>
          Työn hinnoitteluun vaikuttaa projektikohtaiset vaatimukset,
          lähdemateriaali ja muut hankinnat ja palvelut.
        </p>
      </div>
    </section>
  )
}

export default Price
