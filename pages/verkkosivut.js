import { useRef } from "react"
import Layout from "../components/layouts"
import Hero from "../components/verkkosivut/Hero"
import OldTech from "../components/verkkosivut/OldTech"
import TextBar from "../components/verkkosivut/TextBar"
import NewTech from "../components/verkkosivut/NewTech"
import LogoSlider from "../components/verkkosivut/LogoSlider"
import Tarjouspyynto from "../components/verkkosivut/Tarjouspyynto"

const Verkkosivut = () => {
  const heroRef = useRef(null)
  const oldTechRef = useRef(null)
  const newTechRef = useRef(null)
  const tarjouspyyntoRef = useRef(null)

  const sectionRefs = [
    { section: "Hero", hoverText: "Ylös", ref: heroRef },
    { section: "OldTech", hoverText: "Vanha tekniikka", ref: oldTechRef },
    { section: "NewTech", hoverText: "Uusi tekniikka", ref: newTechRef },
    {
      section: "Tarjouspyyntö",
      hoverText: "Tarjouspyyntö",
      ref: tarjouspyyntoRef,
    },
  ]

  return (
    <Layout topbar={true} sectionRefs={sectionRefs}>
      <Hero refs={heroRef} />
      <OldTech refs={oldTechRef} />
      <TextBar />
      <NewTech refs={newTechRef} />
      <LogoSlider />
      <Tarjouspyynto refs={tarjouspyyntoRef} />
    </Layout>
  )
}

export default Verkkosivut
