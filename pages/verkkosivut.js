import Layout from "../components/Layout"
import Hero from "../components/verkkosivut/Hero"
import VanhaMenetelma from "../components/verkkosivut/VanhaMenetelma"
import TextBar from "../components/verkkosivut/TextBar"
import MiksiDigiaalto from "../components/verkkosivut/MiksiDigiaalto"
import LogoSlider from "../components/verkkosivut/LogoSlider"

const Verkkosivut = () => {
  return (
    <Layout topbar={true}>
      <Hero />
      <VanhaMenetelma />
      <TextBar />
      <MiksiDigiaalto />
      <LogoSlider />
    </Layout>
  )
}

export default Verkkosivut
