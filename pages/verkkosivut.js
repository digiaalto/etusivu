import { useRef, useState, useEffect } from "react"
import Layout from "../components/layouts"
import Hero from "../components/verkkosivut/Hero"
import OldTech from "../components/verkkosivut/OldTech"
import NewTech from "../components/verkkosivut/NewTech"
import LogoSlider from "../components/verkkosivut/LogoSlider"

const Verkkosivut = () => {
  const [isMobile, setMobile] = useState(false)

  const heroRef = useRef(null)
  const oldTechRef = useRef(null)
  const newTechRef = useRef(null)

  useEffect(() => {
    if (window) setMobile(window.innerWidth < 769)
  }, [])

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
      <OldTech refs={oldTechRef} isMobile={isMobile} />
      <NewTech refs={newTechRef} isMobile={isMobile} />
      <LogoSlider />
    </Layout>
  )
}

export default Verkkosivut
