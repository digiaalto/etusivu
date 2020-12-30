import { useRef } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Palvelut from "../components/Palvelut"
import Prosessi from "../components/Prosessi"
import Hinnat from "../components/Hinnat"
import Ominaisuudet from "../components/Ominaisuudet"

const IndexPage = () => {
  const heroRef = useRef(null)
  const palvelutRef = useRef(null)
  const ominaisuudetRef = useRef(null)
  const prosessiRef = useRef(null)
  const hinnatRef = useRef(null)

  const sectionRefs = [
    { section: "Hero", hoverText: "Digiaalto", ref: heroRef },
    {
      section: "Palvelut",
      hoverText: "Palvelut",
      ref: palvelutRef,
    },
    {
      section: "Ominaisuudet",
      hoverText: "Ominaisuudet",
      ref: ominaisuudetRef,
    },
    {
      section: "Prosessi",
      hoverText: "Prosessi",
      ref: prosessiRef,
    },
    { section: "Hinnat", hoverText: "Hinnat", ref: hinnatRef },
  ]

  return (
    <div>
      <Layout topbar={true} footerHaastattelu={true} sectionRefs={sectionRefs}>
        <Hero refs={heroRef} />
        <Palvelut refs={palvelutRef} />
        <Ominaisuudet refs={ominaisuudetRef} />
        <Prosessi refs={prosessiRef} />
        <Hinnat refs={hinnatRef} />
      </Layout>
    </div>
  )
}

export default IndexPage
