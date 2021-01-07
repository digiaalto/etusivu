import styles from "../styles/pages/verkkosivut.module.sass"
import Layout from "../components/Layout"
import Hero from "../components/verkkosivut/Hero"
import MuutDigitoimistot from "../components/verkkosivut/MuutDigitoimistot"
import TextBar from "../components/verkkosivut/TextBar"
import MiksiDigiaalto from "../componentS/verkkosivut/MiksiDigiaalto"
const Verkkosivut = () => {
  return (
    <Layout topbar={true}>
      <Hero />
      <MuutDigitoimistot />
      <TextBar />
      <MiksiDigiaalto />
    </Layout>
  )
}

export default Verkkosivut
