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
        header="Yhteistyö kahdella tärkeällä takuulla."
        third
      />
      <p className={styles.description}>
        Saat meiltä täysin riskivapaan verkkosivun täydellä
        tyytyväisyystakuulla, sekä huippuluokan tulokset{" "}
        <Link href="/blogi/testaa-verkkosivuja-lighthousella">
          <a>Googlen laatutestissä.</a>
        </Link>{" "}
        Aloita lähettämällä tarjouspyyntö tai{" "}
        <LinkScroll to="laheta-viesti" smooth>
          ota yhteyttä.
        </LinkScroll>{" "}
      </p>
      <p className={styles.description}></p>
      <LinkButton href="/tarjouspyynto" text="Tarjouspyyntö" primary />
    </section>
  )
}

export default Takuu
