import styles from "../styles/pages/yhteydenotto.module.sass"
import React from "react"
import Layout from "../components/Layout"
import FormApp from "../components/FormApp"

/**
 *
 * Vuorovaikutteinen tilauslomake mahdollisille asiakkaille.
 */

const Yhteydenotto = () => {
  return (
    <Layout topbar={true}>
      <section className={styles.section}>
        <FormApp />
      </section>
    </Layout>
  )
}

export default Yhteydenotto
