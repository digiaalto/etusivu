import Layout from "../components/layout"
import Hero from "../components/hero"
import SalesPitch from "../components/salespitch"
import Quote from "../components/quote"
import LP_Process from "../components/LP_Process"
import Price from "../components/price"
import Contact from "../components/contact"
import Infobar from "../components/infobar"

const IndexPage = () => {
  return (
    <div>
      <Layout infobar={<Infobar />}>
        <Hero />
        <SalesPitch />
        <Quote />
        <LP_Process />
        <Price />
        <Contact />
      </Layout>
    </div>
  )
}

export default IndexPage
