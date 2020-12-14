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
            Kiitos yhteydenotosta.
          </span>
          <span className={styles.subheader}>
            Haastattelulomakkeen vastaukset käydään läpi ja sinuun otetaan
            yhteyttä 1-2 arkipäivissä.
          </span>
        </div>
      </section>
    </Layout>
  )
}

export default Kiitos
