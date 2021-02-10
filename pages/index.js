import { useRef } from "react"
import Layout from "../components/layouts/"
import Hero from "../components/etusivu/Hero"
import Palvelut from "../components/etusivu/Palvelut"
import Nayteikkuna from "../components/etusivu/Nayteikkuna"
import Creation from "../components/etusivu/Creation"

const IndexPage = () => {
  const heroRef = useRef(null)
  const palvelutRef = useRef(null)
  const nayteikkunaRef = useRef(null)
  const suunnitteluRef = useRef(null)
  const kehitysRef = useRef(null)
  const takuuRef = useRef(null)

  const sectionRefs = [
    { section: "", hoverText: `Ylös`, ref: heroRef },
    {
      section: "#palvelut",
      hoverText: "Palvelut",
      ref: palvelutRef,
    },
    {
      section: "#viimeisimmat-tyot",
      hoverText: "Työt",
      ref: nayteikkunaRef,
    },
    {
      section: "#suunnittelu",
      hoverText: "Suunnittelu",
      ref: suunnitteluRef,
    },
    {
      section: "#kehitys",
      hoverText: "Kehitys",
      ref: kehitysRef,
    },
    {
      section: "#takuu",
      hoverText: "Takuu",
      ref: takuuRef,
    },
  ]

  return (
    <div>
      <Layout topbar={true} sectionRefs={sectionRefs}>
        <Hero refs={heroRef} />
        <Palvelut refs={palvelutRef} />
        <Nayteikkuna refs={nayteikkunaRef} />
        <Creation
          refs={{
            suunnitteluRef: suunnitteluRef,
            kehitysRef: kehitysRef,
            takuuRef: takuuRef,
          }}
        />
      </Layout>
    </div>
  )
}

export default IndexPage
