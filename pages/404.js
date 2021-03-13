import styles from "../styles/pages/404.module.sass"
import DefaultLayout from "@/layouts/DefaultLayout"
import Link from "next/link"

const Page404 = () => {
  return (
    <DefaultLayout topbar={true}>
      <section className={styles.section}>
        <h1 className={styles.header}>Tässä osoitteessa ei ole mitään.</h1>
        <p>
          <Link href="/">
            <a>&larr; Palaa alkuun</a>
          </Link>
        </p>
      </section>
    </DefaultLayout>
  )
}

export default Page404
