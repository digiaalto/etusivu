import styles from "../styles/yhteydenottolomake.module.sass"
import React from "react"
import FormApp from "../components/FormApp"
import Layout from "../components/layout"

/**
 *
 * Vuorovaikutteinen Tilauslomake mahdollisille asiakkaille.
 */

const Tilaus = () => {
  return (
    <Layout desktopNav={false}>
      <section className={styles.section}>
        <FormApp />
      </section>
    </Layout>
  )
}

export default Tilaus
