import styles from "../styles/LP_Pricing.module.sass"
import { Fade } from "react-awesome-reveal"
import Expect from "./LP_Expect"

const LP_Pricing = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="hinta" ref={refs}>
      <Fade delay={300} direction="up" triggerOnce>
        <div className={styles.content}>
          <h3 className={styles.header}>
            Yrityssivut avaimet käteen toimituksella kiinteään hintaan 3,200€
          </h3>
          <p className={styles.note}>
            Digiaalto laskuttaa 30% etukäteen.
            <br />
            Sisällönhallintapalvelu 129,00€ / vuosi.
          </p>
          <Expect />
        </div>
      </Fade>
    </section>
  )
}

export default LP_Pricing
