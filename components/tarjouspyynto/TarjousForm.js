import styles from "./TarjousForm.module.sass"
import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Checkbox, TextArea, Selection, TextInput } from "./index"
import { ButtonStyler } from "../common/button"

// Content. Get from CMS?
const sisalto = {
  hinnasto: {
    verkkosivu: 2200,
    verkkokauppa: 3200,
    blogi: 1200,
    webApp: 2000,
    sivustoPieni: 300,
    sivustoKeskisuuri: 700,
    sivustoSuuri: 2000,
    sisallontuotto: 800,
    sisallonhallintaohjelma: 800,
    sisallonhallintapalvelu: 25,
    kansainvalistaminen: 1000,
  },
  tyypit: {
    verkkosivu: {
      name: "verkkosivu",
      label: "Verkkosivu",
      info: `Rakennamme verkkosivuston jonka päätarkoitus on vakuuttaa vierailijat ostamaan sinun palveluitasi. Jokainen sivusto tarvitsee vähintään markkinoitisivun tai aloitussivun.`,
      defaultChecked: true,
    },
    verkkokauppa: {
      name: "verkkokauppa",
      label: "Verkkokauppa",
      info: `Kehitämme verkkokaupan jolla myyt tuotteitasi tehokaasti 24/7. Integroimme sivustoon maksuportaalin ja varastonhallintapalvelun.`,
      defaultChecked: false,
    },
    blogi: {
      name: "blogi",
      label: "Blogi",
      info: `Yritysblogin tarkoitus on houkutella kävijöitä pääsivullesi kirjoittamalla kiinnostavilla artikkeleilla.`,
      defaultChecked: false,
    },
    webApp: {
      name: "webApp",
      label: "Web-app",
      info: `Hyötyykö yrityksesi React-pohjaisesta web-appista, joka palvelee asiakkaitasi uusilla menetelmillä? Teemme tilaustyönnä vaatimusten mukaisia verkkotuotteita ja palveluita.`,
      defaultChecked: false,
    },
  },
  lisatiedot: {
    projektinLaajuus: {
      name: "projektinLaajuus",
      label: "Projektin laajuus",
      options: [
        { label: "Pieni, 1-4 sivua.", value: "sivustoPieni" },
        { label: "Keskisuuri, 5-10 sivua.", value: "sivustoKeskisuuri" },
        { label: "Suuri, 11+ sivua.", value: "sivustoSuuri" },
      ],
    },
    projektiKuvaus: {
      name: "projektiKuvaus",
      label: "Kuvaile projektia omin sanoin",
    },
  },
  palvelut: {
    sisallontuotto: {
      name: "sisallontuotto",
      label: "Sisällöntuotto",
      info: `Kirjoitamme tekstit haastattelun ja toimialasi perusteella. Sisältöä on mahdollista editoida ennen julkaisua.`,
      defaultChecked: true,
    },
    sisallonhallintapalvelu: {
      name: "sisallonhallintapalvelu",
      label: "Sisällönhallintapalvelu",
      info: `Digiaalto hoitaa satunnaiset sisällönmuutokset puolestasi kertahintaan 25€ / muutos. Sopii yrityksille jotka eivät ennusta tarvitsevansa kokonaista sisällönhalintaohjelmaa.`,
      defaultChecked: false,
    },
    sisallonhallintaohjelma: {
      name: "sisallonhallintaohjelma",
      label: "Sisällönhallintaohjelma",
      info: `Integroimme sivustoon sisällönhallintaohjelman minkä kautta pystytte itsenäisesti muuttamaan tekstisisältöä.`,
      defaultChecked: false,
    },
    kansainvalistaminen: {
      name: "kansainvalistaminen",
      label: "Kansainvälistäminen",
      info: `Laajennu kansainvälisille markkinoille ja kasvata ulkomaalaisten asiakkaiden luottamusta tarjoamalla sisältöä heidän omalla kielellään.`,
      defaultChecked: false,
    },
  },
  yhteystiedot: {
    nimi: {
      name: "nimi",
      label: "Nimi",
    },
    sahkoposti: {
      name: "sahkoposti",
      label: "Sähköposti",
    },
    puhelinnumero: {
      name: "puhelinnumero",
      label: "Puhelinnumero",
    },
    yritys: {
      name: "yritys",
      label: "Yritys / Järjestö",
    },
  },
}
// Helper.
const required = {
  value: true,
  message: "Tämä kenttä on pakollinen.",
}
// Validation object for required fields.
const validation = {
  nimi: {
    required: required,
  },
  sahkoposti: {
    required: required,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Sähköpostiosoite on epäkelpo.",
    },
  },
  puhelinnumero: {
    required: required,
    minLength: {
      value: 7,
      message: "Puhelinnumero on liian lyhyt.",
    },
  },
  yritys: {
    required: required,
  },
}

/**
 * TARJOUSPYYNTÖ!
 *
 * Performant react hook form with validation, arranged in responsive grids.
 * Sends to FormSpree.io with Axios.
 */
const TarjousApp = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const [enabledProducts, setEnabledProducts] = useState({
    verkkosivu: sisalto.tyypit.verkkosivu.defaultChecked,
    verkkokauppa: sisalto.tyypit.verkkokauppa.defaultChecked,
    blogi: sisalto.tyypit.blogi.defaultChecked,
    webApp: sisalto.tyypit.webApp.defaultChecked,
    sivustoPieni: true,
    sivustoKeskisuuri: false,
    sivustoSuuri: false,
    sisallontuotto: sisalto.palvelut.sisallontuotto.defaultChecked,
    sisallonhallintapalvelu:
      sisalto.palvelut.sisallonhallintapalvelu.defaultChecked,
  })
  const { status, setStatus, setPrice } = props
  const [validType, setValidType] = useState(true)
  const typeRef = useRef(null)

  // This effect recalculates price with new values when a product is enabled in enabledProducts.
  useEffect(() => {
    const products = Object.keys(enabledProducts)
    let updatedPrice = 0
    for (let i = 0; i < products.length; i++) {
      let product = products[i]
      let enabled = enabledProducts[product]
      updatedPrice += enabled ? sisalto.hinnasto[product] : 0
    }
    setPrice(updatedPrice)
    const { verkkosivu, verkkokauppa, blogi, webApp } = enabledProducts
    setValidType(verkkosivu || verkkokauppa || blogi || webApp)
  }, [enabledProducts])

  const onSubmit = (data) => {
    if (!validType) {
      if (window) {
        const clientRect = typeRef.current.getBoundingClientRect()
        window.scrollBy(0, clientRect.y - 175)
      }
      return false
    }
    setStatus({ ...status, submitting: true })

    axios({
      method: "POST",
      url: "https://formspree.io/f/mbjpqqoe",
      data: data,
    })
      .then(handleServerResponse(true))
      .catch((response) => {
        console.log(response)
        handleServerResponse(false)
      })
  }

  function handleServerResponse(success) {
    setStatus({
      ...status,
      submitting: false,
      submitted: success,
      error: !success,
    })
  }

  // Updates the price widget.
  function onPriceChange(props) {
    const { target } = props
    // For selection.
    if (!target) {
      // Selection sends a custom Object, no event.
      const { value } = props
      const disabler = {
        sivustoPieni: false,
        sivustoKeskisuuri: false,
        sivustoSuuri: false,
      }
      setEnabledProducts({
        ...enabledProducts,
        ...disabler,
        [value]: true,
      })
    } else {
      // For checkboxes.
      setEnabledProducts({
        ...enabledProducts,
        [target.name]: target.checked,
      })
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TyyppiSection
          register={register}
          onPriceChange={onPriceChange}
          data={sisalto.tyypit}
          showError={!validType}
          typeRef={typeRef}
        />
        <LisatiedotSection
          register={register}
          onPriceChange={onPriceChange}
          data={sisalto.lisatiedot}
        />
        <PalvelutSection
          register={register}
          onPriceChange={onPriceChange}
          data={sisalto.palvelut}
        />
        <Yhteystiedot
          register={register}
          data={sisalto.yhteystiedot}
          errors={errors}
        />
      </form>
    </div>
  )
}

// Sections for form.
const TyyppiSection = ({
  register,
  onPriceChange,
  data,
  showError,
  typeRef,
}) => {
  return (
    <FormSection>
      <Header text={"Valitse projektin tyypit."} refs={typeRef} />
      {showError && (
        <span className={styles.error}>Valitse ainakin yksin tyyppi.</span>
      )}
      <RowGrid>
        <Checkbox
          {...data.verkkosivu}
          refs={register}
          onChange={onPriceChange}
        />
        <Checkbox
          {...data.verkkokauppa}
          refs={register}
          onChange={onPriceChange}
        />
        <Checkbox {...data.blogi} refs={register} onChange={onPriceChange} />
        <Checkbox {...data.webApp} refs={register} onChange={onPriceChange} />
      </RowGrid>
    </FormSection>
  )
}
const Yhteystiedot = ({ register, data, errors }) => {
  return (
    <FormSection>
      <Header text="Yhteystiedot." />
      <RowGrid>
        <TextInput
          {...data.nimi}
          refs={register({ ...validation.nimi })}
          error={errors.nimi}
          required
        />
        <TextInput
          {...data.sahkoposti}
          refs={register({ ...validation.sahkoposti })}
          error={errors.sahkoposti}
          required
        />
        <TextInput
          {...data.puhelinnumero}
          refs={register({
            ...validation.puhelinnumero,
          })}
          error={errors.puhelinnumero}
          required
        />
        <TextInput
          {...data.yritys}
          refs={register({ ...validation.yritys })}
          error={errors.yritys}
          required
        />
      </RowGrid>
      <ButtonStyler primary customStyle={{ marginTop: "2rem" }}>
        <button type="submit">Lähetä tarjouspyyntö</button>
      </ButtonStyler>
    </FormSection>
  )
}
const LisatiedotSection = ({ register, onPriceChange, data }) => {
  return (
    <>
      <FormSection>
        <Header text="Lisätietoja." />
        <ColumnGrid>
          <Selection
            {...data.projektinLaajuus}
            defaultValue={data.projektinLaajuus.options[0]}
            instanceId={data.projektinLaajuus.name}
            onChange={onPriceChange}
            refs={register}
            required
          />
          <TextArea {...data.projektiKuvaus} refs={register} />
        </ColumnGrid>
      </FormSection>
    </>
  )
}
const PalvelutSection = ({ register, onPriceChange, data }) => {
  return (
    <FormSection>
      <Header text="Valitse sisältöpalvelut." />
      <RowGrid>
        <Checkbox
          {...data.sisallontuotto}
          refs={register}
          onChange={onPriceChange}
        />
        <Checkbox
          {...data.sisallonhallintapalvelu}
          refs={register}
          onChange={onPriceChange}
        />
        <Checkbox
          {...data.sisallonhallintaohjelma}
          refs={register}
          onChange={onPriceChange}
        />
        <Checkbox
          {...data.kansainvalistaminen}
          refs={register}
          onChange={onPriceChange}
        />
      </RowGrid>
    </FormSection>
  )
}

// Reusable, common components.
const FormSection = ({ children }) => {
  return <div className={styles.formSection}>{children}</div>
}
const Header = ({ text, refs }) => {
  return (
    <h5 className={styles.overheader} ref={refs}>
      {text}
    </h5>
  )
}
const RowGrid = ({ children }) => (
  <div className={styles.rowGrid}>{children}</div>
)
const ColumnGrid = ({ children }) => (
  <div className={styles.columnGrid}>{children}</div>
)

export default TarjousApp
