import styles from "../styles/pages/404.module.sass"
import Layout from "../components/Layout"
import Link from "next/link"

const Page404 = () => {
  return (
    <Layout topbar={true}>
      <section className={styles.section}>
        <h1 className={styles.header}>Tässä osoitteessa ei ole mitään.</h1>
        <p>
          <Link href="/">
            <a>&larr; Palaa alkuun</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export default Page404
