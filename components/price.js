import styles from "../styles/price.module.sass"
import { RiMoneyEuroCircleFill } from "react-icons/ri"

const Price = () => {
  return (
    <section id="hinnoittelu" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.header}>
          <RiMoneyEuroCircleFill />
          <span>~3,500</span>
        </div>
        <p>
          Hyvin toteutettu verkkosivu on fiksu investointi joka hengittää eloa
          yrityksesi tuottavuuden mittariin.
        </p>
        <p className={styles.note}>
          Työn hinnoitteluun vaikuttaa projektikohtaiset vaatimukset,
          lähdemateriaali ja muut hankinnat ja palvelut.
        </p>
      </div>
    </section>
  )
}

export default Price
