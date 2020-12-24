import { useRef } from "react"
import Layout from "../components/Layout"
import LP_Hero from "../components/LP_Hero"
import LP_Problem from "../components/LP_Problem"
import LP_Solution from "../components/LP_Solution"
import LP_TrackInfographic from "../components/LP_TrackInfographic"
import LP_Process from "../components/LP_Process"
import LP_Pricing from "../components/LP_Pricing"
// import LP_Expect from "../components/LP_Expect"

const IndexPage = () => {
  const heroRef = useRef(null)
  const problemRef = useRef(null)
  const solutionRef = useRef(null)
  const processRef = useRef(null)
  const pricingRef = useRef(null)

  const sectionRefs = [
    { section: "Hero", hoverText: "Digiaalto", ref: heroRef },
    {
      section: "Problem",
      hoverText: "Ongelma",
      ref: problemRef,
    },
    {
      section: "Solution",
      hoverText: "Ratkaisu",
      ref: solutionRef,
    },
    { section: "Process", hoverText: "Prosessi", ref: processRef },
    { section: "Pricing", hoverText: "Hinta", ref: pricingRef },
  ]

  return (
    <div>
      <Layout topbar={true} footerHaastattelu={true} sectionRefs={sectionRefs}>
        <LP_Hero refs={heroRef} />
        <LP_Problem refs={problemRef} />
        <LP_Solution refs={solutionRef} />
        <LP_TrackInfographic />
        <LP_Process refs={processRef} />
        <LP_Pricing refs={pricingRef} />
        {/* <LP_Expect /> */}
      </Layout>
    </div>
  )
}

export default IndexPage
