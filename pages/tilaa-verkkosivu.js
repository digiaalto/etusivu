import styles from "../styles/pages/tilaa-verkkosivu.module.sass"
import React from "react"
import FormApp from "../components/FormApp"
import Layout from "../components/Layout"

/**
 *
 * Vuorovaikutteinen Tilauslomake mahdollisille asiakkaille.
 */

const Tilaus = () => {
  return (
    <Layout>
      <section className={styles.section}>
        <FormApp />
      </section>
    </Layout>
  )
}

export default Tilaus
