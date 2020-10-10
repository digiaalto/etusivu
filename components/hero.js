import styles from "../styles/hero.module.sass"
import Link from "next/link"
import { FaArrowDown } from "react-icons/fa"
import { Zoom } from "react-awesome-reveal"
import Waves from "../components/waves"

const Hero = () => {
  return (
    <section className={styles.section}>
      <Waves />
      <div className={styles.content}>
        <Zoom>
          <h1 className={styles.header}>
            Haluatko <span className={styles.highlight}>löytyä</span> verkosta
            helposti?
          </h1>
          <Link href="#laatutestaus">
            <a>
              <FaArrowDown className={styles.arrow} />
            </a>
          </Link>
          <h2 className={styles.subheader}>
            Digiaalto on erikoistunut rakentamaan superoptimoituja
            markkinointisivuja joiden laadun takaa Googlen kehittämä verkkosivun
            laatutesti,{" "}
            <Link href="/#laatutestaus">
              <a className={styles.subheaderLink}>Google Lighthouse.</a>
            </Link>
          </h2>
        </Zoom>
      </div>
    </section>
  )
}

export default Hero
