import styles from "../styles/LP_Hero.module.sass"
import Link from "next/link"
import { Zoom } from "react-awesome-reveal"

const Hero = () => {
  return (
    <section className={styles.section}>
      <Zoom delay={200} triggerOnce>
        <div className={styles.content}>
          <h6 className={styles.salesPitch}>
            Haluatko <span className={styles.highlight}> löytyä </span>
            verkosta <span className={styles.highlight2}> helposti </span>
            sekä <span className={styles.highlight3}> nopeasti?</span>
          </h6>
          <h1 className={styles.header}>
            Verkkosuunnittelija Digiaalto on erikoistunut kehittämään
            laatutestattuja verkkosivuja kiireisille yrittäjille.
          </h1>
          <Link href="#ongelmallisia-verkkosivuja">
            <a>
              <img
                src="lue-lisaa.svg"
                className={styles.ctaBtn}
                alt="Lue Lisää"
              />
            </a>
          </Link>
        </div>
      </Zoom>
    </section>
  )
}

export default Hero
