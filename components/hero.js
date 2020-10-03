import styles from "../styles/hero.module.sass"
import Link from "next/link"
import Particles from "react-tsparticles"
import particleOptions from "../utils/particles"
import { FaArrowAltCircleDown } from "react-icons/fa"

const Hero = () => {
  return (
    <section className={styles.section}>
      <Particles className={styles.particles} options={particleOptions} />
      <div className={styles.content}>
        <h1 className={styles.header}>Haluatko erottua verkosta?</h1>
        <h2 className={styles.subheader}>
          Digiaalto on erikoistunut rakentamaan verkkosivuja joiden laadun takaa
          Googlen{" "}
          <Link href="#mika-on-google-lighthouse?">
            <a style={{ pointerEvents: "auto" }}>laatumittari.</a>
          </Link>
        </h2>
        <Link href="#paremmat-verkkosivut">
          <a>
            <FaArrowAltCircleDown className={styles.arrow} />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Hero
