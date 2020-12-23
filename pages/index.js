import { useRef } from "react"
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
  const heroRef = useRef(null)
  const problemRef = useRef(null)
  const solutionRef = useRef(null)
  const auditRef = useRef(null)
  const pricingRef = useRef(null)

  const sectionRefs = [
    { section: "Hero", hoverText: "Digiaalto lyhyesti", ref: heroRef },
    {
      section: "Problem",
      hoverText: "Verkkohankinnan ongelmia",
      ref: problemRef,
    },
    {
      section: "Solution",
      hoverText: "Verkkohankinnan ratkaisu",
      ref: solutionRef,
    },
    { section: "Audit", hoverText: "Googlen laatutesti", ref: auditRef },
    { section: "Pricing", hoverText: "Hinta", ref: pricingRef },
  ]

  return (
    <div>
      <Layout topbar={true} footerHaastattelu={true} sectionRefs={sectionRefs}>
        <LP_Hero refs={heroRef} />
        <LP_Problem refs={problemRef} />
        <LP_Solution refs={solutionRef} />
        <LP_TrackInfographic />
        <LP_Audit refs={auditRef} />
        <LP_Process />
        <LP_Pricing refs={pricingRef} />
        <LP_Expect />
      </Layout>
    </div>
  )
}

export default IndexPage
