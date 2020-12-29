import { useRef } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Palvelut from "../components/Palvelut"
import HankintaProsessi from "../components/HankintaProsessi"
import Hinnat from "../components/Hinnat"

const IndexPage = () => {
  const heroRef = useRef(null)
  const palvelutRef = useRef(null)
  const hankintaProsessiRef = useRef(null)
  const hinnatRef = useRef(null)

  const sectionRefs = [
    { section: "Hero", hoverText: "Digiaalto", ref: heroRef },
    {
      section: "Palvelut",
      hoverText: "Palvelut",
      ref: palvelutRef,
    },
    {
      section: "HankintaProsessi",
      hoverText: "Hankintaprosessi",
      ref: hankintaProsessiRef,
    },
    { section: "Hinnat", hoverText: "Hinnat", ref: hinnatRef },
  ]

  return (
    <div>
      <Layout topbar={true} footerHaastattelu={true} sectionRefs={sectionRefs}>
        <Hero refs={heroRef} />
        <Palvelut refs={palvelutRef} />
        <HankintaProsessi refs={hankintaProsessiRef} />
        <Hinnat refs={hinnatRef} />
      </Layout>
    </div>
  )
}

export default IndexPage
