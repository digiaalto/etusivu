import { useRef } from "react"
import Layout from "../components/layouts"
import Hero from "../components/verkkosivut/Hero"
import OldTech from "../components/verkkosivut/OldTech"
import TextBar from "../components/verkkosivut/TextBar"
import NewTech from "../components/verkkosivut/NewTech"
import ThereIsMore from "../components/verkkosivut/ThereIsMore"
import LogoSlider from "../components/verkkosivut/LogoSlider"
import Tarjouspyynto from "../components/verkkosivut/Tarjouspyynto"

const sisalto = {
  textBar1: `Investoi moderniin teknologiaan ja kasva huoletta. Digiaalto ei rakenna vain nettisivuja. Tarjoamme huolellista suunnittelua, kilpailijoita kovempaa teknologiaa ja tinkimätöntä palvelua.`,
  textBar2: `Digiaallon tehtävä on tuoda parhaat verkkoratkaisut yrittäjille jotka haluavat asiakkailleen turvallisempaa ja mukavampaa käyttökokemusta ja itselleen vaivatonta, kustannustehokasta sivustonhallintaa.`,
}

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
      <TextBar text={sisalto.textBar1} />
      <NewTech refs={newTechRef} />
      <ThereIsMore />
      <LogoSlider />
      <TextBar text={sisalto.textBar2} alt />
      <Tarjouspyynto refs={tarjouspyyntoRef} />
    </Layout>
  )
}

export default Verkkosivut
