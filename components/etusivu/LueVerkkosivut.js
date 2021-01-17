import styles from "./LueVerkkosivut.module.sass"
import { LinkButton } from "../common/button"

const sisalto = {
  header: "Lisää tietoa?",
  cta: "Paina tästä",
}

const LueVerkkosivut = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>{sisalto.header}</h2>
      <LinkButton href="/verkkosivut" text={sisalto.cta} primary />
    </section>
  )
}

export default LueVerkkosivut
