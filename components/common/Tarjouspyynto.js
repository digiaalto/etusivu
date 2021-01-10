import styles from "./Tarjouspyynto.module.sass"
import React, { useState, useEffect } from "react"
import Select from "react-select"
import Input from "./Input"

const hinnat = {
  etusivu: 1500,
  blogi: 1000,
  verkkokauppa: 2500,
  portfolio: 1000,
  webApp: 2000,
  verkkosivuSisalto: 750,
  verkkokauppaSisalto: 950,
}
const selectOptionsLaajuus = [
  {
    label: "Pieni 1-3 sivua.",
    name: "laajuus",
    value: "Pieni 1-3 sivua.",
    hinta: 500,
  },
  {
    label: "Keskikokoinen 4-10 sivua.",
    name: "laajuus",
    value: "Keskikokoinen 4-10 sivua.",
    hinta: 1250,
  },
  {
    label: "Suuri 10+ sivua.",
    name: "laajuus",
    value: "Suuri 10+ sivua.",
    hinta: 1850,
  },
]
const Tarjouspyynto = () => {
  const [tarjousData, setTarjousData] = useState({
    etusivu: true,
    blogi: false,
    verkkokauppa: false,
    portfolio: false,
    webApp: false,
    laajuus: "Pieni 1-3 sivua.",
    verkkosivuSisalto: true,
    verkkokauppaSisalto: false,
    sisallonhallinta: false,
  })
  const [priceEstimation, setPriceEstimation] = useState(0)

  useEffect(() => {
    refreshPrices()
  }, [tarjousData])

  const refreshPrices = () => {
    let i
    let total = 0
    const keys = Object.keys(tarjousData)
    for (i = 0; i < keys.length; i++) {
      const name = keys[i]
      let item = tarjousData[name]
      // For Select
      if (typeof item === "string") {
        let foundItem = selectOptionsLaajuus.find((el) => el.label === item)
        if (foundItem) {
          total += Number(foundItem.hinta)
        }
      } else if (typeof item === "boolean" && item) {
        let hinnatItem = hinnat[name]
        if (hinnatItem) {
          total += Number(hinnat[name])
        }
      }
    }
    setPriceEstimation(total)
  }

  const handleSelectChange = ({ name, value }) => {
    setTarjousData({ ...tarjousData, [name]: value })
  }

  const handleOnChange = (e) => {
    const name = e.target.name
    const type = e.target.type
    let value
    if (type === "checkbox") {
      value = e.target.checked
    } else value = e.target.value
    setTarjousData({ ...tarjousData, [name]: value })
  }

  const ThirdPage = () => {
    return (
      <div>
        <h4 className={styles.subheader}>Lisäpalvelut.</h4>
        <Input
          label="Verkkosivun sisällöntuotanto"
          name="verkkosivuSisalto"
          type="checkbox"
          value={tarjousData.verkkosivuSisalto}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Verkkokaupan sisällöntuotanto"
          name="verkkokauppaSisalto"
          type="checkbox"
          value={tarjousData.verkkokauppaSisalto}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Digiaalto hoitaa sisällönhallinnan"
          name="sisallonhallinta"
          type="checkbox"
          value={tarjousData.sisallonhallinta}
          handleOnChange={handleOnChange}
        />
      </div>
    )
  }

  const SecondPage = () => {
    return (
      <div>
        <h4 className={styles.subheader}>Projektin laajuus.</h4>
        <Select
          value={{ label: tarjousData.laajuus, value: tarjousData.laajuus }}
          instanceId={"lajuus"}
          options={selectOptionsLaajuus}
          onChange={handleSelectChange}
        />
      </div>
    )
  }

  const FirstPage = () => {
    return (
      <div>
        <div className={styles.topbar}>
          <h4 className={styles.subheader}>Projektin tyyppi.</h4>
          <PriceEstimateWidget />
        </div>
        <Input
          label="Etusivu / Markkinointisivu"
          name="etusivu"
          type="checkbox"
          value={tarjousData.etusivu}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Blogi"
          name="blogi"
          type="checkbox"
          value={tarjousData.blogi}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Verkkokauppa"
          name="verkkokauppa"
          type="checkbox"
          value={tarjousData.verkkokauppa}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Portfolio"
          name="portfolio"
          type="checkbox"
          value={tarjousData.portfolio}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Web-app"
          name="webApp"
          type="checkbox"
          value={tarjousData.webApp}
          handleOnChange={handleOnChange}
        />
      </div>
    )
  }

  const PriceEstimateWidget = () => {
    return (
      <div className={styles.priceWidget}>
        <span>
          ~{priceEstimation} € <br /> <span className={styles.alv}>+ alv</span>
        </span>
      </div>
    )
  }

  return (
    <section className={styles.section} id="tarjouspyynto">
      <div className={styles.tarjouspyynto}>
        <h3 className={styles.header}>Tarjouspyyntö.</h3>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
      </div>
    </section>
  )
}

export default Tarjouspyynto
