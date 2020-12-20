import Layout from "../components/Layout"
import LP_Hero from "../components/LP_Hero"
import LP_Problem from "../components/LP_Problem"
import LP_Solution from "../components/LP_Solution"
import LP_TrackInfographic from "../components/LP_TrackInfographic"
import LP_Audit from "../components/LP_Audit"
import LP_Process from "../components/LP_Process"
import LP_Pricing from "../components/LP_Pricing"
import LP_Expect from "../components/LP_Expect"

const IndexPage = () => {
  return (
    <div>
      <Layout topbar>
        <LP_Hero />
        <LP_Problem />
        <LP_Solution />
        <LP_TrackInfographic />
        <LP_Audit />
        <LP_Process />
        <LP_Pricing />
        <LP_Expect />
      </Layout>
    </div>
  )
}

export default IndexPage
