import styles from "../styles/kiitos.module.sass"
import Layout from "../components/layout"
import { FiThumbsUp } from "react-icons/fi"

const Kiitos = () => {
  return (
    <Layout infobar={true}>
      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.header}>
            <FiThumbsUp />
            Kiitos haastattelulomakkeen käytöstä.
          </span>
          <span className={styles.subheader}>
            Vastauksesi käydään läpi ja sinuun otetaan yhteyttä 1-3
            arkipäivässä.
          </span>
        </div>
      </section>
    </Layout>
  )
}

export default Kiitos
