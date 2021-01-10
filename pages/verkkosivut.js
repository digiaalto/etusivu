import Layout from "../components/Layout"
import Hero from "../components/verkkosivut/Hero"
import VanhaMenetelma from "../components/verkkosivut/VanhaMenetelma"
import TextBar from "../components/verkkosivut/TextBar"
import MiksiDigiaalto from "../components/verkkosivut/MiksiDigiaalto"
import CompanyLogoSlider from "../components/common/CompanyLogoSlider"
// import Tarjouspyynto from "../components/common/Tarjouspyynto"

const Verkkosivut = () => {
  return (
    <Layout topbar={true}>
      <Hero />
      <VanhaMenetelma />
      <TextBar />
      <MiksiDigiaalto />
      <CompanyLogoSlider />
      {/* <Tarjouspyynto /> */}
    </Layout>
  )
}

export default Verkkosivut
