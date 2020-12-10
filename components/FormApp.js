import styles from "../styles/FormApp.module.sass"
import React, { useState, useContext, createContext, useRef } from "react"
import Fader from "./utility/Fader"
import FunctionButton from "../components/utility/FunctionButton"
import { ImCheckmark } from "react-icons/im"
import { AiOutlineEnter } from "react-icons/ai"
import { GiMale, GiFemale } from "react-icons/gi"
import { FaPlay } from "react-icons/fa"
import LoadingBar from "../components/utility/LoadingBar"
import TextareaAutosize from "react-textarea-autosize"
import Select from "react-select"
import Slider from "./utility/Slider"

const FunctionsCtx = createContext(null)

const ageOptions = [
  {
    label: "Iällä ei väliä",
    value: "Iällä ei väliä",
    hotkey: "a",
  },
  {
    label: "17 tai nuorempi",
    value: "17 tai nuorempi",
    hotkey: "b",
  },
  {
    label: "18-24",
    value: "18-24",
    hotkey: "c",
  },
  {
    label: "25-36",
    value: "25-36",
    hotkey: "d",
  },
  {
    label: "37-48",
    value: "37-48",
    hotkey: "e",
  },
  {
    label: "49-59",
    value: "49-59",
    hotkey: "f",
  },
  {
    label: "60-70",
    value: "60-70",
    hotkey: "g",
  },
  {
    label: "70 tai vanhempi",
    value: "70 tai vanhempi",
    hotkey: "h",
  },
]

const moneyOptions = [
  {
    label: "Tulolla ei merkitystä",
    value: "Tulolla ei merkitystä",
    hotkey: "a",
  },
  {
    label: "alle 10,000€",
    value: "alle 10,000€",
    hotkey: "b",
  },
  {
    label: "10,000€ - 25,000€",
    value: "10,000€ - 25,000€",
    hotkey: "c",
  },
  {
    label: "35,000€ - 50,000€",
    value: "35,000€ - 50,000€",
    hotkey: "d",
  },
  {
    label: "50,000€ - 75,000€",
    value: "50,000€ - 75,000€",
    hotkey: "e",
  },
  {
    label: "75,000€ - 100,000€",
    value: "75,000€ - 100,000€",
    hotkey: "f",
  },
  {
    label: "yli 100,000€",
    value: "yli 100,000€",
    hotkey: "g",
  },
]

const NetlifyForm = () => {
  const [inProp, setInProp] = useState(true) // Controls the question element transition stages.
  const [index, setIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(0)
  const [downKeys, setDownKeys] = useState([])
  const [formData, setFormData] = useState({
    yritysNimi: "",
    toimiala: "",
    kilpailijat: "",
    ydinosaaminen: "",
    brandiKuvaus: "",
    brandiResurssit: "",
    kohderyhmaIka: "",
    kohderyhmaTulot: "",
    kohderyhmaSukupuoli: [50],
    kohderyhmaKuvaus: "",
    verkkosivuTyyppi: "",
    verkkosivuTavoite: "",
    verkkosivuPalvelut: "",
    etunimi: "",
    sukunimi: "",
    rooli: "",
    sahkoposti: "",
    puhelinnumero: "",
  })
  const [editorEnabled, setEditorEnabled] = useState(true)

  if (formData.puhelinnumero && formData.puhelinnumero.length > 0)
    console.log(formData)

  const onInputChange = (e, selection) => {
    if (selection) {
      updateField(selection, e.value)
    } else {
      e.preventDefault()
      const name = e.target.name
      const newValue = e.target.value
      updateField(name, newValue)
    }
  }

  const sliderChange = (props) => {
    const { name, values } = props
    setFormData({ ...formData, [name]: values })
  }

  const submitForm = (e) => {
    console.log("submitForm")
    console.log(e)
    return false
  }

  const changeQuestion = (e) => {
    e.preventDefault()
    const name = e.target.name
    switch (name) {
      case "prev":
        setNextIndex(index - 1)
        break
      default:
        setNextIndex(index + 1)
        break
    }
    setInProp(false)
  }

  function updateQuestion() {
    setIndex(nextIndex)
    setInProp(true)
  }

  const updateField = (fieldName, newValue) => {
    setFormData({ ...formData, [fieldName]: newValue })
  }

  const onInputKeyDown = (e, validated) => {
    const key = e.key
    const keyExists = downKeys.indexOf(key) > -1

    let keys = [...downKeys]

    if (!keyExists) {
      if (key === "Enter" || key === "Shift") keys.push(key)
    }
    setDownKeys(keys)

    if (
      keys.includes("Enter") &&
      keys.includes("Shift") &&
      e.target.nodeName.toLowerCase() === "textarea"
    ) {
      e.preventDefault()
      updateField(e.target.name, e.target.value + "\n")
    } else if (key === "Enter") {
      e.preventDefault()
      if (validated) changeQuestion(e)
    } else if (key === "Alt") e.preventDefault()
  }

  const onInputKeyUp = (e) => {
    const key = e.key
    let newKeys = [...downKeys]
    let indexOf = newKeys.indexOf(key)
    indexOf = indexOf > -1 ? indexOf : newKeys.indexOf(key.toUpperCase())
    if (indexOf > -1) {
      newKeys.splice(indexOf, 1)
    }
    setDownKeys(newKeys)
  }

  /**
   * Question elements which appear in the form.
   */
  const elements = [
    <Intermission
      header="Kiitos että olet kiinnostunut käyttäjäystävällisistä verkkosivuista!"
      subheader="Kysymme yrityksestäsi, brändistäsi, kohdemarkkinoistasi, tästä projektista ja lopuksi sinusta. Voit aina täydentää vastauksia sähköpostilla myöhemmin."
      buttonText="Ok"
    />,
    <Intermission header="Aloitetaan yrityksen perustiedoista." />,
    <Question
      label="Mikä on yrityksesi nimi?"
      name="yritysNimi"
      value={formData.yritysNimi}
      required
    />,
    <Question
      label="Yrityksesi toimiala?"
      name="toimiala"
      value={formData.toimiala}
      required
    />,
    <Question
      label="Kuka on yrityksesi kovin kilpailija?"
      subLabel="Heidän ei tarvitse olla samalta toimialalta. Ilmoita myös verkkosivut."
      name="kilpailijat"
      value={formData.kilpailijat}
    />,
    <Question
      label="Lopuksi, miten kuvailisit yrityksesi ydinosaamista?"
      subLabel="Eli, miten erotut kilpailijoista ja mihin kilpailukykysi perustuu."
      name="ydinosaaminen"
      value={formData.ydinosaaminen}
      required
    />,
    <Intermission
      header="Seuraavaksi vähän tiedustelua brändistä."
      subheader="Brändi on mututuntuma yrityksestä."
    />,
    <Question
      label="Miten kuvailet brändiäsi?"
      subLabel="Jos yritykselläsi ei ole kehitetty brändiä keksi 3-5 adjektiivia jotka edustavat toimintaasi."
      name="brandiKuvaus"
      value={formData.brandiKuvaus}
    />,
    <Question
      label="Onko sinulla omia brändiresursseja?"
      subLabel="Kuten suosikkifonttia, logoa, väriteemaa tms."
      name="brandiResurssit"
      value={formData.brandiResurssit}
    />,
    <Intermission
      header="Seuraavaksi mietitään verkkosivusi kohderyhmää."
      subheader="Alapalkista näet paljonko kysymyksiä on jäljellä. Olet noin 30% valmis."
    />,
    <Selection
      label="Arvioi verkkosivusi kohderyhmän ikä."
      value={formData.kohderyhmaIka}
      name="kohderyhmaIka"
      options={ageOptions}
      required
    />,
    <Selection
      label="Valitse asiakkaasi keskimääräinen tulo 12 kuukaudelta."
      name="kohderyhmaTulot"
      value={formData.kohderyhmaTulot}
      options={moneyOptions}
      required
    />,
    <RangeQuestion
      label="Arvioi kohderyhmäsi sukupuolijakauma."
      subLabel="Jätä 50 prosenttiin jos tällä ei ole merkitystä."
      name="kohderyhmaSukupuoli"
      values={formData.kohderyhmaSukupuoli}
      onChange={sliderChange}
    />,
    <Question
      label="Kirjoita vapaamuotoisesti tärkeitä asioita kohderyhmästäsi."
      subLabel="Esimerkiksi, mitä hän odottaa sinulta? Mikä on hänelle tärkeintä? Mitä huonoja kokemuksia toimialastasi?"
      name="kohderyhmaKuvaus"
      value={formData.kohderyhmaKuvaus}
      required
    />,
    <Intermission
      label="Hienoa. Sitten siirrytään itse verkkosivun kartoittamiseen."
      subheader="Seuraavaksi muutama kysymys itse verkkosivusta."
    />,
    <Question
      label="Kerro omin sanoin millaisen verkkosivun tarvitset."
      subLabel="Kerro myös tyyppi: markkinointisivu, blogi, verkkokauppa, web-app... "
      name="verkkosivuTyyppi"
      value={formData.verkkosivuTyyppi}
      required
    />,
    <Question
      label="Listaa verkkosivusi tärkeimmät tavoitteet."
      subLabel="Mitä haluat saavuttavasi sivun kautta ja miten?"
      name="verkkosivuTavoite"
      value={formData.verkkosivuTavoite}
      required
    />,
    <Question
      label="Mitä lisäpalveluita tarvitset?"
      subLabel="Aloitetaanko tyhjältä pöydältä vai oletko jo ostanut esimerkiksi domainin, palvelimen, yrityssähköpostin, tai muita palveluita?"
      name="verkkosivuPalvelut"
      value={formData.verkkosivuPalvelut}
      required
    />,
    <Intermission
      header="Siinä olikin valtaosa kysymyksistä."
      subheader="Otetaan talteen vielä yhteystiedot."
    />,
    <Question
      label="Teidän etunimi."
      name="etunimi"
      value={formData.etunimi}
      required
    />,
    <Question
      label="Teidän sukunimi."
      name="sukunimi"
      value={formData.sukunimi}
      required
    />,
    <Question
      label={`Hei, ${formData.etunimi}. Mikä rooli sinulla on yrityksessäsi?`}
      name="rooli"
      value={formData.rooli}
      required
    />,
    <Question
      label="Mistä sähköpostiosoitteesta sinut saa parhaiten kiinni?"
      name="sahkoposti"
      value={formData.sahkoposti}
      required
    />,
    <Question
      label="Ja vielä puhelinnumero."
      name="puhelinnumero"
      value={formData.puhelinnumero}
    />,
    <Intermission
      header="Kiitos kartoittajan käytöstä!"
      sublabel="Antamasi vastaukset käydään läpi ja sinuun otetaan yhteyttä lähiaikoina."
    />,
  ]

  let percentCompleted = (index / elements.length) * 100
  if (index + 1 === elements.length) percentCompleted = 100

  return (
    <form className={styles.netlifyForm}>
      <FunctionsCtx.Provider
        value={{
          onInputChange: onInputChange,
          changeQuestion: changeQuestion,
          onInputKeyDown: onInputKeyDown,
          onInputKeyUp: onInputKeyUp,
          editorEnabled: editorEnabled,
        }}
      >
        {editorEnabled ? (
          <FinalEditor elements={elements} />
        ) : (
          <>
            <Fader inProp={inProp} exitedCallback={updateQuestion}>
              {elements[index]}
            </Fader>
            <input name="filler" style={{ visibility: "hidden" }} />
            <LoadingBar percent={percentCompleted} />
          </>
        )}
      </FunctionsCtx.Provider>
    </form>
  )
}

/**
 * You're a fugboi.
 */
const RangeQuestion = (props) => {
  const { label, subLabel, name, values, onChange, required } = props
  return (
    <Element>
      <QuestionLabel
        label={label}
        subLabel={subLabel}
        center
        required={required}
      />
      <div className={styles.rangeContainer}>
        <div className={styles.rangeIcon}>
          <GiFemale />
        </div>
        <div className={styles.range}>
          <Slider name={name} values={values} onChange={onChange} />
        </div>
        <div className={styles.rangeIcon}>
          <GiMale />
        </div>
      </div>
      <Buttons
        disabled={false}
        // ref={buttonRef}
        icon={<ImCheckmark />}
        noEnter
        center
      />
    </Element>
  )
}

/**
 * An element which allows selection from pre-defined items.
 */
const Selection = ({
  label,
  subLabel,
  name, // kohderyhmaIka
  value,
  options, // array of objects: { label, name, key }
  required,
}) => {
  const { onInputChange, editorEnabled } = useContext(FunctionsCtx)
  const buttonRef = useRef(null)
  const hasValue = value && value.length > 0
  const buttonDisabled = required && !hasValue
  let btnIcon = !required && !hasValue ? <FaPlay /> : <ImCheckmark />

  return (
    <Element>
      <QuestionLabel label={label} subLabel={subLabel} optional />
      <Select
        value={{ label: value, value: value }}
        instanceId={name}
        options={options}
        onChange={(e) => onInputChange(e, name)}
        onMenuClose={() => {
          if (buttonRef && buttonRef.current) buttonRef.current.focus()
        }}
        autoFocus={!editorEnabled}
      />
      <Buttons
        disabled={buttonDisabled}
        ref={buttonRef}
        icon={btnIcon}
        noEnter
      />
    </Element>
  )
}

export default NetlifyForm

/**
 * Simplest question, uses TextareaAutosize in place of regular input field.
 */
const Question = ({ label, subLabel, value, name, buttonText, required }) => {
  const {
    onInputChange,
    onInputKeyDown,
    onInputKeyUp,
    editorEnabled,
  } = useContext(FunctionsCtx)
  const hasValue = value && value.length > 0
  const buttonDisabled = required && !hasValue

  let btnIcon = !required && !hasValue ? <FaPlay /> : <ImCheckmark />

  return (
    <Element>
      <QuestionLabel label={label} subLabel={subLabel} required={required} />
      <TextareaAutosize
        maxRows={10}
        type="text"
        name={name}
        value={value}
        onChange={onInputChange}
        onKeyDown={(e) => onInputKeyDown(e, hasValue || !required)}
        onKeyUp={onInputKeyUp}
        autoFocus={!editorEnabled}
      />
      <Buttons
        buttonText={buttonText}
        icon={btnIcon}
        disabled={buttonDisabled}
      />
    </Element>
  )
}

const FinalSection = (props) => (
  <Element>
    <Headers
      header={"Kiitos kartoittajan käytöstä!"}
      subheader={
        "Antamasi vastaukset käydään läpi ja sinuun otetaan yhteyttä lähiaikoina."
      }
    />
  </Element>
)

/**
 * An element that doesn't ask a question. A kind of break for the user filling the form.
 */
const Intermission = (props) => {
  const { changeQuestion, editorEnabled } = useContext(FunctionsCtx)
  if (editorEnabled) return null
  const { header, subheader, buttonText, btnIcon = <FaPlay /> } = props
  const buttonRef = useRef(null)
  return (
    <Element className={styles.finalEditor}>
      <Headers header={header} subheader={subheader} />
      <div className={styles.buttons}>
        <FunctionButton
          text={buttonText}
          name="next"
          onClick={changeQuestion}
          icon={btnIcon}
          ref={buttonRef}
        />
      </div>
    </Element>
  )
}

const FinalEditor = ({ elements }) => (
  <div className={styles.finalEditor}>
    <Element>
      <Headers
        header={"Voit vielä muuttaa vastauksesi."}
        subheader={"Lähetä tiedot sivun alaosassa olevasta painikkeesta."}
      />
    </Element>
    {elements.map((section, index) => (
      <div key={`section-${index}`}>{section}</div>
    ))}
  </div>
)

/**
 * HELPERS - HELPERS - HELPERS
 */
const Buttons = React.forwardRef((props, ref) => {
  const { changeQuestion, editorEnabled } = useContext(FunctionsCtx)
  if (editorEnabled) return null

  const { text, icon, noEnter, center, disabled } = props

  return (
    <div
      className={styles.buttons}
      style={center && { justifyContent: "center" }}
    >
      <FunctionButton
        text={text}
        name="next"
        onClick={changeQuestion}
        disabled={disabled}
        icon={icon}
        ref={ref}
      />
      {!noEnter && (
        <span className={styles.enterGuide}>
          <AiOutlineEnter />
          paina Enter
        </span>
      )}
    </div>
  )
})

const QuestionLabel = (props) => {
  const { label, subLabel, center, required } = props

  return (
    <div
      className={styles.labelContainer}
      style={center && { textAlign: "center" }}
    >
      <label className={styles.label}>
        {label}
        {required && " *"}
      </label>
      {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
    </div>
  )
}

const Headers = (props) => {
  const { header, subheader } = props

  return (
    <div>
      <span
        className={styles.header}
        style={subheader ? null : { marginBottom: "0" }}
      >
        {header}
      </span>
      {subheader && <span className={styles.subheader}>{subheader}</span>}
    </div>
  )
}

const Element = ({ children }) => {
  return <div className={styles.element}>{children}</div>
}
