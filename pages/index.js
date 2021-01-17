import { useRef } from "react"
import Layout from "../components/layouts/"
import Hero from "../components/etusivu/Hero"
import Palvelut from "../components/etusivu/Palvelut"
import Nayteikkuna from "../components/etusivu/Nayteikkuna"
import Prosessi from "../components/etusivu/Prosessi"
import LueVerkkosivut from "../components/etusivu/LueVerkkosivut"

const IndexPage = () => {
  const heroRef = useRef(null)
  const palvelutRef = useRef(null)
  const nayteikkunaRef = useRef(null)
  const prosessiRef = useRef(null)

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
      ref: prosessiRef,
    },
  ]

  return (
    <div>
      <Layout topbar={true} sectionRefs={sectionRefs}>
        <Hero refs={heroRef} />
        <Palvelut refs={palvelutRef} />
        <Nayteikkuna refs={nayteikkunaRef} />
        <Prosessi refs={prosessiRef} />
        <LueVerkkosivut />
      </Layout>
    </div>
  )
}

export default IndexPage
