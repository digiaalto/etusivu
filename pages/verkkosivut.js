import { useRef } from "react"
import mobileDetect from "mobile-detect"
import Layout from "../components/layouts"
import Hero from "../components/verkkosivut/Hero"
import OldTech from "../components/verkkosivut/OldTech"
import TextBar from "../components/verkkosivut/TextBar"
import NewTech from "../components/verkkosivut/NewTech"
import NewTech2 from "../components/verkkosivut/NewTech2"
import LogoSlider from "../components/verkkosivut/LogoSlider"
import Tarjouspyynto from "../components/verkkosivut/Tarjouspyynto"

const sisalto = {
  textBar1: `Investoi moderniin teknologiaan ja kasva huoletta. Digiaalto ei rakenna vain nettisivuja. Tarjoamme huolellista suunnittelua, kilpailijoita kovempaa teknologiaa ja tinkimätöntä palvelua.`,
  textBar2: `Digiaallon tehtävä on tuoda parhaat verkkoratkaisut yrittäjille jotka haluavat asiakkailleen turvallisempaa ja mukavampaa käyttökokemusta ja itselleen vaivatonta, kustannustehokasta sivustonhallintaa.`,
}

const Verkkosivut = (props) => {
  const { isMobile } = props
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
      <OldTech refs={oldTechRef} isMobile={isMobile} />
      <TextBar text={sisalto.textBar1} />
      <NewTech refs={newTechRef} isMobile={isMobile} />
      <NewTech2 />
      <LogoSlider />
      <TextBar text={sisalto.textBar2} alt />
      <Tarjouspyynto refs={tarjouspyyntoRef} />
    </Layout>
  )
}

export default Verkkosivut

Verkkosivut.getInitialProps = ({ req }) => {
  const md = new mobileDetect(req.headers["user-agent"])
  return { isMobile: md.mobile() ? true : false }
}
