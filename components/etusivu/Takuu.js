import styles from "./Takuu.module.sass"
import StepIndicator from "../common/StepIndicator"
import { LinkButton } from "../common/button"
import { Link as LinkScroll } from "react-scroll"
import Link from "next/link"

const Takuu = (props) => {
  const { refs } = props
  return (
    <section className={styles.section} ref={refs} id="palvelu">
      <StepIndicator
        overline="Palvelu"
        header="Täysi tyytyväisyystakuu ja huippuluokan laatutakuu."
        third
      />
      <p className={styles.description}>
        Asiakastyytyväisyys on meille tärkeintä. Palvelemme 100%
        tyytyväisyystakuulla ja lupaamme huippuluokan tulokset{" "}
        <Link href="/blogi/testaa-verkkosivuja-lighthousella">
          <a>Googlen laatutestissä.</a>
        </Link>{" "}
        Aloitetaan hommat tarjouspyynnöllä tai ota suoraan{" "}
        <LinkScroll to="laheta-viesti" smooth>
          yhteyttä.
        </LinkScroll>{" "}
      </p>
      <p className={styles.description}></p>
      <LinkButton href="/tarjouspyynto" text="Tarjouspyyntö" primary />
    </section>
  )
}

export default Takuu
