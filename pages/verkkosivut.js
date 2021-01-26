import { useRef, useState, useEffect } from "react"
import Layout from "../components/layouts"
import Hero from "../components/verkkosivut/Hero"
import OldTech from "../components/verkkosivut/OldTech"
import TextBar from "../components/verkkosivut/TextBar"
import NewTech from "../components/verkkosivut/NewTech"
import NewTech2 from "../components/verkkosivut/NewTech2"
import LogoSlider from "../components/verkkosivut/LogoSlider"
import FAQ from "../components/common/FAQ"

const sisalto = {
  textBar1: `Digiaalto ei rakenna vain nettisivuja. Tarjoamme huolellista suunnittelua, kilpailijoita kovempaa teknologiaa ja tinkimätöntä palvelua, edullisesti.`,
}

const Verkkosivut = () => {
  const [isMobile, setMobile] = useState(false)

  const heroRef = useRef(null)
  const oldTechRef = useRef(null)
  const newTechRef = useRef(null)
  const FAQRef = useRef(null)

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
    {
      section: "verkkosivut#usein-kysyttya",
      hoverText: "Usein kysyttyä",
      ref: FAQRef,
    },
  ]

  return (
    <Layout topbar={true} sectionRefs={sectionRefs}>
      <Hero refs={heroRef} />
      <OldTech refs={oldTechRef} isMobile={isMobile} />
      <TextBar text={sisalto.textBar1} />
      <NewTech refs={newTechRef} isMobile={isMobile} />
      <NewTech2 />
      <FAQ refs={FAQRef} />
      <LogoSlider />
    </Layout>
  )
}

export default Verkkosivut
