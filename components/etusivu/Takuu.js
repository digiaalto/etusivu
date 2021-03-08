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
        header="Asiakastyytyvyys on tärkein."
        third
      />
      <p className={styles.description}>
        Valmistamme verkkoprojektisi täydellä tyytyväisyystakuulla ja
        huippuluokan tulokset Googlen{" "}
        <Link href="/blogi/testaa-verkkosivuja-lighthousella">
          <a>laatutestissä.</a>
        </Link>{" "}
        Starttaa hommat tarjouspyynnöllä tai ota suoraan{" "}
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
