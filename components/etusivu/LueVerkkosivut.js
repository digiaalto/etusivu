import styles from "./LueVerkkosivut.module.sass"
import { LinkButton } from "../common/button"

const sisalto = {
  header: "Rakennetaan jotain mitä on mukava käyttää.",
  cta: "Eteenpäin kiitos!",
}

const LueVerkkosivut = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>{sisalto.header}</h2>
      <LinkButton
        href="/verkkosivut"
        text={sisalto.cta}
        primary
        customClass={styles.buttonWidth}
      />
    </section>
  )
}

export default LueVerkkosivut
