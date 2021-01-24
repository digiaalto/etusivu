import { useRef } from "react"
import Layout from "../components/layouts/"
import Hero from "../components/etusivu/Hero"
import Palvelut from "../components/etusivu/Palvelut"
import Ominaisuudet from "../components/etusivu/Ominaisuudet"
import Nayteikkuna from "../components/etusivu/Nayteikkuna"
import Creation from "../components/etusivu/Creation"

const IndexPage = () => {
  const heroRef = useRef(null)
  const palvelutRef = useRef(null)
  const nayteikkunaRef = useRef(null)
  const creationRef = useRef(null)

  const sectionRefs = [
    { section: "Hero", hoverText: "Ylös", ref: heroRef },
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
      ref: creationRef,
    },
  ]

  return (
    <div>
      <Layout topbar={true} sectionRefs={sectionRefs}>
        <Hero refs={heroRef} />
        <Palvelut refs={palvelutRef} />
        <Ominaisuudet />
        <Nayteikkuna refs={nayteikkunaRef} />
        <Creation refs={creationRef} />
      </Layout>
    </div>
  )
}

export default IndexPage
