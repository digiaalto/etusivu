import styles from "../styles/pages/kiitos.module.sass"
import Layout from "../components/Layout"
import { FiThumbsUp } from "react-icons/fi"

const Kiitos = () => {
  return (
    <Layout topbar={true}>
      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.header}>
            <FiThumbsUp className={styles.icon} />
            <br />
            Kiitos haastattelulomakeen käytöstä!
          </span>
          <span className={styles.subheader}>
            Vastauksesi käydään läpi tulevina arkipäivinä ja teihin ollaan
            yhteydessä pian.
          </span>
        </div>
      </section>
    </Layout>
  )
}

export default Kiitos
