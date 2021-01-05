import { useRef } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Palvelut from "../components/Palvelut"
import Ominaisuudet from "../components/Ominaisuudet"
import Nayteikkuna from "../components/Nayteikkuna"
import Prosessi from "../components/Prosessi"

const IndexPage = () => {
  const heroRef = useRef(null)
  const palvelutRef = useRef(null)
  const nayteikkunaRef = useRef(null)
  const prosessiRef = useRef(null)

  const sectionRefs = [
    { section: "Hero", hoverText: "Digiaalto", ref: heroRef },
    {
      section: "Palvelut",
      hoverText: "Palvelut",
      ref: palvelutRef,
    },
    {
      section: "Nayteikkuna",
      hoverText: "Työnäytteet",
      ref: nayteikkunaRef,
    },
    {
      section: "Prosessi",
      hoverText: "Prosessi",
      ref: prosessiRef,
    },
  ]

  return (
    <div>
      <Layout topbar={true} footerHaastattelu={true} sectionRefs={sectionRefs}>
        <Hero refs={heroRef} />
        <Palvelut refs={palvelutRef} />
        <Ominaisuudet />
        <Nayteikkuna refs={nayteikkunaRef} />
        <Prosessi refs={prosessiRef} />
      </Layout>
    </div>
  )
}

export default IndexPage
