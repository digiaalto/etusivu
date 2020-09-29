import styles from "../styles/price.module.sass"
import { RiMoneyEuroCircleFill } from "react-icons/ri"

const Price = () => {
  return (
    <section>
      <div className={styles.content}>
        <div className={styles.header}>
          <RiMoneyEuroCircleFill />
          <span>3,500</span>
        </div>
        <p>
          Digiaalto myy taattua laatua suhteellisen pienellä investoinnilla
          verrattuna muihin web-suunnittelioihin ja web-kehittäjiin. Työn
          hinnoitteluun vaikuttaa projektikohtaiset vaatimukset ja
          lähdemateriaalin saatavuus.
        </p>
      </div>
    </section>
  )
}

export default Price
