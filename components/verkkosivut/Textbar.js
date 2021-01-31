import styles from "./Textbar.module.sass"
import { Fade } from "react-awesome-reveal"

const config = {
  delay: 200,
  duration: 1200,
  fraction: 0.15,
}

const Textbar = () => {
  return (
    <section className={styles.section}>
      <Fade {...config}>
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
