import styles from "./Textbar.module.sass"
import { Fade } from "react-awesome-reveal"
import { basicFade } from "../../vars"

const Textbar = () => {
  return (
    <section className={styles.section}>
      <Fade {...basicFade}>
        <h3 className={styles.text}>
          Jos yrityksesi verkkopalvelut tehdään edelleen vanhojen tekniikoiden
          varassa, kannattaa päivittää ne nykyaikaisiin standardeihin. Turvaa
          yrityksesi potentiaali verkossa.
        </h3>
      </Fade>
    </section>
  )
}

export default Textbar
