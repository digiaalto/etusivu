import Layout from "../components/layout"
import Hero from "../components/hero"
import LP_Problem from "../components/LP_Problem"
import LP_Solution from "../components/LP_Solution"
import LP_Audit from "../components/LP_Audit"
import LP_Quote from "../components/LP_Quote"
import LP_Process from "../components/LP_Process"
import LP_Pricing from "../components/LP_Pricing"
import LP_Expect from "../components/LP_Expect"
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
        {/* <LP_Quote /> */}
        <LP_Process />
        <LP_Pricing />
        <LP_Expect />
        <ContactForm />
      </Layout>
    </div>
  )
}

export default IndexPage
