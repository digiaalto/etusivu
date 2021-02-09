import styles from "@/styles/pages/aihe.module.sass"
import BlogLayout from "@/layouts/BlogLayout"

const Aihe = () => {
  return (
    <BlogLayout topbar={true}>
      <section className={styles.hero}>
        <h1 className="headerMain">Aihe: </h1>
      </section>
    </BlogLayout>
  )
}
export default Aihe
