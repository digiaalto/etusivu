import Layout from "../components/layout"
import Hero from "../components/hero"
import SalesPitch from "../components/salespitch"
import Lighthouse from "../components/lighthouse"
import Quote from "../components/quote"
import Toteutus from "../components/toteutus"
import Price from "../components/price"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <SalesPitch />
        <Lighthouse />
        <Quote />
        <Toteutus />
        <Price />
        <Contact />
      </Layout>
    </div>
  )
}

export default IndexPage
