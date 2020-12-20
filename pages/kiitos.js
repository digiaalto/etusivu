import styles from "../styles/pages/kiitos.module.sass"
import Layout from "../components/Layout"
import { FiThumbsUp } from "react-icons/fi"

const Kiitos = () => {
  return (
    <Layout infobar={true}>
      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.header}>
            Kiitos haastattelulomakeen käytöstä
            <FiThumbsUp />
          </span>
          <span className={styles.subheader}>
            Vastauksenne käydään läpi ja teihin otetaan yhteyttä mahdollisimman
            pian.
          </span>
        </div>
      </section>
    </Layout>
  )
}

export default Kiitos
