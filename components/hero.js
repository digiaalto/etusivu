import styles from "../styles/hero.module.sass"
import Link from "next/link"
import { FaArrowAltCircleDown } from "react-icons/fa"
import Zoom from "react-reveal/Zoom"

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Zoom>
          <h1 className={styles.header}>
            Haluatko <span className={styles.highlight}>erottua</span> verkossa?
          </h1>
        </Zoom>
        <Zoom>
          <h2 className={styles.subheader}>
            Digiaalto on erikoistunut rakentamaan verkkosivuja joiden laadun
            takaa Googlen kehittämä laatutesti.
          </h2>
          <Link href="#laatutestaus">
            <a>
              <FaArrowAltCircleDown className={styles.arrow} />
            </a>
          </Link>
        </Zoom>
      </div>
    </section>
  )
}

export default Hero
