import Layout from "../components/layout"
import Hero from "../components/hero"
import LP_Problem from "../components/LP_Problem"
import LP_Solution from "../components/LP_Solution"
import LP_Audit from "../components/LP_Audit"
import Quote from "../components/quote"
import LP_Process from "../components/LP_Process"
import LP_Pricing from "../components/LP_Pricing"
import ContactForm from "../components/ContactForm"
import Infobar from "../components/infobar"

const IndexPage = () => {
  return (
    <div>
      <Layout infobar={<Infobar />}>
        <Hero />
        <LP_Problem />
        <LP_Solution />
        <LP_Audit />
        <Quote />
        <LP_Process />
        <LP_Pricing />
        <ContactForm />
      </Layout>
    </div>
  )
}

export default IndexPage
