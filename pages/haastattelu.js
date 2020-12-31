import styles from "../styles/pages/haastattelu.module.sass"
import React from "react"
import Layout from "../components/Layout"
import FormApp from "../components/FormApp"

/**
 *
 * Vuorovaikutteinen tilauslomake mahdollisille asiakkaille.
 */

const Haastattelu = () => {
  return (
    <Layout topbar={true}>
      <section className={styles.section}>
        <FormApp />
      </section>
    </Layout>
  )
}

export default Haastattelu
