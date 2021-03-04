import styles from "./Takuu.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"
import { Link as LinkScroll } from "react-scroll"
import Link from "next/link"

const Takuu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="takuu">
      <StepIndicator
        overline="Takuu"
        header="Tyytyväisyys- ja laatutakuu."
        third
      />
      <p className={styles.description}>
        Tarjoamme riskivaapata palvelua täydellä tyytyväisyystakuulla. Tähtäämme
        myös huippuluokan tuloksiin{" "}
        <Link href="/blogi/testaa-verkkosivuja-lighthousella">
          <a>Googlen laatutestissä.</a>
        </Link>{" "}
        Tarkastele hinnastoa tarjouspyynnön ohella tai{" "}
        <LinkScroll to="laheta-viesti" smooth>
          ota yhteyttä.
        </LinkScroll>{" "}
      </p>
      <p className={styles.description}></p>
      <LinkButton href="/tarjouspyynto" text="Lähetä tarjouspyyntö" primary />
    </section>
  )
}

export default Takuu
