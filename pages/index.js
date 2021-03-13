import { useRef } from "react"
import DefaultLayout from "@/layouts/DefaultLayout"
import Hero from "../components/etusivu/Hero"
import Palvelut from "../components/etusivu/Palvelut"
import Nayteikkuna from "../components/etusivu/Nayteikkuna"
import Creation from "../components/etusivu/Creation"
import FAQ from "@/common/FAQ"

const IndexPage = () => {
  const heroRef = useRef(null)
  const palvelutRef = useRef(null)
  const nayteikkunaRef = useRef(null)
  const suunnitteluRef = useRef(null)
  const kehitysRef = useRef(null)
  const takuuRef = useRef(null)
  const useinKysyttyaRef = useRef(null)

  const sectionRefs = [
    { section: "", hoverText: `Etusivu`, ref: heroRef },
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
      section: "#palvelu",
      hoverText: "Palvelu",
      ref: takuuRef,
    },
    {
      section: "#usein-kysyttya",
      hoverText: "Usein Kysyttyä",
      ref: useinKysyttyaRef,
    },
  ]

  return (
    <div>
      <DefaultLayout topbar={true} sectionRefs={sectionRefs}>
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
        <FAQ refs={useinKysyttyaRef} />
      </DefaultLayout>
    </div>
  )
}

export default IndexPage
