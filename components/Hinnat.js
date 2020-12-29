import styles from "../styles/Hinnat.module.sass"
import { Fade } from "react-awesome-reveal"

const Hinnat = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} id="hinta" ref={refs}>
      <Fade delay={200} fraction={0.5} triggerOnce>
        <div className={styles.content}>
          <h3 className={styles.header}>
            Yritykselle kotisivut, avaimet käteen toimituksella — alkaen 2,000€.
          </h3>
          <p className={styles.note}>
            Sisällönhallintapalvelu 129,00€ / vuosi.
            <br />
            Digiaalto laskuttaa 30% etukäteen.
            <br />
            Hosting palvelu ilmainen.
          </p>
        </div>
      </Fade>
    </section>
  )
}

export default Hinnat
