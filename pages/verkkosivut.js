import { useRef } from "react"
import Layout from "../components/layouts"
import Hero from "../components/verkkosivut/Hero"
import OldTech from "../components/verkkosivut/OldTech"
import Textbar from "../components/verkkosivut/Textbar"
import NewTech from "../components/verkkosivut/NewTech"
import LogoSlider from "../components/verkkosivut/LogoSlider"

const Verkkosivut = () => {
  const heroRef = useRef(null)
  const oldTechRef = useRef(null)
  const newTechRef = useRef(null)

  const sectionRefs = [
    { section: "verkkosivut", hoverText: "Ylös", ref: heroRef },
    {
      section: "verkkosivut#vanhat-verkkosivut",
      hoverText: "Vanhat sivut",
      ref: oldTechRef,
    },
    {
      section: "verkkosivut#uudet-verkkosivut",
      hoverText: "Uudet sivut",
      ref: newTechRef,
    },
  ]

  return (
    <Layout topbar={true} sectionRefs={sectionRefs}>
      <Hero refs={heroRef} />
      <OldTech refs={oldTechRef} />
      <Textbar />
      <NewTech refs={newTechRef} />
      <LogoSlider />
    </Layout>
  )
}

export default Verkkosivut
