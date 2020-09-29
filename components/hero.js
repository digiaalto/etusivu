import styles from "../styles/hero.module.sass"
import Link from "next/link"
import Particles from "react-tsparticles"
import particleOptions from "../utils/particles"
import Button from "./utility/button"

const Hero = () => {
  return (
    <section className={styles.section}>
      <Particles className={styles.particles} options={particleOptions} />
      <div className={styles.content}>
        <h1 className={styles.header}>Haluatko lisää näkyvyyttä verkossa?</h1>
        <p>
          Digiaalto kehittää nettisivuja jotka saavat kiitettävät pisteet
          Googlen laatumittauksessa.
        </p>
        <div className={styles.actions}>
          <Button text="Miten?" href="#investoi-uuteen" />
          <Button text="Lue lisää" href="#google-lighthouse" secondary />
        </div>
      </div>
    </section>
  )
}

export default Hero
